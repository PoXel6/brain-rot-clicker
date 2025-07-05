<script setup lang="ts">
import App from "./App.vue";
import { ref } from "vue";
import GameButton from "./components/GameButton.vue";
import "./assets/main.css";

const count = ref(0);
const multi = ref(1);
const speed = ref(1000);

const increase = () => {
  count.value += multi.value;
};

function incMulti(e: MouseEvent): void {
  const cost = 10;
  if (count.value < cost) return;
  count.value -= cost;
  buyAll(e, cost);
  multi.value++;
}

function rebirth(e: MouseEvent): void {
  const cost = 100;
  if (count.value < cost) return;
  count.value -= cost;
  multi.value -= cost;
  buyAll(e, cost);
  setInterval(() => {
    count.value++;
  }, speed.value);
}

function halfSpeed(e: MouseEvent): void {
  const cost = 1_000_000;
  if (count.value < cost) return;
  count.value -= cost;
  buyAll(e, cost);
  Math.round(speed.value / 2);
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
    return count.value.toString();
  }
  return count.value.toString();
}

function buyAll(e: MouseEvent, cost: number): void {
  if (e.shiftKey) {
    const rem = count.value % cost;
    const multiRem = Math.floor(count.value / cost);
    count.value = rem;
    multi.value += multiRem;
    return;
  }
}
</script>

<template>
  <div class="container">
    <div class="inner">
      <div class="inner__img">
        <img src="../public/cookie_image.svg" alt="vue logo">
      </div>
      <div class="inner__text">
        <h1>Count is {{ truncate() }}</h1>
        <p>Actual count value: {{ count }}</p>
        <p>Multiplier: {{ multi }}</p>
        <button @click="increase" class="counter">
          Click me
        </button>
      </div>
    </div>
    <div class="buttons">
      <GameButton @click="incMulti" v-if="count >= 10" text="Multiplier +1 -10p" />
      <GameButton v-else text=" Reach 10 Point" fg="var(--warn)"/>
      <GameButton @click="rebirth" v-if="count >= 100" text="Rebirth" />
      <GameButton v-else text=" Reach 100 Point" fg="var(--warn)"/>
      <GameButton @click="halfSpeed" v-if="count >= 1_000_000" text="Speeeed" />
      <GameButton v-else text=" Reach 1_000_000 Point" fg="var(--warn)"/>
    </div>
  </div>
</template>

<style scoped>
@import url(./assets/main.css);

.container {
  background-color: var(--bg-1);
  margin: auto;
  margin-top: 5rem;
  width: 75vw;
  height: 75vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.inner {
  color: var(--text-2);
  background-color: var(--bg-2);
  border: 1px solid var(--border-1);
  border-radius: 1.2rem;
  min-width: 75vw;
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  .inner__img {
    img {
      width: 15vw;
      height: auto;
    }
  }

  .inner__text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;

    h1,
    p {
      margin: 0;
    }

    h1 {
      margin-bottom: 2.5rem;
    }
  }
}

.counter {
  color: var(--text-2);
  background-color: var(--bg-1);
  border: 1px solid var(--border-1);
  border-radius: 4px;
  max-width: 20vw;
  min-width: 10vw;
  max-height: 3vh;
  min-height: 5vh;
  margin-top: 2rem;
  font-size: 1.2rem;
  transition: all 250ms ease-out;
}

.counter:hover {
  color: var(--secondary-1);
  background-color: var(--bg-3);
  font-size: 1.5rem;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.warn {
  color: var(--warn);
}
</style>
