const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is incorrectly formatted";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is necessary";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords don't match";
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = "Age field is necessary";
  }

  if (Validator.isEmpty(data.politicalLeaning)) {
    errors.politicalLeaning = "Political Leaning field is necessary";
  }
ß
  if (Validator.isEmpty(data.religiousAffiliation)) {
    errors.religiousAffiliation = "Religious Affiliation field is necessary";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is necessary";
  }

   if (Validator.isEmpty(data.location)) {
    errors.location = "Location field is necessary";
  }

  if (Validator.isEmpty(data.petChoice)) {
    errors.petChoice = "Pet Choice field is necessary";
  }

  if (Validator.isEmpty(data.ethnicity)) {
    errors.ethnicity = "Ethnicity field is necessary";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
