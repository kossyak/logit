import api from '../../api'
import nodeComponent from '../../nodeComponent'

const start = {
	template: `<img src="${require('../../images/logit.svg')}"><button class="connect btn">Connect</button>`,
		nodes() {
		return {
			...nodeComponent.next.bind(this)('connect', 'records', this.method.connect)
		}
	},
	methods: {
		async connect() {
			try {
				this.app.data = await api.connect()
				const { series_number, version, battery } = this.app.data
				this.app.container.header.innerHTML = `<span>s/n: ${ series_number }</span><span>version: ${ version }</span><span>battery: ${ battery }%</span>`
			} catch(e) {
				console.log(e)
				return true
			}
		}
	}
}

export { start }