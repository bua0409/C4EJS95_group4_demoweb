let roomsBooking = [];

const redirectSignInToSignupScreen = () => {
  addClass(signInScreenElement, "d-none");
  removeClass(signUpScreenElement, "d-none");
};

const redirectSignupToSignInScreen = () => {
  addClass(signUpScreenElement, "d-none");
  removeClass(signInScreenElement, "d-none");
};

const redirectBookingRoomToListHotelsScreen = () => {
  addClass(renderListRoomBookingElement, "d-none");
  addClass(btnBackToListHotelsScreenElement, "d-none");
  removeClass(renderListHotelElement, "d-none");
};

const redirectListHotelsToBookingRoomsScreen = () => {
  addClass(renderListHotelElement, "d-none");
  removeClass(renderListRoomBookingElement, "d-none");
  removeClass(btnBackToListHotelsScreenElement, "d-none");
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
  // if (currentUser.role === "hotel") {
  //   removeClass(userReviewScreenElement, "d-none");
  //   removeClass(btnBackElement, "d-none");
  //   addClass(hotelPageElement, "d-none");
  // }
  const userReviewScreenElement = document.getElementById(
    "user-review-screen-" + index
  );
  let htmlString = "";
  const reviews = getReviewsByHotelId(index);
  console.log(reviews);
  for (let i = 0; i < reviews.length; i++) {
    if (index === reviews[i].hotelId) {
      htmlString = `<div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
            <h3 class="mb-3 font-weight-bold dark-grey-text">
              <strong>${getUserById(reviews[i].userId).name}</strong>
            </h3>
            <p>${reviews[i].rating}</p>
            <p>
              <strong
                >${reviews[i].comment}
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
                      <td>${rooms[i].name}</td>
                      <td>${rooms[i].description}</td>
                      <td>${rooms[i].numberOfPerson}</td>
                      <td>${rooms[i].price}</td>
                  </tr>`;
  }
  renderListRoomElement.innerHTML = htmlString;
};

const renderListHotels = () => {
  let htmlString = "";
  let indexArr = [];
  const hotels = getListHotel();
  for (let i = 0; i < hotels.length; i++) {
    htmlString += `<div class="row mb-2">
                    <div class="col-md-5 mb-4 mb-md-0">
                        <img src="${hotels[i].hotelInfo.picture}" class="img-fluid" alt="" style="width:500px">
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                      <h3 class="font-weight-bold">   ${hotels[i].hotelInfo.name}</h3>
                      <p><i class="fas fa-map-marked">  ${hotels[i].hotelInfo.place}</i></p>
                      <p><i class="fas fa-star">  ${hotels[i].hotelInfo.stars}</i></p>
                      <p><i class="fas fa-phone-square">  ${hotels[i].hotelInfo.phone}</i></p>
                      <button class="btn btn-brown btn-md ml-0" href="#" role="button" onclick="renderListRoomBooking(${hotels[i].id})">Travel<i class="fa fa-plane ml-2"></i></button>
                      <button class="btn btn-brown btn-md ml-0" href="#" role="button" onclick="">Add Review  <i class="fas fa-pencil-alt"></i></button>
                    </div>
                    <div class="col-md-3">
                    <h4 class="font-weight-bold">Reviews Of Hotel</h4>
                    <div id="user-review-screen-${hotels[i].id}" style="overflow: scroll;overflow-x: hidden;height: 230px">

                    </div>
                    </div>
                  </div>`;
    indexArr.push(hotels[i].id);
  }
  renderListHotelElement.innerHTML = htmlString;
  for (let i = 0; i < indexArr.length; i++) {
    console.log(indexArr[i]);
    renderReviewsList(indexArr[i]);
  }
};

const renderListRoomBooking = (hotelId) => {
  redirectListHotelsToBookingRoomsScreen();
  let htmlString = "";
  const rooms = getRoomsByHotelId(hotelId);
  roomsBooking = [...rooms];
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
                      <span class="qty">${roomsBooking[i].quantityDays}</span>
                      <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                        <button onclick="decreaseDayBookingRoom(${JSON.stringify(
                          roomsBooking[i]
                        )
                          .split('"')
                          .join(
                            "&quot;"
                          )})" type="button" class="btn blue lighten-2"><i class="fas fa-minus" aria-hidden="true"></i></button>
                        <button onclick="increaseDayBookingRoom(${JSON.stringify(
                          roomsBooking[i]
                        )
                          .split('"')
                          .join(
                            "&quot;"
                          )})" type="button" class="btn blue lighten-2"><i class="fas fa-plus" aria-hidden="true"></i></button>
                      </div>
                    </td>
                    <td class="font-weight-bold">
                        <h5><strong>$${roomsBooking[i].totalPrice}</strong></h5>
                    </td>
                    <td>
                        <button onclick="removeRoomBookingById(${
                          roomsBooking[i].id
                        })" type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                            title="Remove item">X
                        </button>
                    </td>
                </tr>

    `;
  }
  htmlString += `
                <tr>
                    <td colspan="3"></td>
                    <td>
                        <h4 class="mt-2">
                            <strong>Final payment</strong>
                        </h4>
                    </td>
                    <td class="text-right">
                        <h4 class="mt-2">
                            <strong>$0</strong>
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

const renderChangeRoomBooking = () => {
  let htmlString = "";
  for (let i = 0; i < roomsBooking.length; i++) {
    roomsBooking[i].totalPrice =
      roomsBooking[i].quantityDays * roomsBooking[i].price;
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
                      <span class="qty">${roomsBooking[i].quantityDays}</span>
                      <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                        <button onclick="decreaseDayBookingRoom(${JSON.stringify(
                          roomsBooking[i]
                        )
                          .split('"')
                          .join(
                            "&quot;"
                          )})" type="button" class="btn blue lighten-2"><i class="fas fa-minus" aria-hidden="true"></i></button>
                        <button onclick="increaseDayBookingRoom(${JSON.stringify(
                          roomsBooking[i]
                        )
                          .split('"')
                          .join(
                            "&quot;"
                          )})" type="button" class="btn blue lighten-2"><i class="fas fa-plus" aria-hidden="true"></i></button>
                      </div>
                    </td>
                    <td class="font-weight-bold">
                        <h5><strong>$${roomsBooking[i].totalPrice}</strong></h5>
                    </td>
                    <td>
                        <button onclick="removeRoomBookingById(${
                          roomsBooking[i].id
                        })" type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                            title="Remove item">X
                        </button>
                    </td>
                </tr>

    `;
  }
  htmlString += `
                <tr>
                    <td colspan="3"></td>
                    <td>
                        <h4 class="mt-2">
                            <strong>Final payment</strong>
                        </h4>
                    </td>
                    <td class="text-right">
                        <h4 class="mt-2">
                            <strong>$${calculateFinalPaymentBookingRooms()}</strong>
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
