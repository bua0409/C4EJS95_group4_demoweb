//-----------------------------------------
//Add event listeners stay here
//-----------------------------------------

submitBtn.addEventListener("click", () => {
  pushData(getUserReview());
  removeInput();
  showReviews();
  submitBtn.disabled = true;
});
reviewBtn.addEventListener("click", () => {
  addClass(reviewBtn, "d-none");
  removeClass(backBtn, "d-none");
  removeClass(reviewContainer, "d-none");
});
backBtn.addEventListener("click", () => {
  removeClass(reviewBtn, "d-none");
  addClass(backBtn, "d-none");
  addClass(reviewContainer, "d-none");
});
reviewInput.addEventListener("keyup", validateReview);
