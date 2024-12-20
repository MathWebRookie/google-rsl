// // 生成随机颜色的函数
// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// // 在插件安装时，存储随机生成的颜色
// chrome.runtime.onInstalled.addListener(() => {
//   const randomColor = getRandomColor();
//   chrome.storage.sync.set({ color: randomColor });
// });