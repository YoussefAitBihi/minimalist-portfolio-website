/**
 * Check whether name or message field is valid
 * @param text Could be the name or the message
 * @returns
 */
export const isFormInputNameOrMessageValid = (text: string) => {
  return text.length > 0;
};

/**
 * Check whether an email is valid or not
 * @param email
 * @returns
 */
export const isEmailValid = (email: string) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);
};
