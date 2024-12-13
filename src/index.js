import { mountWidget } from '../lesta.esm'
import view from './view'

import './style.css'

const app = {
	data: {},
	item: {},
	container: {
		header: document.getElementById('header'),
		main: document.getElementById('main')
	},
	view(name) {
		mountWidget({ options: view[name], target: app.container.main }, app)
	}
}
app.view('start')
