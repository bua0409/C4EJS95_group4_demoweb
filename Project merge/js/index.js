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
  return reviewsHotel.filter((review) => review.userId === hotelId);
};
