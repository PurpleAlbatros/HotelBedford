export function passwordValidator(password) {
  if (!password) return "Fill in this field.";
  if (password.length < 8)
    return "Your password should contain at least 8 characters.";
  return "";
}
