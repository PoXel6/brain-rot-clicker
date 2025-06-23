<script setup lang="ts">
import { ref } from "vue";
import GameButton from "./components/GameButton.vue";

const count = ref(0);
const multi = ref(1);
const speed = ref(1000);

const increase = () => {
	count.value += multi.value;
};

function incMulti(e: MouseEvent) {
	const cost = 10;
	count.value -= cost;
	buyAll(e, cost);
	multi.value++;
}

function rebirth(e: MouseEvent) {
	const cost = 100;
	count.value -= cost;
	buyAll(e, cost);
	multi.value = 1;
	setInterval(() => {
		count.value++;
	}, speed.value);
}

function halfSpeed(e: MouseEvent) {
	const cost = 1_000_000;
	count.value -= cost;
	buyAll(e, cost);
	Math.round(speed.value / 2);
}

function buyAll(e: MouseEvent, cost: number) {
	if (e.shiftKey) {
		const rem = count.value % cost;
		const multiRem = Math.floor(count.value / cost);
		count.value = rem;
		multi.value += multiRem;
		return;
	}
}

function truncate(): string {
	if (count.value > 1_000_000_000_000) {
		return `${Math.floor(count.value * 0.000_000_000_01) / 10}T`;
	}
	if (count.value > 1_000_000_000) {
		return `${Math.floor(count.value * 0.000_000_01) / 10}B`;
	}
	if (count.value > 1_000_000) {
		return `${Math.floor(count.value * 0.000_01) / 10}M`;
	}
	if (count.value > 1000) {
		return `${Math.floor(count.value * 0.01) / 10}K`;
	}
	if (count.value <= 1000) {
		return count.value;
	}
	return count.value.toString();
}
</script>

<template>
  <div class="container">
    <div class="inner">
      <h1>Count is {{  truncate() }}</h1>
      <p>Actual count value: {{ count }}</p>
      <button @click="increase" class="counter">
      Click me
      </button>
    </div>
    <div class="buttons">
      <GameButton @click="incMulti" v-if="count >= 10" text="Multiplier +1 -10p" fg="white" bg="black"/>
      <GameButton @click="rebirth" v-if="count >= 100" text="Rebirth" fg="magenta" bg="lightgray"/>
      <GameButton @click="halfSpeed" v-if="count >= 1_000_000" text="Speeeed" fg="red" bg="white"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  margin-top: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 75vw;
  height: 75vh;
  background-color: hsl(150,50%,20%);
}

.inner {
  background-color: lightgray;
  min-width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  flex-direction: column;
  font-size: 2rem;
  font-family: "Inter Variable";
}

.counter {
  color: whitesmoke;
  background-color: gray;
  border: none;
  border-radius: 4px;
  padding: 1rem 3rem;
  margin-top: 2rem;
  border: 1px solid whitesmoke;
}

.counter:hover {
  color: gray;
  background-color: whitesmoke;
  border: 1px solid gray;
}

.buttons {
  width: 100%;
  min-height: 50%;
  max-height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
