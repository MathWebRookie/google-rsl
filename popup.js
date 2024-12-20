// 直接在popup.js中引入changeColor.js
const importcolor = async () => {
  const colorUtils = chrome.runtime.getURL("./utils/changeColor.js");
  return await import(colorUtils);
};

// 更改颜色
const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // 触发更改颜色函数  
  chrome.storage.sync.set({ color: (await importcolor()).getRandomColor() });
  // 监听点击事件，如果点击就执行下面的代码，并获取当前激活的tab的id。
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (await importcolor()).setPageBackgroundColor,
  });
  // 在当前激活的tab页面中执行setPageBackgroundColor这样一个函数
});

// 截图
const Screenshot = document.getElementById("Screenshot");
Screenshot.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log('截图了！');
  // chrome.storage.sync.set({ color: (await importcolor()).getRandomColor() });
  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   func: (await importcolor()).setPageBackgroundColor,
  // });
});