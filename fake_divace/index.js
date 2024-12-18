const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const randomBitArray = (length) => Array.from({ length: length / 8 }, () => Math.floor(Math.random() * 256))

export default {
	2: () => randomBitArray(24), // get series number
	3: () => randomBitArray(16), // get version
	4: () => [ 80 ], // get battery
	5: () => [ 3 ], // get number of records
	6: () => randomBitArray(16) ,// get current temp
	7: () => randomBitArray(16), // get current pressure
	20: (index) => randomBitArray(32 + 32), // get coordinates
	21: (index) => randomBitArray(16), // get depth
	22: (index) => randomBitArray(32), // get start time
	23: (index) => randomBitArray(32), // get end time
	24: (index) => randomBitArray(16), // get delayed start time
	25: (index) => randomBitArray(112), // get name record
	26: (index) => randomBitArray(8 + 128), // get record survey
	29: (index) => randomBitArray(32), // get readingsCount
	40: (data) => randomInt(0, 1),
	41: (index) => randomBitArray((16 + 16) * 10), // get record survey
}