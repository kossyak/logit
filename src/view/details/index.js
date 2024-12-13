import nodeComponent from '../../nodeComponent'

const details = {
	template: '<button class="back btn">back</button>',
		nodes() {
		return {
			...nodeComponent.next.bind(this)('back', 'records')
		}
	}
}
export { details }