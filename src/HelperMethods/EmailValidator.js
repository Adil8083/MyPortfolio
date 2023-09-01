function validateEmail(email) {
  // Regular expression for a valid email pattern
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Test the email against the pattern
  return emailPattern.test(email);
}

export default validateEmail;
