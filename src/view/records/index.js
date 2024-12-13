import nodeComponent from '../../nodeComponent'

const records = {
	template: '<ul class="items"></ul><button class="create btn">create</button>',
	nodes() {
		return {
		...nodeComponent.next.bind(this)('create', 'creation'),
		...nodeComponent.items(this.app.data.records, ['name'], this.method.active)
		}
	},
	methods: {
		active(item) {
			this.app.item = item
			this.app.view('details')
		}
	}
}
export { records }