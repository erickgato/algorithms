const arrayProps = require('./components/arrayPrototype');
const prompt = require("prompt");

/**
 * Start application
 * 
 * @param {Function} innerApp 
 */
module.exports = function (innerApp) {

	/**
	 * Make prompt possible
	 */
	prompt.start();
	
	/**
	 * Console log wrapper(for future implements)
	 * @param  {...any} logs 
	 * @returns
	 */
	const resultHandler = (logs) => logs.map(logLine => console.log(...logLine));
	
	/**
	 * Console error wrapper
	 * 
	 * @param  {...any} logs 
	 * @returns 
	 */
	const errorHandler = (...logs) => console.error(...logs);

	/**
	 * Convert prompt question to promised question
	 * 
	 * @param {object} props
	 * @return Promise<{Object}>
	*/
	const question = (props) => {
		return new Promise((resolve, reject) => {
			prompt.get(props,  (error, result) => {
					resolve(result);
			});
		});
	};

	arrayProps();


	innerApp({ resultHandler, question, errorHandler });
}
