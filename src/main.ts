const btn = document.getElementById('btn')
const counter = document.getElementById('counter')

btn.addEventListener('click', action)
function action(this: HTMLButtonElement, _: MouseEvent) {
  const texts = counter?.textContent?.split(' ')
  texts[2] = +texts[2] + 1
  counter.innerText = texts.join(' ')
}
