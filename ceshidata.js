// {
//     // 扩展名字
//     "name": "截图",
//     "version": "0.1",
//     // 定死为 3，就是最新版。
//     "manifest_version": 3,
//     "description": "给页面中的dom截图~", 
//     "author": "",
//     // 应用图标，如果不定义，在浏览器中默认是个灰色的
//     "icons": {
//         "16": "/icons/16.png",
//         "19": "/icons/19.png",
//         "38": "/icons/38.png",
//         "48": "/icons/48.png",
//         "128": "/icons/128.png"
//     },
//     // 后台进程脚本
//     "background": {
//         "service_worker": "service-worker.js"
//     },
//     // 配置页面, 配置项很多的话可以单独写到一个页面中
//     // "options_page": "setting/index.html",
//     // 浏览器右上角扩展图标和点击后弹出的页面，这里点击不弹出页面， 这里点击要直接截屏而不是打开浮窗，所以不配置页面。
//     "action": {
//         // 配置项不多的话直接写到弹出层中使用起来更简单
//         // 暂时先注释掉，一会再加配置页面
//         // "default_popup": "./setting/index.html",
//         "default_icon": {
//             "16": "/icons/16.png",
//             "19": "/icons/19.png",
//             "38": "/icons/38.png",
//             "48": "/icons/48.png",
//             "128": "/icons/128.png"
//         }
//     },
//     // 内容脚本，可以直接操作页面 dom
//     "content_scripts": [
//         {
//             "js": [
//                 "content.js"
//             ],
//             // 在所有网址都执行该脚本
//             "matches": [
//                 "<all_urls>"
//             ]
//         }
//     ],
//     // 快捷键定义
//     "commands": {
//         "domScreenshot": {
//             "description": "dom 截图",
//             "suggested_key": {
//                 "default": "Alt+Shift+D"
//             }
//         }, 
//         "areaScreenshot": {
//             "description": "区域截图",
//             "suggested_key": {
//                 "default": "Alt+Shift+Q"
//             }
//         }
//     },
//     // 权限定义
//     "permissions": [
//         // 用来存储扩展程序的数据
//         "storage",
//         // 用来操作浏览器页面
//         "activeTab",
//         // 使用 `chrome.scripting` API 在不同上下文中执行脚本。
//         "scripting",
//         // 桌面消息通知
//         "notifications"
//     ], 
//     // 点击图标后跳转的地址
//     "homepage_url": ""
// }
