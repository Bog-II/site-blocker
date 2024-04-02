import PopUp from "./PopUp.svelte";

const QUERIES_CHROME_STORAGE_ID = "queries_chrome_storage_id";

const popup = new PopUp({
  target: document.body,
  props: {
    title: "Queries",
    chrome_storage_id: QUERIES_CHROME_STORAGE_ID,
  },
});

export default popup;
