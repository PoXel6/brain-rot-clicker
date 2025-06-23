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

  button {
    margin-top: 3rem;
    padding: 1rem 3rem;
    min-width: 30ch;
    color: var(--text-2);
    background-color: var(--bg-2);
    border: 1px solid var(--border-1);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "JetBrainsMono Nerd Font";
  }

  button:hover {
    color: var(--text-3);
    background-color: var(--bg-3);
  }
}
</style>
