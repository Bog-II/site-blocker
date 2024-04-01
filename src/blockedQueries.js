import PopUp from "./PopUp.svelte";

const popup = new PopUp({
  target: document.body,
  props: {
    title: "Queries",
    chrome_storage_id: "blocked_queries",
  },
});

export default popup;
