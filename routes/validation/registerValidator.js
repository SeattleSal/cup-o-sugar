const validatorFactory = require("./validatorFactory");

const registerValidator = validatorFactory({
  email: { type: "email" },
  password: { type: "string", empty: false },
  name: { type: "string"},
  neighborhood: { type: "string"}
});

module.exports = registerValidator;