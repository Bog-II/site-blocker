const getForbiddenDomains = async (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(__DOMAINS_CHROME_STORAGE_ID__, function (result) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        // Make sure we have a string before calling split
        const urls = result[__DOMAINS_CHROME_STORAGE_ID__]
          ? result[__DOMAINS_CHROME_STORAGE_ID__].toLowerCase().split("\n")
          : [];
        resolve(urls);
      }
    });
  });
};

const getForbiddenQueries = async (): Promise<Set<string>> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(__QUERIES_CHROME_STORAGE_ID__, function (result) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        // Make sure we have a string before calling split
        const queries: Set<string> = new Set(
          result[__QUERIES_CHROME_STORAGE_ID__]
            ? result[__QUERIES_CHROME_STORAGE_ID__].toLowerCase().split("\n")
            : []
        );
        resolve(queries);
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

const main = () => {
  setupBlockingRules();

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url) {
      if (tab.url.includes("https://www.bing.com/search")) {
        const url = new URL(tab.url);
        const queryParams = url.search; // Extract query parameters, including the '?'

        // Construct the new URL for Google search with the original query parameters
        const newUrl = `https://www.google.com/search${queryParams}`;

        // Redirect by updating the tab's URL to Google's search
        chrome.tabs.update(tabId, { url: newUrl });
      } else if (tab.url.includes("google.com/search")) {
        getForbiddenQueries().then((forbiddenQueries) => {
          const url = new URL(tab.url || "");
          const urlParams = new URLSearchParams(url.search);
          const queryParams = (urlParams.get("q") || "").split(" ");
          for (const queryParam of queryParams) {
            if (forbiddenQueries.has(queryParam.toLowerCase())) {
              chrome.tabs.update(tabId, {
                url: "https://www.google.com/search",
              });
            }
          }
        });
      }
    }
  });

  chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "refreshBlockingRules") {
      setupBlockingRules();
    }
  });
};

main();
