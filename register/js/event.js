const check =()=>{

    if (emailInput.value !=""){
    return true;
    }
    if (passwordInput.value !=""){
    return true;
    }
    if (passwordInput.value === passwordRetypeInput.value){
    return true;
    }
    if (usernameInput.value !=""){
    return true;
    }

    if (phoneInput.value !=""){
    return true;
    }
    return true;
}

submitReg.addEventListener("click", async ()=>{
    const notOK = await validateRegister()
    const isOK = await check()
    if(isOK){
        const newUser = {
            id: listUser.length + 1,
            email: emailInput.value,
            user: usernameInput.value,
            pass: passwordInput.value,
            address: addressInput.value,
            phone: phoneInput.value,
            role: "user",
          };
          listUser.push(newUser);
          alert(emailInput.value + "  Thanks for registration. \nTry to login Now");
        }
    }
)
