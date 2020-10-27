function validateRegister() {
	if (emailInput.value=="") {
	  alert("Email required.");
	  return false;
	} else if (passwordInput.value =="") {
	  alert("Password required.");
	  return false;
	} else if (passwordRetypeInput.value=="") {
	  alert("Password required.");
	  return false;
	} else if (passwordInput.value !== passwordRetypeInput.value) {
	  alert("Password don't match retype your Password.");
	  return false;
	} else if (usernameInput.value =="") {
	  alert("User name required.");
	  return false;
	} else if (!phoneInput.value) {
	  alert("Phone required.");
	  return false;
	} else {
	  for (let i = 0; i < listUser.length; i++) {
		if (listUser[i].user === usernameInput.value) {
		  alert("Account already exists");
		  return false;
		}
		if (listUser[i].email === emailInput.value) {
		  alert(email + " is already register.");
		  return false;
		}
	  }
	}
}
	
