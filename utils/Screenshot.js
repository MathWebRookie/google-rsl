// 截图init函数
export async function Screenshotinit() {
  const Screenshot = document.getElementById("Screenshot");
  const screenshotMenu = document.getElementById("screenshotMenu");
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
}
