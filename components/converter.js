module.exports = {
	toBase(number, base) {
			let results = [];
			for(let i = number; i > 0; i=parseInt(i / base)) {
				results.push(i % base);
			}

			return results;
	},
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
	toOctal(number){
		return this.toBase(number, 8).reverse().join("");
	}
}