<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let title = "";
  export let chrome_storage_id = "";

  const textareaContent = writable("");

  onMount(() => {
    chrome.storage.local.get(chrome_storage_id, (result) => {
      if (result[chrome_storage_id]) {
        textareaContent.set(result[chrome_storage_id]);
      }
    });
  });

  function handleTextareaInput(event) {
    const content = event.target.value;
    textareaContent.set(content);
  }

  function handleSaveButtonClick() {
    textareaContent.subscribe(async (content) => {
      const data = {};
      data[chrome_storage_id] = content;
      await chrome.storage.local.set(data);
      window.close()
    });
  }
</script>

<div id="content">
  <h1>{title} to block</h1>

  <textarea
    on:input={handleTextareaInput}
    bind:value={$textareaContent}
    id="textarea_to_block"
  ></textarea>

  <button on:click={handleSaveButtonClick}>Save</button>
</div>

<style>
  #content {
    display: flex;
    padding: 7%;
    gap: 3%;
    height: 100%;
    flex-direction: column;
    align-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  #textarea_to_block {
    width: 100%;
    height: 100%;
  }
</style>
