loginButtonElement.addEventListener("click", () => {
  const username = usernameElement.value;
  const password = passwordElement.value;
  //validate
  for (const user of listUser) {
    if (user.user === username && user.pass === password) {
      currentUser = user;
      if (user.role === "hotel") {
        removeClass(detailUserInfoScreenElement, "d-none");
        addClass(loginPageElement, "d-none");
        removeClass(navMenuElement, "d-none");
        // addClass(userPageElement, "d-none");
        removeClass(hotelPageElement, "d-none");
        renderListRoomByHotel(currentUser.id);
        // removeClass(); // hotel page
        return;
      } else if (user.role === "user") {
        removeClass(detailUserInfoScreenElement, "d-none");
        addClass(loginPageElement, "d-none");
        removeClass(userPageElement, "d-none"); //user page
        removeClass(navMenuElement, "d-none");
        addClass(btnAddRoomElement, "d-none");
        return;
      }
    }
  }
  alert("Invalid username and/or password");
});

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
  renderDetailUserInfo(currentUser);
});

btnSubmitAddRoomElement.addEventListener("click", () => {
  const formAddRoom = {
    numOfPerson: parseInt(addRoomNumberPersonElement.value),
    description: addRoomDescriptionElement.value,
    price: parseInt(addRoomPriceElement.value),
    picture: previewPicture.src,
    userId: currentUser.id,
  };

  const isValidateAddRoomOk = validateAddRoomForm(formAddRoom);
  if (isValidateAddRoomOk) {
    // validate input

    listRooms.push(formAddRoom);

    console.log("list room ====>", listRooms);
    renderListRoomByHotel(currentUser.id);
    addRoomNumberPersonElement.value = "";
    addRoomDescriptionElement.value = "";
    addRoomPriceElement.value = "";
    previewPicture.src = "";   
  }
  popupAddNewRoom.style.display = "none";

});
