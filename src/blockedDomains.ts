import PopUp from "./PopUp.svelte";

const popup = new PopUp({
  target: document.body,
  props: {
    title: "Domains",
    chrome_storage_id: __DOMAINS_CHROME_STORAGE_ID__,
  },
});

export default popup;
