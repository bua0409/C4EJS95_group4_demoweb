const removeClass = (element, className) => {
  element.classList.remove(className);
};
const addClass = (element, className) => {
  element.classList.add(className);
};

const pushdata = (data) => {
  Element.listUser.push(data);
};

const clearFormAddRoom = () => {
  addRoomNameRoomElement.value = "";
  addRoomNumberPersonElement.value = "";
  addRoomDescriptionElement.value = "";
  addRoomPriceElement.value = "";
  previewPicture.src = "";
  previewPictureUploadElement.value = "";
};

const resetAll = () => {
  removeClass(loginPageElement, "d-none");
  addClass(userPageElement, "d-none");
  addClass(hotelPageElement, "d-none");
  addClass(btnLogoutElement, "d-none");
  addClass(btnAddRoomElement, "d-none");
  addClass(btnShowDetailUserInfoElement, "d-none");
};

const loadFile = function (event) {
  const reader = new FileReader();
  reader.onload = function () {
    previewPicture.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
