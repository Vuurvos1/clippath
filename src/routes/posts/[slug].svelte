<script>
  import { stores } from '@sapper/app';
  import { onMount } from 'svelte';
  const { page } = stores();

  $: editing = false;
  $: preview = true;

  // Import markdown conversion library
  import marked from 'marked';

  // Declare a variable to store the markdown data
  let markdown = '';

  onMount(async () => {
    const keys = Object.keys($page.query);
    for (const i of keys) {
      if (i == 'edit') {
        editing = true;
        break;
      }
    }
  });
</script>

<style lang="scss">
</style>

{#if editing}
  <h1>Markdown Editor</h1>
  <input bind:checked={preview} type="checkbox" />

  {#if preview}
    <!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
    <textarea bind:value={markdown} placeholder="Enter markdown here" />
  {:else}
    <!-- Convert the markdown to HTML and display it -->
    <div class="preview">{@html marked(markdown)}</div>
  {/if}
{:else}
  <p>reading post</p>
{/if}
