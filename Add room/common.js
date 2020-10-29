const pushRoom = () => { 
    let room = {
        id: listRooms.length + 1,
        numOfPerson: Number(numOfPerson.value),
        description: description.value,
        price: Number(price.value),
    };      
    listRooms.push(room);
    console.log(listRooms)
};
const removeClass = (element, className) => {
    element.classList.remove(className);
};
const addClass = (element, className) => {
    element.classList.add(className);
};
const clearInput = () => {
    numOfPerson.value ="",
    description.value ="",
    price.value ="",
    picture.src = ""
};
