const checkPasswordStrength = (password) => {
  let passwordQualifications = [false, false, false, false, false];

  let hasLowercaseAndUppercase = new RegExp("(?=.*[a-z])(?=.*[A-Z])");
  let hasNumber = new RegExp("(?=.*[0-9])");
  let hasSpecialCharacter = new RegExp("(?=.*[^A-Za-z0-9])");
  let atLeastEight = new RegExp("(?=.{8,})");

  if (atLeastEight.test(password)) {
    passwordQualifications[0] = true;
  }
  if (hasLowercaseAndUppercase.test(password)) {
    passwordQualifications[1] = true;
  }
  if (hasNumber.test(password)) {
    passwordQualifications[2] = true;
  }
  if (hasSpecialCharacter.test(password)) {
    passwordQualifications[3] = true;
  }

  if (
    passwordQualifications[0] &&
    passwordQualifications[1] &&
    passwordQualifications[2] &&
    passwordQualifications[3]
  )
    passwordQualifications[4] = true;
  return passwordQualifications;
};

module.exports = { checkPasswordStrength };
