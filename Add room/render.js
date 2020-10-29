const redirectHomePageToAddroom = () => {
    addClass(addRoom, "d-none");
    removeClass(showRoom, "d-none");
};

const redirectAddroomToHomePage = () => {
    addClass(showRoom, "d-none");
    removeClass(addRoom, "d-none");
};

function displayListRooms() {
    let tbody = document.getElementById("list-rooms");
    tbody.innerHTML = "";
    for (let i = 0; i < listRooms.length; i++){
        const roomDB = listRooms[i];
        let html = `
        <tr>
            <td>${i + 1}</td>
            <td><img src="${roomDB.picture}" width= "300px" height= "300px"</td>
            <td>${roomDB.description}</td>
            <td>${roomDB.numOfPerson}</td>
            <td>${roomDB.price}</td>
        </tr>
        `;
        tbody.innerHTML += html;
    }    
}
displayListRooms();