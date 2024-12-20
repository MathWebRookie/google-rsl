// 截图init函数
export async function Screenshotinit() {
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
  document.getElementById("fullPage").addEventListener("click", (e) => {
    // e.stopPropagation();
    // 实现整页截图逻辑
    console.log("整页截图", imageFormatSelect.value, exportFormatSelect.value);
  });

  document.getElementById("visibleArea").addEventListener("click", () => {
    // 实现可视区域截图逻辑
    chrome.tabs.captureVisibleTab(
      tab.windowId,
      { format: "png", quality: 100 },
      (image) => {
        // 会返回 base64 图片
        console.log("image:", image);
      }
    );
    console.log("可视区域截图");
  });

  document.getElementById("selectArea").addEventListener("click", () => {
    // 实现选择区域截图逻辑
    console.log("选择区域截图");
  });
}
