// 截图init函数
export async function Screenshotinit() {
  async function copy_img_to_clipboard(image) {
    const storage_data = await chrome.storage.sync.get(["model"]);
    const model = storage_data.model || "file";
    // 复制都用户粘贴板中
    if (model === "base64") {
      navigator.clipboard.writeText(image);
    } else if (model === "file") {
      const [header, base64] = image.split(",");
      const [_, type] = /data:(.*);base64/.exec(header);
      const binary = atob(base64);
      const array = Array.from({ length: binary.length }).map((_, index) =>
        binary.charCodeAt(index)
      );
      navigator.clipboard.write([
        new ClipboardItem({
          // 这里只能写入 png
          "image/png": new Blob([new Uint8Array(array)], { type: "image/png" }),
        }),
      ]);
    }
  }
  const Screenshot = document.getElementById("Screenshot");
  const screenshotMenu = document.getElementById("screenshotMenu");
  const imageFormatSelect = document.getElementById("imageFormat");
  const exportFormatSelect = document.getElementById("imgexportFormat");
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // 点击其他地方关闭菜单
  document.addEventListener("click", () => {
    screenshotMenu.style.display = "none";
  });
  //
  Screenshot.addEventListener("click", async (e) => {
    e.stopPropagation();
    screenshotMenu.style.display =
      screenshotMenu.style.display === "block" ? "none" : "block";

    // 定位菜单到按钮下方
    const btnRect = Screenshot.getBoundingClientRect();
    screenshotMenu.style.top = `${btnRect.bottom + 5}px`;
    screenshotMenu.style.left = `${btnRect.left}px`;
  });
  // 处理各种截图选项
  document.getElementById("domPage").addEventListener("click", () => {
    // 实现整页截图逻辑
    console.log("dom截图");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          type: "select-dom",
          exportFormatSelectvalue: exportFormatSelect.value,
        },
        function (res) {
          console.log("选择的 dom 信息: ", res);
          alert("dom截图已完成！");
        }
      );
    });
  });

  document.getElementById("visibleArea").addEventListener("click", () => {
    // 实现可视区域截图逻辑
    chrome.tabs.captureVisibleTab(
      //   tab.windowId,
      { format: "png", quality: 100 },
      (image) => {
        exportFormatSelect.value === "base64"
          ? navigator.clipboard.writeText(image)
          : copy_img_to_clipboard(image);
      }
    );
    console.log("可视区域截图");
    alert("可视区域截图已完成！");

  });

  document.getElementById("selectArea").addEventListener("click", () => {
    // 实现选择区域截图逻辑
    console.log("选择区域截图");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          type: "area-screenshot",
          exportFormatSelectvalue: exportFormatSelect.value,
        },
        function (res) {
          console.log("选择区域截图: ", res);
        }
      );
    });
  });
}
