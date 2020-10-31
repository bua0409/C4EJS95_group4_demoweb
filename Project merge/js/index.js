let currentUser = {};

const getEmailbyUser = (user) => {
  return listUser.find((data) => data.user === username);
};

const getPhoneByUser = (user) => {
  return listUser.find((data) => data.user === username);
};

const getIdByUser = (user) => {
  return listUser.find((data) => data.user === username);
};

const getUserById = (userId) => {
  return listUser.find((data) => data.id === userId);
};

const getRoomsByHotelId = (id) => {
  return listRooms.filter((room) => room.userId === id);
};

const getRoomById = (id) => {
  return listRooms.find((room) => room.id === id);
};

const getListHotel = () => {
  return listUser.filter((user) => user.role === "hotel");
};

const getReviewsByHotelId = (hotelId) => {
  return reviewsHotel.filter((review) => review.hotelId === hotelId);
};

const increaseDayBookingRoom = (roomBooking) => {
  roomsBooking = [...roomsBooking].map((item) =>
    item.id === roomBooking.id
      ? {
          ...roomBooking,
          quantityDays: roomBooking.quantityDays + 1,
        }
      : item
  );
  renderChangeRoomBooking();
};

const decreaseDayBookingRoom = (roomBooking) => {
  roomsBooking = [...roomsBooking].map((item) =>
    item.id === roomBooking.id
      ? {
          ...roomBooking,
          quantityDays:
            roomBooking.quantityDays > 0 ? roomBooking.quantityDays - 1 : 0,
        }
      : item
  );
  renderChangeRoomBooking();
};

const calculateFinalPaymentBookingRooms = () => {
  let sumFinalPayment = 0;
  for (const item of roomsBooking) {
    sumFinalPayment += item.quantityDays * item.price;
  }
  return sumFinalPayment;
};

const removeRoomBookingById = (roomId) => {
  roomsBooking = roomsBooking.filter((item) => item.id !== roomId);
  renderChangeRoomBooking();
};
