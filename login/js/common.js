

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
