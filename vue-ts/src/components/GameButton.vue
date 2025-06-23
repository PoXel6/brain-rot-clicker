<script setup lang="ts">
interface Props {
	text: string;
	fg: string;
	bg: string;
}

const props = defineProps<Props>();
</script>

<template>
    <button>
      {{ text }}
  </button>
</template>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 20vw;

  button {
    margin-top: 3rem;
    margin: 2rem 1rem;
    padding: 1rem 3rem;
    height: 5rem;
    width: 25rem;
    color: var(--text-2);
    background-color: var(--bg-2);
    border: 1px solid var(--border-1);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "JetBrainsMono Nerd Font";
    text-wrap: wrap;
  }

  button:hover {
    color: var(--text-3);
    background-color: var(--bg-3);
  }
}
</style>
