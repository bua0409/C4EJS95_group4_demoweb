//common
const navMenuElement = document.getElementById("nav-menu");
//page
const loginPageElement = document.getElementById("login-page");
const userPageElement = document.getElementById("user-page");
const hotelPageElement = document.getElementById("hotel-page");

//screen
const signInScreenElement = document.getElementById("sign-in-screen");
const signUpScreenElement = document.getElementById("sign-up-screen");
const addRoomScreenElement = document.getElementById("add-room-screen");

/*button*/
const loginFormElement = document.getElementById("login-form");
const loginButtonElement = document.getElementById("login-form-submit");
const signupButtonElement = document.getElementById("btn-sign-up");
const signupButtonSubmitElement = document.getElementById("btn-signup-submit");
const btnShowDetailUserInfoElement = document.getElementById(
  "btn-popup-detail-user-info"
);
const btnAddRoomElement = document.getElementById("btn-add-room");
const btnSubmitAddRoomElement = document.getElementById("btn-submit-add-room");

/*input field*/
//login element
const loginErrorMsgElement = document.getElementById("login-error-msg");
const usernameElement = document.getElementById("username-field");
const passwordElement = document.getElementById("password-field");

//register element
const resNameElement = document.getElementById("re-name-input");
const resUsernameElement = document.getElementById("re-username-input");
const resEmailElement = document.getElementById("re-email-input");
const resPhoneElement = document.getElementById("re-phone-input");
const resPasswordElement = document.getElementById("re-password-input");
const resRePasswordElement = document.getElementById("re-rePassword-input");
// add room form element
const addRoomNumberPersonElement = document.getElementById(
  "add-room-number-person-input"
);
const addRoomDescriptionElement = document.getElementById(
  "add-room-description-input"
);
const addRoomPriceElement = document.getElementById("add-room-price-input");
const previewPicture = document.getElementById("preview-picture");

const userAvatarElement = document.getElementById("user-avatar");
// popup
const detailUserInfoElement = document.getElementById("detail-user-info");

// render
const renderListRoom = document.getElementById("render-list-rooms");
