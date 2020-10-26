const pushdata = (data) => {
    Element.listUser.push(data);}
    
    let newuser = {
        id: listUser.length + 1,
        email: emailInput,
        user: usernameInput,
        pass: passwordInput,
        address: addressInput,
        phone: phoneInput,
        role: "user",
    };