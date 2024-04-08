import PopUp from "./PopUp.svelte";

const popup = new PopUp({
  target: document.body,
  props: {
    title: "Queries",
    chrome_storage_id: __QUERIES_CHROME_STORAGE_ID__,
  },
});

export default popup;
