// background
const color = '#3aa757';

// 在安装完成之后，执行这样一个代码。相当于插件内部就存储了一个颜色。
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});

