//----------------------------------------
// Render data here
//----------------------------------------
const showReviews = () => {
  reviewDisplay.innerHTML = "";
  for (let review of getHotelReviews()) {
    reviewDisplay.innerHTML += `
    <h2>${review.user.name}</h2>
    <h3>Rate: ${review.star} stars</h3>
    <p>${review.comment}</p>
    `;
  }
};
