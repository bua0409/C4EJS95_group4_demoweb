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
