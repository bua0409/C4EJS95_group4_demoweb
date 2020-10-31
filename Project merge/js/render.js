const redirectSignInToSignupScreen = () => {
  addClass(signInScreenElement, "d-none");
  removeClass(signUpScreenElement, "d-none");
};

const redirectSignupToSignInScreen = () => {
  addClass(signUpScreenElement, "d-none");
  removeClass(signInScreenElement, "d-none");
};

const renderDetailUserInfo = (currentUser) => {
  const htmlString = `<div class="row d-flex justify-content-center">
                        <div class="col-md-10 mt-5 pt-5">
                          <div class="row z-depth-3">
                            <div class="col-sm-4 bg-info round-left">
                              <div class="card-block text-center text-white">
                                <i class="fas fa-user-tie fa-7x mt-5"></i>
                                <h4 class="font-weight-bold mt-4" id="">${currentUser.name}</h4>
                              </div>
                            </div>
                            <div class="col-sm-8 bg-white rounded-right">
                              <h3 class="mt-3 text-center">Info</h3>
                              <hr class="badge-primary mt-0 w-25" />
                              <div class="row p-3">
                                  <p class="font-weight-bold mt-3">Email: ${currentUser.email}</p>
                                  <br><br>
                                  <p class="font-weight-bold mt-3">Phone: ${currentUser.phone}</p>
                              </div>
                              <h4 class="mt-3">About</h4>
                              <hr class="bg-primary" />
                              <div class="row">
                                <div class="p-3">
                                  <p class="text-muted">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Corrupti vel ab quasi fuga voluptates quos
                                    repudiandae deleniti, doloribus neque in culpa quidem
                                    est
                                  </p>
                                </div>
                              </div>
                              <hr class="bg-primary" />
                              <ul class="list-unstyled d-flex justify-content-center mt-4">
                                <li>
                                  <a href="#"><i class="fab fa-facebook-f px-3 h4 text-info"></i></a>
                                  <a href="#"><i class="fab fa-instagram px-3 h4 text-info"></i></a>
                                  <a href="#"><i class="fab fa-youtube px-3 h4 text-info"></i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>`;
  detailUserInfoElement.innerHTML = htmlString;
};

const renderReviewsList = (index) => {
  if (currentUser.role === "hotel") {
    removeClass(userReviewScreenElement, "d-none");
    removeClass(btnBackElement, "d-none");
    addClass(hotelPageElement, "d-none");
  }
  userReviewScreenElement.innerHTML += `<h2 class="h1 text-center mb-5">REVIEWS</h2>`;
  for (let i = 0; i < reviewsHotel.length; i++) {
    let getId = document.getElementById(index).getAttribute("hotelId");
    if (parseInt(getId) === reviewsHotel[i].hotelId) {
      const htmlString = `<div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
            <h3 class="mb-3 font-weight-bold dark-grey-text">
              <strong>${getUserById(reviewsHotel[i].userId).name}</strong>
            </h3>
            <p>${reviewsHotel[i].rating}</p>
            <p>
              <strong
                >${reviewsHotel[i].comment}
              </strong>
            </p>
            <hr class="mb-5" />
          </div>`;
      userReviewScreenElement.innerHTML += htmlString;
    }
  }
};

const renderListRoomByHotel = (id) => {
  let htmlString = "";
  const rooms = getRoomsByHotelId(id);
  for (let i = 0; i < rooms.length; i++) {
    htmlString += `<tr>
                      <td>${i + 1}</td>
                      <td><img
                          src="${rooms[i].picture}"
                          width="100px" height="100px"></td>
                      <td>${rooms[i].description}</td>
                      <td>${rooms[i].numberOfPerson}</td>
                      <td>${rooms[i].price}</td>
                      <td><button id="${i}" reviewId ="${i}" hotelId="${
      rooms[i].userId
    }" onclick="renderReviewsList(${i})">Reviews</button></td>
                  </tr>`;
  }
  renderListRoomElement.innerHTML = htmlString;
};

const renderListHotels = () => {
  let htmlString = "";
  const hotels = getListHotel();
  for (let i = 0; i < hotels.length; i++) {
    htmlString += `<div class="row mb-2">
                    <div class="col-md-5 mb-4 mb-md-0">
                        <img src="${hotels[i].hotelInfo.picture}" class="img-fluid" alt="" >
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                      <h3 class="font-weight-bold">${hotels[i].hotelInfo.name}</h3>
                      <p><i class="fas fa-map-marked">${hotels[i].hotelInfo.place}</i></p>
                      <p><i class="fas fa-star">${hotels[i].hotelInfo.stars}</i></p>
                      <p><i class="fas fa-phone-square">${hotels[i].hotelInfo.phone}</i></p>
                      <button class="btn btn-brown btn-md ml-0" href="#" role="button" onclick="renderListRoomBooking(${hotels[i].id})">Travel<i class="fa fa-plane ml-2"></i></button>
                    </div>
                    <div class="col-md-3">
                      review hotel
                    </div>
                  </div>`;
  }
  renderListHotelElement.innerHTML = htmlString;
};

const renderListRoomBooking = (hotelId) => {
  addClass(renderListHotelElement, "d-none");
  removeClass(renderListRoomBookingElement, "d-none");
  let htmlString = "";
  const rooms = getRoomsByHotelId(hotelId);
  roomsBooking = [...rooms];
  const tablePaymentElement = document.getElementById("body-table-payment");
  for (let i = 0; i < roomsBooking.length; i++) {
    roomsBooking[i].totalPrice = 0;
    roomsBooking[i].quantityDays = 0;
    htmlString += `
                    <tr>
                    <td scope="row">
                        <img src="${roomsBooking[i].picture}" alt=""
                            width="100" height="100" class="img-fluid z-depth-0">
                    </td>
                    <td>
                        <p class="text-muted">${roomsBooking[i].name}</p>
                    </td>
                    <td>
                    <h5><strong>${roomsBooking[i].numberOfPerson}</strong></h5>
                    </td>
                    <td>
                        <h5><strong>$${roomsBooking[i].price}</strong></h5>
                    </td>
                    <td>
                        <input type="number" value="${roomsBooking[i].quantityDays}" aria-label="Search" class="form-control" style="width: 100px"
                            min="1" max="10" onchange="" />
                    </td>
                    <td class="font-weight-bold">
                        <h5><strong>$${roomsBooking[i].totalPrice}</strong></h5>
                    </td>
                    <td>
                        <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                            title="Remove item">X
                        </button>
                    </td>
                </tr>

    `;
  }
  htmlString += ` <!-- footer table -->
  <tr>
      <td colspan="3"></td>
      <td>
          <h4 class="mt-2">
              <strong>Total</strong>
          </h4>
      </td>
      <td class="text-right">
          <h4 class="mt-2">
              <strong>$2600</strong>
          </h4>
      </td>
      <td colspan="3" class="text-right">
          <button type="button" class="btn btn-primary btn-rounded">Complete purchase
              <i class="fas fa-angle-right right"></i>
          </button>
      </td>
  </tr>`;
  tablePaymentElement.innerHTML = htmlString;
};

