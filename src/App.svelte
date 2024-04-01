<script>
  function openCenteredWindow(url, width, height) {
    // Calculate the position for the new window to be centered
    const left = Math.round(window.screen.width / 2 - width / 2);
    const top = Math.round(window.screen.height / 2 - height / 2);

    chrome.windows.create({
      url: url,
      type: "popup",
      width: width,
      height: height,
      left: left,
      top: top,
    });
  }

  function showBlockeddSites() {
    openCenteredWindow("blockedSites.html", 500, 500);
  }

  function showBlockedQueries() {
    openCenteredWindow("blockedQueries.html", 500, 500);
  }
</script>

<div id="menu">
  <button on:click={showBlockeddSites}>Websites</button>
  <button on:click={showBlockedQueries}>Queries</button>
</div>

<style>
  div#menu {
    display: flex;
    gap: 4px;
    flex-direction: column;
    width: 100px;
  }
</style>
