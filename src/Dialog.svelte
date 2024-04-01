<script>
  export let show = false;
  export let close;

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      close();
    }
  }

  // Handle keydown events
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      close();
    }
  }
</script>

{#if show}
  <div
    class="overlay"
    on:click={handleOverlayClick}
    on:keydown={handleKeyDown}
    tabindex="0"
    role="button"
    aria-label="Close dialog"
  >
    <div class="dialog" role="dialog" aria-modal="true" tabindex="-1">
      <button on:click={close}>Close</button>
      <slot />
      <!-- Dialog content -->
    </div>
  </div>
{/if}

<style>
  /* Your CSS */
</style>
