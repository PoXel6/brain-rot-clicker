import { createApp } from "vue";
import App from "./App.vue";
import { ref } from "vue";

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

function buyAll(e: MouseEvent, cost: number): void {
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
    return count.value.toString();
  }
  return count.value.toString();
}
createApp(App).mount("#app");
