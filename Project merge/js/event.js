loginButtonElement.addEventListener("click", () => {
  const username = usernameElement.value;
  const password = passwordElement.value;
  //validate
  for (const user of listUser) {
    if (user.user === username && user.pass === password) {
      currentLogin.push(user);
      console.log(currentLogin);
      if (user.role === "hotel") {
        addClass(loginPageElement, "d-none");
        // removeClass(); // hotel page
        return;
      } else if (user.role === "user") {
        addClass(loginPageElement, "d-none");
        removeClass(userPageElement, "d-none"); //user page
        userDataDisplay();
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

signupButtonSubmitElement.addEventListener("click", async () => {
  const resName = resNameElement.value;
  const resUsername = resUsernameElement.value;
  const resEmail = resEmailElement.value;
  const resPhone = resPhoneElement.value;
  const resPassword = resPasswordElement.value;
  const resRePassword = resRePasswordElement.value; /// need validate

  let reg = await notOK();
  if (reg) {
    const newUser = {
      id: listUser.length + 1,
      name: resName,
      email: resEmail,
      user: resUsername,
      pass: resPassword,
      phone: resPhone,
      role: "user",
    };

    listUser.push(newUser);
    console.log(listUser);
    alert("Thanks for registration. \nTry to login Now");

    redirectSignupToSignInScreen();
  }
});
