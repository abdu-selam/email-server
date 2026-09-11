export const isEmail = (email: string): boolean => {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regEx.test(email);
};
