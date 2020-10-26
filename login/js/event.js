/*submitLogin.addEventListener("click", async ()=>{
    const isOk =await validateLogin(
        emailLogin.value,
        passwordLogin.value
    );
if(isOK) {
    const searchUser = `username=${emailLoginElement.value}&password=${passwordLoginElement.value}`;
    const result = await fetchUserBy(searchUser);
    if (result[0]) {
        removeClass();
        addClass();

    }
}
})*/

submitreg.addEventListener("click", ()=>{
    submitreg.disabled === false;
    listUser.push(newuser);
    alert(emailInput.value + "  Thanks for registration. \nTry to login Now")
})

submitforgot.addEventListener("click",()=>{
    submitforgot.disabled === false;
    alert("Email is send to your email check it in 24hr. \n Thanks")
})

submitLogin.addEventListener("click",()=>{
    for (const user of listUser) {
        if (user.email === emailLogin && user.pass === passwordLogin) {
            if (user.role === "hotel") {
                addClass();
                removeClass();
            } else {
                addClass();
                removeClass();
            }
            break;
        }
    submitLogin.disab === false;
}})
