chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: ["*://www.google.com/*"] }, // Patterns of websites to block
  ["blocking"]
);
