const listUser = [
  {
    id: 5,
    name: "Nguyen The Hung",
    email: "hungnt.se@gmail.com",
    user: "hungnt",
    pass: "123",
    phone: "0123456789",
    role: "hotel",
    hotelInfo: {
      name: "Muong Thanh Saigon Centre Hotel",
      picture:
        "https://cf.bstatic.com/images/hotel/max1024x768/627/62768875.jpg",
      stars: 4,
      place: "Sai Gon",
      phone: "0123456789",
      reviews: [
        {
          reviewId: 2,
        },
        {
          reviewId: 4,
        },
      ],
    },
  },
  {
    id: 1,
    name: "User Two",
    email: "username1@gmail.com",
    user: "username1",
    pass: "123tnvn",
    phone: "0123456789",
    role: "user",
  },
  {
    id: 2,
    name: "User Three",
    email: "username2@gmail.com",
    user: "username2",
    pass: "123tnvn1",
    phone: "0123456786",
    role: "user",
  },
  {
    id: 3,
    name: "User Four",
    email: "username3@gmail.com",
    user: "username3",
    pass: "123tnvn2",
    phone: "0123456787",
    role: "user",
  },
  {
    id: 4,
    name: "User Five",
    email: "username4@gmail.com",
    user: "username4",
    pass: "123tnvn3",
    phone: "0123456788",
    role: "hotel",
    hotelInfo: {
      name: "Sofitel Legend Metropole Ha Noi",
      picture:
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/07091321/HotelMetropoleHanoi-585x390.jpg",
      stars: 4,
      place: "Ha noi",
      phone: "0123456635",
    },
  },
  {
    id: 6,
    name: "Nguyen The Hung",
    email: "hungnt.user@gmail.com",
    user: "hungnt1",
    pass: "123",
    phone: "0123456789",
    role: "user",
  },
  {
    id: 7,
    name: "User six",
    email: "username6@gmail.com",
    user: "username6",
    pass: "123tnvn6",
    phone: "0123456778",
    role: "hotel",
    hotelInfo: {
      name: "Du Parc Hotel Dalat",
      picture:
        "https://media-cdn.tripadvisor.com/media/photo-s/04/8b/7b/8f/dalat-hotel-du-parc.jpg",
      stars: 4,
      place: "Da Lat",
      phone: "0123456778",
    },
  },
];

const listRooms = [
  {
    id: 1,
    userId: 5,
    name: "Luxury",
    picture:
      "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21105513/MH_Grand_Premium.jpg",
    stars: 5,
    numberOfPerson: 2,
    numberOfRoom: 4,
    description:
      "Free wifi, 1 single bed, room area: 30m², bathroom with shower & bathtub, no smoking",
    price: 3e3,
    phone: 09123345678,
    place: "Sai Gon",
  },
  {
    id: 2,
    userId: 5,
    name: "Grand Luxury",
    picture:
      "https://pix10.agoda.net/hotelImages/103/1032041/1032041_17090409580055942079.jpg",
    stars: 5,
    numberOfPerson: 4,
    numberOfRoom: 6,
    description:
      "Free wifi, 1 single bed, room area: 30m², bathroom with shower & bathtub, no smoking",
    price: 2e3,
    phone: 09123345678,
    place: "Sai Gon",
  },
  {
    id: 2,
    userId: 5,
    name: "Deluxe Triple",
    picture:
      "https://pix6.agoda.net/hotelImages/247/247372/247372_15061714230029771859.jpg?",
    stars: 5,
    numberOfPerson: 4,
    numberOfRoom: 5,
    description:
      "Free wifi, 2 double bed, room area: 50m², bathroom with shower & bathtub, no smoking",
    price: 4e3,
    phone: 09123345678,
    place: "Sai Gon",
  },
  {
    id: 2,
    userId: 5,
    name: "Deluxe King",
    picture:
      "https://pix6.agoda.net/hotelImages/103/1032041/1032041_17090410040055942402.jpg?",
    stars: 5,
    numberOfPerson: 2,
    numberOfRoom: 3,
    description:
      "Free wifi, 2 single bed, room area: 250m², bathroom with shower & bathtub, no smoking",
    price: 3e3,
    phone: 09123345678,
    place: "Sai Gon",
  },
  {
    id: 3,
    userId: 4,
    name: "Opera Wing_Grand Premium",
    picture:
      "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21105513/MH_Grand_Premium.jpg",
    stars: 5,
    numberOfPerson: 2,
    numberOfRoom: 2,
    description:
      "Free wifi, 1 single bed, room area: 48m², bathroom with shower & bathtub, no smoking",
    price: 3e3,
    phone: 09123345678,
    place: "Ha Noi",
  },
  {
    id: 3,
    userId: 4,
    name: "Opera Wing_Premium",
    picture:
      "https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/hotels/12/1ic1516271231_khach_san_sofitel_legend_metropole_hanoi.jpg",
    stars: 5,
    numberOfPerson: 2,
    numberOfRoom: 2,
    description:
      "Free wifi, 1 double bed, room area: 32m², bathroom with shower & bathtub, no smoking",
    price: 2e3,
    phone: 09123345678,
    place: "Ha Noi",
  },
  {
    id: 3,
    userId: 4,
    name: "Opera Wing_Prestige Suite",
    picture:
      "https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/hotels/12/4nx1488383314_khach_san_sofitel_legend_metropole_hanoi.jpg",
    stars: 5,
    numberOfPerson: 2,
    numberOfRoom: 2,
    description:
      "Free wifi, 1 double bed, room area: 32m², bathroom with shower & bathtub, no smoking",
    price: 6e3,
    phone: 09123345678,
    place: "Ha Noi",
  },
  {
    id: 3,
    userId: 4,
    name: "Opera Wing_Grand Premium",
    picture:
      "https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/hotels/12/Vsy0qVKwTAafD3zuNqSkEQ-37-Grand%2520Premium.jpeg",
    stars: 5,
    numberOfPerson: 2,
    numberOfRoom: 2,
    description:
      "Free wifi, 2 single bed, room area: 32m², bathroom with shower & bathtub, no smoking",
    price: 3e3,
    phone: 09123345678,
    place: "Ha Noi",
  },
  {
    id: 4,
    userId: 7,
    name: "Standard",
    picture:
      "https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/hotels/17/QK6iPGlWSGOXKhnVdgjxxw-12-Du%2520Parc%2520Hotel%2520Dalat%2520-%2520Standard%2520room%2520%281%29.jpeg",
    stars: 5,
    numberOfPerson: 2,
    numberOfRoom: 2,
    description:
      "Free wifi, 1 dougle bed, room area: 32m², bathroom with shower & bathtub, no smoking",
    price: 3e3,
    phone: "0123456778",
    place: "Da Lat",
  },
  {
    id: 4,
    userId: 7,
    name: "Superior",
    picture:
      "https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/hotels/17/R3g-ZzAbQ-eHIXxut5GaEg-14-Du%2520Parc%2520Hotel%2520Dalat-Superior%2520twin%2520room.jpeg",
    stars: 5,
    numberOfPerson: 2,
    numberOfRoom: 2,
    description:
      "Free wifi, 2 single bed, room area: 30m², bathroom with shower & bathtub, no smoking",
    price: 4e3,
    phone: "0123456778",
    place: "Da Lat",
  },
  {
    id: 4,
    userId: 7,
    name: "Deluxe",
    picture:
      "https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/hotels/17/QK6iPGlWSGOXKhnVdgjxxw-17-Du%2520Parc%2520Hotel%2520Dalat%2520-%2520Deluxe%2520room%2520%282%29.jpeg",
    stars: 5,
    numberOfPerson: 2,
    numberOfRoom: 2,
    description:
      "Free wifi, 1 dougle bed, room area: 30m², bathroom with shower & bathtub, no smoking",
    price: 45e2,
    phone: "0123456778",
    place: "Da Lat",
  },
];

const reviewsHotel = [
  {
    id: 1,
    hotelId: 4,
    reviewId: 1,
    userId: 1,
    comment: "you will know how good this room is",
    rating: "Good",
  },
  {
    id: 2,
    hotelId: 4,
    reviewId: 1,
    userId: 2,
    comment: "this room just bad",
    rating: "Bad",
  },
  {
    id: 2,
    hotelId: 5,
    reviewId: 2,
    userId: 3,
    comment: "dont book this room",
    rating: "Bad",
  },
  {
    id: 3,
    hotelId: 5,
    reviewId: 2,
    userId: 6,
    comment: "i feel like this room is from heaven",
    rating: "Good",
  },
  {
    id: 2,
    hotelId: 7,
    reviewId: 2,
    userId: 3,
    comment: "dont book this room",
    rating: "Bad",
  },
  {
    id: 3,
    hotelId: 7,
    reviewId: 2,
    userId: 6,
    comment: "i feel like this room is from heaven",
    rating: "Good",
  },
];
