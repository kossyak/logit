import commands from '../../fake_divace'
import { connect, sendCommand } from './connector'
import { bytesToBn, bufToBn, bnToB64, bytesToBase64, bytesToDateTime } from './converter'

export default {
	async connect() {
		await connect()
		// await sendCommand([0])
		// get s/n, version, battery
		const a = commands[25]()
		const series_number = bytesToBn(commands[2]()) // converter[2](data)
		const version = bytesToBn(commands[3]())
		const battery = bytesToBn(commands[4]())
		// get records
		const count = bytesToBn(commands[5]())
		const records = []
		for (let i = 0; i < count; i++) {
			const record = {
				name: btoa(String.fromCharCode(...new Uint8Array(commands[25]())))
			}
			records.push(record)
		}
		const b = commands[23]()
		console.log(bnToB64(bufToBn(a)), bytesToBase64(a), bytesToDateTime(b), new Date(bytesToDateTime(b) * 1000))
	
		
		return { series_number, version, battery, count, records }
	},
	disconnect() {
	
	},
	realTime() {
		// 6 temp
		// 7 p
	},
	getRecords() {
		// 5 - Количество записей
		// 20 - местополежение
		// 21-
		// 22-
		// 23-
		// 24-
		// 25-
		// 26-
		// 41
	},
	stop() {
	
	}
}