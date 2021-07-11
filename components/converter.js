/**
 * Convert values to another formats
 * 
 * @return Object
 */
module.exports = {

	/** 
	 * Used to convert numbers to another base
	 * @example toBase(15, 16) // hexadecimal base
	 * 
	 * @return Array
	 */
	toBase(number, base) {
			let results = [];
			for(let i = number; i > 0; i=parseInt(i / base)) {
				results.push(i % base);
			}

			return results;
	},
	
	/**
	 * Convert number to hexadecimal
	 * @example toHex(15) // output: F
	 * @param {int} number 
	 * @returns 
	 */
	toHex(number){
		const hexLetters = [
			{
				letter: "A",
				number: 10,
			},
			{
				letter: "B",
				number: 11,
			},
			{
				letter: "C",
				number: 12,
			},
			{
				letter: "D",
				number: 13,
			},
			{
				letter: "E",
				number: 14,
			},
			{
				letter: "F",
				number: 15,
			},
		];
		let divisions = this.toBase(number, 16).map((n) => {
				if(n <= 9) return n;
				return hexLetters.find(i => i.number == n).letter;
		});

		return divisions.reverse().join("");
	},

	/**
	 * Convert number to octal(n __ 8)
	 * 
	 * @param {int} number 
	 * @returns 
	 */
	toOctal(number){
		return this.toBase(number, 8).reverse().join("");
	}
}