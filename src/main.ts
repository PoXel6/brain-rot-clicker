const btn = document.getElementById('btn')
const counter = document.getElementById('counter')
const multiBtn = document.getElementById('inc-multi')
let def_multi = 1
let def_multi_cost = 10

btn?.addEventListener('click', incCount)
function incCount() {
	setCount(getCount() + def_multi)
}

function getCount(): number {
	const text = counter?.textContent
	if (!text) {
		return -1
	}
	const texts = text.split(' ')
	return Number(texts[2])
}

function setCount(val: number): void {
	const text = counter?.textContent
	if (!text) {
		return
	}
	const texts = text.split(' ')
	texts[2] = val.toString()
	counter.innerText = texts.join(' ')
}

multiBtn?.addEventListener('click', incMulti)
function incMulti(): void {
  if (getCount() < 10) {
    return
  }
  setMulti(getMulti() + 1)
  setCount(getCount() - def_multi_cost)
}

function setMulti(val: number): void {
  def_multi = val
}

function getMulti(): number {
  return def_multi
}
