import nodeComponent from '../../nodeComponent'

const creation = {
	template: '<input><button class="cancel btn">cancel</button><button class="confirmation btn">next</button>',
		nodes() {
		return {
			...nodeComponent.next.bind(this)('cancel', 'records'),
			...nodeComponent.next.bind(this)('confirmation', 'confirmation')
		}
	}
}
export { creation }