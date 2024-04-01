<script>
  import Dialog from "./Dialog.svelte";
  let showDialog = false;

  function toggleDialog() {
    showDialog = !showDialog;
  }
</script>

<!-- Button to toggle the dialog -->
<button on:click={toggleDialog}>Open Dialog</button>

<!-- Dialog component -->
<Dialog bind:show={showDialog} on:close={toggleDialog}>
  <h2>Dialog Title</h2>
  <p>This is a dialog.</p>
  <!-- The rest of your dialog content goes here -->
</Dialog>
