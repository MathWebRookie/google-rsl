// 直接在popup.js中引入changeColor.js
const importcolor = async () => {
  const colorUtils = chrome.runtime.getURL("./utils/changeColor.js");
  return await import(colorUtils);
};

// 触发content页面body颜色函数
async function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.background = `linear-gradient(135deg, ${color[0]} 0%, ${color[1]} 100%)`;
  });
}

// 更改颜色
const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // 触发更改颜色函数  
  chrome.storage.sync.set({ color: (await importcolor()).getRandomColor() });
  // 监听点击事件，如果点击就执行下面的代码，并获取当前激活的tab的id。
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageBackgroundColor,
  });
  // 在当前激活的tab页面中执行setPageBackgroundColor这样一个函数
});
