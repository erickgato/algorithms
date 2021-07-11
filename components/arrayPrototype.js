/**
 * Common array prototype method 
 * 
 * @returns
 */
module.exports = function () {

  /**
   * Check if number is odd
   * 
   * @param {int} number 
   * @returns 
   */
  const isOdd = (number) => {
    return number % 2 == 0;
  };

  /** 
   * Get only array numbers
   * 
   * @example [0, 'a', 1].numbers() // output: [0,1]
   * @return Array
   */
  Array.prototype.numbers = function() {
    return this.filter(n => Number(n));
  }

  /**
   * Sum only array numbers
   * 
   * @example [ 1, 2 ].sum() // output: 3
   * @returns 
   */
  Array.prototype.sum = function () {
    return this.numbers().reduce((acc, crr) => acc + crr, 0);
  };

  /**
   * Get only array odd numbers
   * 
   * @example [1,2] // output: [2]
   * @return Array 
   */
  Array.prototype.odd = function () {
    return this.numbers().filter((i) => isOdd(i));
  };

  /**
   * Get only even array numbers
   * 
   * @example [1,2] // output: [1]
   * @return Array
   */
  Array.prototype.even = function () {
    return this.numbers().filter((i) => isOdd(i) == false);
  };
};
