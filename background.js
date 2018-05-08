chrome.tabs.onUpdated.addListener(
  (tabId, changeInfo, tab) => {
    const {title, url} = tab;
    if(/teams\.microsoft\.com/.test(url)) {
      //&& /(\d+).+$/.test(title)){
      chrome.notifications.create('', {
        type: "basic",
        title: "teams notification",
        message: "new teams message",
        iconUrl: "./ms.png",
      });
    }
  }
);
