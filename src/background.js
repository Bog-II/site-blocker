chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: ["*://www.example.com/*"] }, // Patterns of websites to block
  ["blocking"]
);
