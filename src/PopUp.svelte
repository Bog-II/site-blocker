<script lang="ts">
  import { onMount } from "svelte";

  export let title = "";
  export let chrome_storage_id = "";

  let textareaContent = "";

  onMount(() => {
    chrome.storage.local.get(chrome_storage_id, (result) => {
      if (result[chrome_storage_id]) {
        textareaContent = result[chrome_storage_id];
      }
    });
  });

  function handleSaveButtonClick() {
    const data = {};
    data[chrome_storage_id] = textareaContent;
    chrome.storage.local.set(data).then(async () => {
      await chrome.runtime.sendMessage({ action: "refreshBlockingRules" });
      window.close();
    });
  }
</script>

<div id="content">
  <h1>{title} to block</h1>

  <textarea bind:value={textareaContent} id="textarea_to_block"></textarea>

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
    resize: none;
  }
</style>
