export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Fill in this field.";
  if (!re.test(email)) return " Enter a valid email address!";
  return "";
}
