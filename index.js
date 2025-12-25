// P@ssw0rd Str3ngth!
// Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

// A password is evaluated according to the following rules:

// It is at least 8 characters long.
// It contains both uppercase and lowercase letters.
// It contains at least one number.
// It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
// Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.

function checkStrength(password) {
  console.log(password);

  let counter = 0;

  // it is at least 8 characters long
  if (password.length >= 8) {
    counter++;
  }

  // contains both lower & uppercase
  const upper = /[A-Z]/;
  const lower = /[a-z]/;
  if (upper.test(password) && lower.test(password)) {
    counter++;
  }

  // contains at least one number
  const num = /[0-9]/;
  if (num.test(password)) {
    counter++;
  }

  // contains at least one special character
  const chars = /[!@#$%\^\&\*]/;
  if (chars.test(password)) {
    counter++;
  }

  if (counter < 2) {
    return 'weak';
  } else if (counter <= 3) {
    return 'medium';
  } else {
    return 'strong';
  }

  console.log(counter);
  return password;
}
