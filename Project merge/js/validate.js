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
      if (listUser[i].user === registerForm.username) {
        alert("Account already exists");
        return false;
      }
      if (listUser[i].email === registerForm.email) {
        alert(registerForm.email + " is already register.");
        return false;
      }
    }
  }
  return true;
}
