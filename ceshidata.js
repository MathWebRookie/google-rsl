// {
//   "name": "Getting Started Example",  // 插件名称
//   "description": "Build an Extension!", // 插件描述
//   "version": "1.0", // 版本
//   "manifest_version": 3, // 指定插件版本，这个很重要，指定什么版本就用什么样的api，不能用错了
//   "background": {
//     "service_worker": "background.js" // 指定background脚本的路径
//   },
//   "action": {
//     "default_popup": "popup.html", // 指定popup的路径
//     "default_icon": {  // 指定popup的图标，不同尺寸
//       "16": "/images/get_started16.png",
//       "32": "/images/get_started32.png",
//       "48": "/images/get_started48.png",
//       "128": "/images/get_started128.png"
//     }
//   },
//   "icons": { // 指定插件的图标，不同尺寸
//     "16": "/images/get_started16.png",
//     "32": "/images/get_started32.png",
//     "48": "/images/get_started48.png",
//     "128": "/images/get_started128.png"
//   },
//   "permissions": [],// 指定应该在脚本中注入那些变量方法，后文再详细说
//   "content_scripts": [ // 指定content脚本配置
//     {
//       "js": [ "content.js"], // content脚本路径
//       "css":[ "content.css" ],// content的css
//       "matches": ["<all_urls>"] // 对匹配到的tab起作用。all_urls就是全部都起作用
//     }
//   ]
// }