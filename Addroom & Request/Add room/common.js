const pushRoom = () => { 
    let room = {
        id: listRoom.length + 1,
        soNguoi: Number(numOfPerson.value),
        mieuTa: description.value,
        gia: Number(price.value),
    };      
    listRoom.push(room);
    console.log(listRoom);
};
const clearInput = () => {
    numOfPerson.value ="",
    description.value ="",
    price.value ="",
    picture.src = ""
};
