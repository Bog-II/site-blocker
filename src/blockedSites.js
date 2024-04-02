import PopUp from "./PopUp.svelte";

const SITES_CHROME_STORAGE_ID = "sites_chrome_storage_id";

const popup = new PopUp({
  target: document.body,
  props: {
    title: "Sites", // Pass the title as a prop
    chrome_storage_id: SITES_CHROME_STORAGE_ID,
  },
});

export default popup;
