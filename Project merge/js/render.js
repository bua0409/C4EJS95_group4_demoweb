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

const userDataDisplay = () => {
  userNameDisplay.innerHTML += `<h2 class="font-weight-bold mt-4" id="">${currentLogin[0].name}</h2>`;
  userEmailDisplay.innerHTML += `<h6 class="text-muted">${currentLogin[0].email}</h6>`;
  userPhoneDisplay.innerHTML += `<h6 class="text-muted">${currentLogin[0].phone}</h6>`;
};
