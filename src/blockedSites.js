import PopUp from "./PopUp.svelte";

const popup = new PopUp({
  target: document.body,
  props: {
    title: "Sites", // Pass the title as a prop
    chrome_storage_id: "blocked_sites",
  },
});

export default popup;
