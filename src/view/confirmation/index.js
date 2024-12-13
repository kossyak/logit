import nodeComponent from '../../nodeComponent'

const confirmation = {
	template: 'confirmation<button class="back btn">back</button><button class="submit btn">submit</button>',
		nodes() {
		return {
			...nodeComponent.next.bind(this)('back', 'creation'),
			...nodeComponent.next.bind(this)('submit', 'records')
		}
	}
}
export { confirmation }