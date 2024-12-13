let port
let writer
let reader

const connect = async () => {
	if (port) return
	port = await navigator.serial.requestPort()
	await port.open({ baudRate: 9600 })
	writer = port.writable.getWriter()
	reader = port.readable.getReader()
}

const sendCommand = async (command) => {
	// sending a packet
	const packet = new Uint8Array(command)
	await writer.write(packet)
	// response
	const { value, done } = await reader.read()
	return !done? value : console.error('|reader| has been canceled.')
}

async function closeConnection() {
	await writer?.releaseLock()
	await reader?.releaseLock()
	if (port) {
		await port.close()
		port = null
	}
}
// disconnect
window.onbeforeunload = async () => await closeConnection()
window.onunload = async () => await closeConnection()
document.ondblclick = async () => {
	console.log(111)
	await closeConnection()
}

export { connect, sendCommand }