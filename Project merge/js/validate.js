//validateRegister
function validateRegisterForm(registerForm) {
  if (!registerForm.resUsername) {
    alert("User name required.");
    return false;
  } else if (!registerForm.resName) {
    alert("Name required.");
    return false;
  } else if (!registerForm.resEmail) {
    alert("Email required.");
    return false;
  } else if (!registerForm.resPhone) {
    alert("Phone required.");
    return false;
  } else if (!registerForm.resPassword) {
    alert("Password required.");
    return false;
  } else if (registerForm.resPassword !== registerForm.resRePassword) {
    alert("Password don't match retype your Password.");
    return false;
  } else {
    for (let i = 0; i < listUser.length; i++) {
      if (listUser[i].user === registerForm.resUsername) {
        alert("Account already exists");
        return false;
      }
      if (listUser[i].email === registerForm.resEmail) {
        alert(registerForm.email + " is already register.");
        return false;
      }
    }
  }
  return true;
}

//validateAddRoom

function validateAddRoomForm(formAddRoom) {
  if (!formAddRoom.name) {
    alert("Name required.");
    return false;
  } else if (!formAddRoom.numberOfPerson) {
    alert("Number of person required.");
    return false;
  } else if (
    formAddRoom.numberOfPerson < 1 ||
    formAddRoom.numberOfPerson > 15
  ) {
    alert("Number of person must be between 1 and 15");
    return false;
  } else if (!formAddRoom.description) {
    alert("Description required.");
    return false;
  } else if (!formAddRoom.price) {
    alert("Price required.");
    return false;
  } else if (!formAddRoom.picture) {
    alert("Picture required.");
    return false;
  } else if (!formAddRoom.picture) {
    alert("Picture required");
    return false;
  }
  return true;
}
