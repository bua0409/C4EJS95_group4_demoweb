loginButtonElement.addEventListener("click", () => {
  const username = usernameElement.value;
  const password = passwordElement.value;
  //validate
  for (const user of listUser) {
    if (user.user === username && user.pass === password) {
      currentUser = user;
      if (user.role === "hotel") {
        addClass(loginPageElement, "d-none");
        // removeClass(); // hotel page
        return;
      } else if (user.role === "user") {
        addClass(loginPageElement, "d-none");
        removeClass(userPageElement, "d-none"); //user page
        removeClass(userAvatarElement, "d-none");
        // userDataDisplay();
        return;
      }
    }
  }
  alert("Invalid username and/or password");
});

//check naming

signupButtonElement.addEventListener("click", () => {
  redirectSignInToSignupScreen();
});

signupButtonSubmitElement.addEventListener("click", () => {
  const registerForm = {
    resName: resNameElement.value,
    resUsername: resUsernameElement.value,
    resEmail: resEmailElement.value,
    resPhone: resPhoneElement.value,
    resPassword: resPasswordElement.value,
    resRePassword: resRePasswordElement.value, /// need validate
  };

  const isValidateOk = validateRegisterForm(registerForm);
  if (isValidateOk) {
    const newUser = {
      id: listUser.length + 1,
      name: registerForm.resName,
      email: registerForm.resEmail,
      user: registerForm.resUsername,
      pass: registerForm.resPassword,
      phone: registerForm.resPhone,
      role: "user",
    };

    listUser.push(newUser);
    console.log(listUser);
    alert("Thanks for registration. \nTry to login Now");
    redirectSignupToSignInScreen();
  }
});

btnShowDetailUserInfoElement.addEventListener("click", () => {
  console.log("current user ===>", currentUser);
  renderDetailUserInfo(currentUser);
});
