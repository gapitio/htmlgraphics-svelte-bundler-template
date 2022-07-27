<script lang="ts">
  import { onDestroy } from "svelte";

  let htmlGraphicsData = data;

  function onPanelUpdate() {
    htmlGraphicsData = data;
  }

  htmlNode.addEventListener("panelupdate", onPanelUpdate);
  onDestroy(() => {
    htmlNode.removeEventListener("panelupdate", onPanelUpdate);
  });
</script>

<main>
  Value: {htmlGraphicsData.series[0]?.fields[1]?.state?.calcs?.last}
</main>

<style lang="css">
  main {
    text-align: center;
  }
</style>
