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
    min-width: 20ch;
    color: v-bind(fg);
    background-color: v-bind(bg);
    border: 1.5px solid hsl(150,50%,10%);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    color: v-bind(bg);
    background-color: v-bind(fg);
  }
}
</style>
