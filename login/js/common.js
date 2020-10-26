const loginBox = document.getElementById("login").value;
const regBox = document.getElementById("register").value;
const forgetBox = document.getElementById("forgot").value;
const loginTab = document.getElementById("lt").value;
const regTab = document.getElementById("rt").value;
const emailLogin = document.getElementById("se").value;
const passwordLogin = document.getElementById("sp").value;
const emailInput = document.getElementById("re").value;
const passwordInput = document.getElementById("rp").value;
const passwordRetypeInput = document.getElementById("rrp").value;
const usernameInput = document.getElementById("un").value;
const addressInput = document.getElementById("address").value;
const phoneInput = document.getElementById("phone").value;
const emailForgot = document.getElementById("fe").value;
const submitLogin = document.getElementById("submit-login");
const submitreg = document.getElementById("submit-reg");
const submitforgot = document.getElementById("submit-f");

const pushdata = (data) => {
    Element.listUser.push(data);
};
const getUserByEmail = (email) => {
    return listUser.find((data) => data.email === emailLogin);
};


const getPhoneByEmail = (email) =>{
    return listUser.find((data) => data.email===emailLogin);
}

const removeClass = (element, className) => {
    element.classList.remove(className);
};
const addClass = (element, className) => {
    element.classList.add(className);
};

const getIdByEmail = (email) => {
    return listUser.find((data)=> data.email === emailInput)
}

let newuser= {
        id: listUser.length + 1,
        email: emailInput,
        user: usernameInput,
        pass: passwordInput,
        address: addressInput,
        phone: phoneInput,
        role: "user",
    };

let currentLogin = {
    id: getIdByEmail(listUser.id),
    user: getUserByEmail(listUser.user),
    email: emailLogin,
    phone: getPhoneByEmail(listUser.phone),
    
}
