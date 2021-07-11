const app = require("../app");
const questioner = require("../components/questioner");


app(({ resultHandler, errorHandler, question }) => {
  let inputs = {
    size: 1,
    numbers: [],
  };

  question(["numberCount"]).then(async ({ numberCount }) => {
    inputs.size = numberCount || 1;
    if (inputs.size == 0) {
      errorHandler("A quantidade de números não pode ser igual a 0");
      return;
    }
    inputs.numbers = await questioner(inputs.size);
    const { numbers } = inputs;
    
    const onlyValidNumbers = numbers.range(-1000, 1000);
    const average = onlyValidNumbers.average().toFixed(1);

    resultHandler([
      ["Média aritmética", average],
    ]);
  });
});
