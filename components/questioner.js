const prompt = require('prompt');

/**
 * Provides many questions chained
 * 
 * @param {int} size
 * @return Array
 */
module.exports = async (size) => {
	prompt.start();
	const out = [];

	const next = async () => {
			return new Promise((resolve, reject) => {
				prompt.get('num', async (err, result) => {
						const {  num  } = result;
						out.push(parseInt(num));
						if(out.length < size) { 
							await next();
						}
						resolve();
				});
			})
	}

	await next();

	return out;
}