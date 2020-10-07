const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateQuizInput(data) {
  let errors = {};


//   if (!Validator.isEmail(data.email)) {
//     errors.email = "Email is incorrectly formatted";
//   }

//   if (Validator.isEmpty(data.email)) {
//     errors.email = "Email is required";
//   }

//   if (Validator.isEmpty(data.password)) {
//     errors.password = "Password field is necessary";
//   }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
