const listHotel =[
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel1",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:5,
        Phone:09123345678,
        Prices:999,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel2",
        Place:"Ha Noi",
        Stars: 5 ,
        NumberOfRooms:6,
        Phone:09123345678,
        Prices:599,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel3",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:510,
        Phone:09123345678,
        Prices:909,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel4",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:20,
        Phone:09123345678,
        Prices:999,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel5",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:30,
        Phone:09123345678,
        Prices:999,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel6",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:5,
        Phone:09123345678,
        Prices:999,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel7",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:5,
        Phone:09123345678,
        Prices:999,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel8",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:5,
        Phone:09123345678,
        Prices:999,
    },
    {
        picture:"https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
        nameOfHotel: "Hotel9",
        Place:"Ha Noi",
        Stars: 4 ,
        NumberOfRooms:5,
        Phone:09123345678,
        Prices:999,
    }
]

function listOfHotels () {
    let hotels = document.getElementById("hotels");
    hotels.innerHTML =""
    for (let i = 0; i < listHotel.length; i++){
        const hotel = listHotel[i];
        let html = `
        <div class="row">
    
            <!--Grid column-->
            <div class="col-md-6 mb-4 mb-md-0">
    
              <!--Image-->
              <div class="view overlay z-depth-1-half">
                <img src="${hotel.picture}" class="img-fluid" alt="">
                <a href="#">
                  <div class="mask rgba-white-light"></div>
                </a>
              </div>
    
            </div>
            <!--Grid column-->
    
            <!--Grid column-->
            <div class="col-md-6 mb-4 mb-md-0">
              <h3 class="font-weight-bold">${hotel.nameOfHotel}</h3>
              <p><i class="fas fa-map-marked">${hotel.Place} </i></p>
              <p><i class="fas fa-star">${hotel.Stars}</i></p>
              <p><i class="fas fa-bed">${hotel.NumberOfRooms}</i></p>
              <p><i class="fas fa-phone-square">${hotel.Phone}</i></p>
              <p><i class="fas fa-dollar-sign">${hotel.Prices}</i></p>
              <a class="btn btn-brown btn-md ml-0" href="#" role="button">Travel<i class="fa fa-plane ml-2"></i></a>
              </div>
            </div>
           
        `;
        hotels.innerHTML += html;
    }    
}
listOfHotels();


