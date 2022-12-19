const usePasswordValidation = (password) => {
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password); // use any validator you want
  return isPasswordValid;
};

export default usePasswordValidation;