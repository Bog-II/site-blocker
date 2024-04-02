const SITES_CHROME_STORAGE_ID = "sites_chrome_storage_id";

const getForbiddenDomains = async (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(SITES_CHROME_STORAGE_ID, function (result) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        // Make sure we have a string before calling split
        const urls = result[SITES_CHROME_STORAGE_ID]
          ? result[SITES_CHROME_STORAGE_ID].split("\n")
          : [];
        resolve(urls);
      }
    });
  });
};

const setupBlockingRules = async () => {
  const forbidden_domains = await getForbiddenDomains();
  const rules = await chrome.declarativeNetRequest.getDynamicRules();
  const ruleIdsToRemove = rules.map((rule) => rule.id);

  chrome.declarativeNetRequest.updateDynamicRules(
    {
      addRules: forbidden_domains
        .filter((forbidden_domain) => forbidden_domain != "")
        .map((forbidden_domain, i) => ({
          id: i + 1,
          action: {
            type: "block",
          },
          condition: {
            urlFilter: forbidden_domain,
            resourceTypes: ["main_frame"],
          },
        })),
      removeRuleIds: ruleIdsToRemove,
    },
    () => console.log("Blocking rules added.")
  );
};

setupBlockingRules();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("https://www.bing.com/search")
  ) {
    const url = new URL(tab.url);
    const queryParams = url.search; // Extract query parameters, including the '?'

    // Construct the new URL for Google search with the original query parameters
    const newUrl = `https://www.google.com/search${queryParams}`;

    // Redirect by updating the tab's URL to Google's search
    chrome.tabs.update(tabId, { url: newUrl });
  }
});

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "refreshBlockingRules") {
    setupBlockingRules();
  }
});
