export function validateEmail(email) {
  if (email.includes('@') && email.includes('.com')) {
    return 'Valid Email';
  }
  return 'Invalid Email';
}

export function validatePassword(password) {
  if (password.length >= 8) {
    return 'Valid password';
  }
  return 'Need 8 or more caracthers';
}
