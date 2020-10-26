const username = document.getElementById("username-field").value;
    const password = document.getElementById("password-field").value

const getEmailbyUser = (user) => {
    return listUser.find((data) => data.user === username);
};


const getPhoneByUser = (user) =>{
    return listUser.find((data) => data.user === username);
}



const getIdByUser = (user) => {
    return listUser.find((data)=> data.user === username)
}


let currentLogin = {
    id: getIdByUser(listUser.id),
    user: username,
    email: getEmailbyUser(listUser.email),
    phone: getPhoneByUser(listUser.phone),
    
}