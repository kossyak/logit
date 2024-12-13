function items(items, keys, callback) {
	return {
		items: {
			innerHTML: () => items?.reduce((l, e, i) => l + `<li class="item" data-index="${i}">${ keys?.reduce((s, k) => s + `<span>${e[k]}</span>`, '') }</li>`, ''),
			onclick: (event) => {
				const target = event.target.closest('.item')
				if (!target) return
				callback(items[+target.dataset.index])
			}
		}
	}
}

export { items }