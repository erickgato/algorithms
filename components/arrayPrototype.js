/**
 * Common array prototype method 
 * 
 * @returns
 */
module.exports = function () {
  const isOdd = (number) => {
    return number % 2 == 0;
  };
  Array.prototype.sum = function () {
    return this.numbers().reduce((acc, crr) => acc + crr, 0);
  };
  Array.prototype.numbers = function() {
    return this.filter(n => Number(n));
  }
  Array.prototype.odd = function () {
    return this.numbers().filter((i) => isOdd(i));
  };
  Array.prototype.even = function () {
    return this.numbers().filter((i) => isOdd(i) == false);
  };
};
