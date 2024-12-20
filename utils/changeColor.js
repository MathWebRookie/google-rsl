// 生成随机颜色的函数
export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  let color1 = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  for (let i = 0; i < 6; i++) {
    color1 += letters[Math.floor(Math.random() * 16)];
  }
  // 在插件安装时，存储随机生成的颜色
  return [color,color1];
}

// 触发content页面body颜色函数
export async function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.background = `linear-gradient(135deg, ${color[0]} 0%, ${color[1]} 100%)`;
  });
}