const redirectSignInToSignupScreen = () => {
  addClass(signInScreenElement, "d-none");
  removeClass(signUpScreenElement, "d-none");
};

const redirectSignupToSignInScreen = () => {
  addClass(signUpScreenElement, "d-none");
  removeClass(signInScreenElement, "d-none");
};

const getEmailbyUser = (user) => {
  return listUser.find((data) => data.user === username);
};

const getPhoneByUser = (user) => {
  return listUser.find((data) => data.user === username);
};

const getIdByUser = (user) => {
  return listUser.find((data) => data.user === username);
};
