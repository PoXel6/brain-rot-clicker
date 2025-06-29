<script setup lang="ts">
interface Props {
	text: string;
	fg?: string;
}

const {fg = "var(--text-2)"} = defineProps<Props>();
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
    color: v-bind(fg);
    background-color: var(--primary-1);
    border: 1px solid var(--border-1);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: "JetBrainsMono Nerd Font";
    text-wrap: wrap;
  }

  button:hover {
    color: var(--secondary-1);
    background-color: var(--bg-3);
    font-size: 1.3rem;
  }
}
</style>
