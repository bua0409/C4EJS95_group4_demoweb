const listHotel =[
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel1",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:5,
        Phone:09123345678,
        Prices:999,
        id:1,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel2",
        Place:"Ha Noi",
        Stars: 5 ,
        NumberOfRooms:6,
        Phone:09123345678,
        Prices:599,
        id:2,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel3",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:510,
        Phone:09123345678,
        Prices:909,
        id:3
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel4",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:20,
        Phone:09123345678,
        Prices:999,
        id:4,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel5",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:30,
        Phone:09123345678,
        Prices:999,
        id:4,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel6",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:5,
        Phone:09123345678,
        Prices:999,
        id:4,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel7",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:5,
        Phone:09123345678,
        Prices:999,
        id:5,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel8",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:5,
        Phone:09123345678,
        Prices:999,
        id:6,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel9",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:5,
        Phone:09123345678,
        Prices:999,
        id:7,
    }
]
function payment () {
    let pay = document.getElementById("payment");
    pay.innerHTML =""
    for (let i = 0; i < listHotel.length; i++){
        const hotel = listHotel[i];
        let html1 = `
              <tr>
                            <th scope="row">
                                <img src="${hotel.picture}"
                                    alt="" class="img-fluid z-depth-0">
                            </th>
                            <td>
                                <h5 class="mt-3">
                                    <strong>${hotel.nameOfHotel}</strong>
                                </h5>
                                <p class="text-muted">Apple</p>
                            </td>
                            <td></td>
                            <td>${hotel.Prices}</td>
                            <td><label for="checkin">Pick date:</label>
                                <input type="date" id="checkin" name="checkin"></td>
                            <td><label for="checkout">Pick date:</label>
                                <input type="date" id="checkout" name="checkout"></td>
                            <td>
                                <input type="number" value="1" aria-label="Search" class="form-control"
                                    style="width: 100px" min="1" max="${hotel.NumberOfRooms}">
                            </td>
                            <td class="font-weight-bold">
                                <strong>${hotel.Prices*i}</strong>
                            </td>
                            <td>
                                <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip"
                                    data-placement="top" title="Remove item">X
                                </button>
                            </td>
                    </tr>
           
        `;
        pay.innerHTML += html1;
    }    
}
payment();