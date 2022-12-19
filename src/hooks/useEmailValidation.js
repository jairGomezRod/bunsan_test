const useEmailValidation = (email) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); // use any validator you want
  return isEmailValid;
};

export default useEmailValidation;