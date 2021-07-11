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
  Array.prototype.numbers = function () {
    return this.filter((n) => Number(n));
  };

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

  /**
   * Filter array specific range
   *
   * @example [1,-9999, 3].range(0, 100) // output: [1,3]
   * @param {int} start
   * @param {int} end
   * @return Array
   */
  Array.prototype.range = function (start, end) {
    return this.numbers().filter((n) => n >= start && n <= end);
  };

  /**
   * Calculate array arithmetic average
   *
   * @return Array
   */
  Array.prototype.average = function () {
    const size = this.length;
    const sum = this.sum();
    return (sum / size);
  };
};
