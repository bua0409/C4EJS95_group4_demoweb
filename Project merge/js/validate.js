//validateRegister
function notOK() {
	if (resEmailElement.value=="") {
	  alert("Email required.");
	  return false;
	} else if (resPasswordElement.value =="") {
	  alert("Password required.");
	  return false;
	} else if (resPasswordElement.value=="") {
	  alert("Password required.");
	  return false;
	} else if (resPasswordElement.value !== resPasswordElement.value) {
	  alert("Password don't match retype your Password.");
	  return false;
	} else if (resUsernameElement.value =="") {
	  alert("User name required.");
	  return false;
	} else if (!resPhoneElement.value) {
	  alert("Phone required.");
	  return false;
	} else {
	  for (let i = 0; i < listUser.length; i++) {
		if (listUser[i].user === resUsernameElement.value) {
		  alert("Account already exists");
		  return false;
		}
		if (listUser[i].email === resEmailElement.value) {
		  alert(email + " is already register.");
		  return false;
		}
	  }
	}
	return true;
}

/*const isOk =()=>{

    if (resEmailElement.value !=""){
    return true;
    }
    if (resPasswordElement.value !=""){
    return true;
    }
    if (resPasswordElement.value === resRePasswordElement.value){
    return true;
    }
    if (resUsernameElement !=""){
    return true;
    }
  
    if (resPhoneElement.value !=""){
    return true;
    }
    return true;
  }
*/
