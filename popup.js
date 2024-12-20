// 直接在popup.js中引入changeColor.js
const init = async () => {
  const colorUtils = chrome.runtime.getURL("./utils/changeColor.js");
  const module = await import(colorUtils);
  const randomColor = module.getRandomColor();
  chrome.storage.sync.set({ color: randomColor });
};
init();

// 触发content页面body颜色函数
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.background = color;
  });
}

// 更改颜色
const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // 监听点击事件，如果点击就执行下面的代码，并获取当前激活的tab的id。
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageBackgroundColor,
  });
  // 在当前激活的tab页面中执行setPageBackgroundColor这样一个函数
});
