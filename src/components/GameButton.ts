class GameButton extends HTMLElement {
	constructor() {
		super()
		this.shadow = this.attachShadow({ mode: 'open' })
	}

	render() {
		this.shadow.innerHTML = `
      <style>
        .game__btn {
          font-size: 1.2rem;
          color: ${this.fg};
          background-color: ${this.bg};
          width: 10ch;
          padding: .9rem 1.1rem;
          margin: 1rem 0.5rem;
          border: none;
          border-radius: .3rem;
        }
        .game__btn:hover {
          color: hsl(180,50%,70%);
          background-color: hsl(180,100.0%,30.0%);
          cursor: pointer;
        }
      </style>
      <button class='game__btn' onclick=${this.action}>
        ${this.text}
      </button>
    `
	}

	static get observedAttributes(): string[] {
		return ['action', 'text', 'bg']
	}

	// attributeChangedCallback(name, oldVal, newVal): void {
	// 	this.render()
	// }
	attributeChangedCallback(): void {
		this.render()
	}

	connectedCallback() {
		this.render()
	}

	get fg(): string {
		const val = this.getAttribute('fg')
		return val ? val : ''
	}

	set fg(color: string) {
		this.setAttribute('fg', color)
	}

	get bg(): string {
		const val = this.getAttribute('bg')
		return val ? val : ''
	}

	set bg(color: string) {
		this.setAttribute('bg', color)
	}

	get action(): string {
		const val = this.getAttribute('action')
		return val ? val : ''
	}

	set action(action: string) {
		this.setAttribute('action', action)
	}

	get text(): string {
		const val = this.getAttribute('text')
		return val ? val : ''
	}

	set text(text: string) {
		this.setAttribute('text', text)
	}
}
customElements.define('game-button', GameButton)
