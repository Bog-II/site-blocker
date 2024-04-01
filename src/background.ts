const chrome_storage_id = "blocked_sites";
console.log(chrome_storage_id);

// const getForbiddenDomains = async (): Promise<string[]> => {
//   console.log("getForbiddenUrls");
//   return new Promise((resolve, reject) => {
//     chrome.storage.local.get(chrome_storage_id, function (result) {
//       if (chrome.runtime.lastError) {
//         reject(chrome.runtime.lastError);
//       } else {
//         console.log(result[chrome_storage_id]);
//         // Make sure we have a string before calling split
//         const urls = result[chrome_storage_id]
//           ? result[chrome_storage_id].split("\n")
//           : [];
//         resolve(urls);
//       }
//     });
//   });
// };

// console.log(getForbiddenDomains());

// function createBlockingRules(
//   forbiddenUrls: string[],
//   start_rule_index: number
// ): void {
//   console.log("blocking");
//   const rules: chrome.declarativeNetRequest.Rule[] = forbiddenUrls.map(
//     (url, index) => {
//       console.log(url, index);
//       return {
//         id: index + start_rule_index,
//         action: { type: "block" },
//         condition: { urlFilter: url },
//       };
//     }
//   );
//   console.log("created blocking rules");

//   chrome.declarativeNetRequest.updateDynamicRules({
//     addRules: rules,
//   });
// }

// function createDomainRedirections(
//   forbiddenDomains: string[],
//   redirectUrl: string,
//   start_rule_index: number
// ): void {
//   console.log("redirecting with regex");
//   const rules: chrome.declarativeNetRequest.Rule[] = forbiddenDomains.map(
//     (url, index) => {
//       console.log(url, redirectUrl);
//       return {
//         id: index + start_rule_index,
//         priority: 1,
//         action: { type: "redirect", redirect: { url: redirectUrl } },
//         condition: { urlFilter: url, resourceTypes: ["main_frame"] },
//       };
//     }
//   );

//   console.log("created redirecting rules");
//   chrome.declarativeNetRequest.updateDynamicRules({
//     addRules: rules,
//   });
// }

// const main = async () => {
//   await chrome.declarativeNetRequest.getDynamicRules().then((rules) => {
//     chrome.declarativeNetRequest.updateDynamicRules({
//       removeRuleIds: rules.map((rule) => rule.id),
//     });
//   });

//   createDomainRedirections(["||binance.com"], "https://google.com", 5);
// };

// main();


chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: "block",
        },
        condition: { urlFilter: "reddit.com", resourceTypes: ["main_frame"] },
      },
    ],
    removeRuleIds: [1],
  },
  () => console.log("Redirection rule added.")
);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only proceed if the tab has completed loading to avoid multiple triggers
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
