const redirectSignInToSignupScreen = () => {
  addClass(signInScreenElement, "d-none");
  removeClass(signUpScreenElement, "d-none");
};

const redirectSignupToSignInScreen = () => {
  addClass(signUpScreenElement, "d-none");
  removeClass(signInScreenElement, "d-none");
};

const userDataDisplay = () => {
  userNameDisplay.innerHTML += `<h2 class="font-weight-bold mt-4" id="">${currentLogin[0].name}</h2>`;
  userEmailDisplay.innerHTML += `<h6 class="text-muted">${currentLogin[0].email}</h6>`;
  userPhoneDisplay.innerHTML += `<h6 class="text-muted">${currentLogin[0].phone}</h6>`;
};

const renderDetailUserInfo = (currentUser) => {
  const htmlString = `<div class="row d-flex justify-content-center">
                        <div class="col-md-10 mt-5 pt-5">
                          <div class="row z-depth-3">
                            <div class="col-sm-4 bg-info round-left">
                              <div class="card-block text-center text-white" id="up-name">
                                <i class="fas fa-user-tie fa-7x mt-5"></i>
                                <h4 class="font-weight-bold mt-4" id="">${currentUser.name}</h4>
                              </div>
                            </div>
                            <div class="col-sm-8 bg-white rounded-right">
                              <h3 class="mt-3 text-center">Information</h3>
                              <hr class="badge-primary mt-0 w-25" />
                              <div class="row">
                                <div class="col-sm-6" id="up-email">
                                  <p class="font-weight-bold">Email: ${currentUser.email}</p>
                                  <!-- <h6 class="text-muted">something</h6> -->
                                </div>
                                <div class="col-sm-6" id="up-phone">
                                  <p class="font-weight-bold">Phone: ${currentUser.phone}</p>
                                  <!-- <h6 class="text-muted">something</h6> -->
                                </div>
                              </div>
                              <h4 class="mt-3">About me</h4>
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
