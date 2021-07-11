const app = require("../app");
const converter = require("../components/converter");
const questioner = require("../components/questioner");
app(({ resultHandler, errorHandler, question }) => {
  let inputs = {
    size: 1,
    numbers: [],
  };

  question(["numberCount"]).then(async ({ numberCount }) => {
    inputs.size = numberCount || 1;
    if (inputs.size == 0) {
      errorHandler("A quantidade de numeros não pode ser igual a 0");
      return;
    }
    inputs.numbers = await questioner(inputs.size);
    const { numbers } = inputs;
    const sumAll = numbers.sum();
    const sumOdd = numbers.odd().sum();
    const sumEven = numbers.even().sum();

    resultHandler([
      ["Soma de todos", sumAll],
      ["Soma hexadecimal de todos os pares", converter.toHex(sumOdd)],
      ["Soma octal de todos os impares", converter.toOctal(sumEven)],
    ]);
  });
});
