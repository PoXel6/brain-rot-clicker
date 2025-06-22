const btn = document.getElementById('btn')
const counter = document.getElementById('counter')

btn?.addEventListener('click', incCount)
function incCount() {
	setCount(getCount() + 1)
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
