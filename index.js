/**
 * ASCII to Hexa array translation
 */
const _convert = {
		48: "0",
		49: "1",
		50: "2",
		51: "3",
		52: "4",
		53: "5",
		54: "6",
		55: "7",
		56: "8",
		57: "9",
		65: "A",
		66: "B",
		67: "C",
		68: "D",
		69: "E",
		70: "F",
		81: "A",
		97: "A",
		98: "B",
		99: "C",
		100: "D",
		101: "E",
		102: "F",
		113: "A"
	};

/**
 * Current tag value
 * @type String
 */
let _tag = "";

/**
 * Module to handle handled RFID reader message
 */
const HandledRFIDReaderDecoder = {
	/**
	 * Clear current tag value
	 * @returns {undefined}
	 */
	clear : () =>  {

		_tag = "";
	},
	/**
	 * Handle keyboard event
	 * @param {Event} event
	 * @param {function} onValid
	 * @returns {Boolean}
	 */
	onInput: (event, onValid) => {
			// if code is 84, it a tag prefix => clear value
			if (event.keyCode === 84) {

				_tag = "";
			} else if (event.keyCode === 13) { // validation on "Enter" case

				event.currentTarget.value = _tag;
				if(typeof onValid === "function"){
					onValid(_tag);
				}
			} else if (typeof _convert[event.keyCode] !== "undefined") { // add only if hexa input
				_tag = _tag + _convert[event.keyCode];
			}

			// display blocked
			return false;
	}
};

module.exports = HandledRFIDReaderDecoder;
