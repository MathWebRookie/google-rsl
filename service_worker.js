// 监听返回整个图片
chrome.runtime.onMessage.addListener((req, sender, res) => {
    if (req.type === "screenshot") {
      chrome.tabs.captureVisibleTab(
        //   tab.windowId,
        { format: "png", quality: 100 },
        (image) => {
          // 会返回 base64 图片
          console.log("image1111111:", image);
          res({ image });
        }
      );
    }
    return true;
  });
  