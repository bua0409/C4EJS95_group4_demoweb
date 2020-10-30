const listRooms = [
  {
    id: 1,
    userId: 5,
    name: "King Room",
    picture:
      "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21105513/MH_Grand_Premium.jpg",
    stars: 5,
    numberOfRoom: 2,
    description:
      "Free wifi, 1 single bed, room area: 30m², bathroom with shower & bathtub, no smoking",
    price: 3e5,
    phone: 09123345678,
    place: "Ha Noi",
  },
  {
    id: 2,
    userId: 2,
    name: "Queen Room",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    stars: 5,
    numberOfRoom: 6,
    description:
      "Free wifi, 1 single bed, room area: 30m², bathroom with shower & bathtub, no smoking",
    price: 3e5,
    phone: 09123345678,
    place: "Ha Noi",
  },
];

const currentCart = [
  {
    roomId: 1,
    totalPrice: 0,
    quantityDays: 0,
  },
  {
    roomId: 2,
    totalPrice: 0,
    quantityDays: 0,
  },
];

const getRoomById = (id) => {
  return listRooms.find((room) => room.id === id);
};

function payment(currentCart) {
  let pay = document.getElementById("body-table-payment");
  let htmlString = "";
  for (let i = 0; i < currentCart.length; i++) {
    const room = getRoomById(currentCart[i].roomId);
    htmlString += `
                    <tr>
                    <td scope="row">
                        <img src="${room.picture}" alt=""
                            width="100" height="100" class="img-fluid z-depth-0">
                    </td>
                    <td>
                        <h5>
                            <strong>${room.userId}</strong>
                        </h5>
                        <p class="text-muted">${room.name}</p>
                    </td>
                    <td></td>
                    <td>
                        <h5><strong>$${room.price}</strong></h5>
                    </td>
                    <td>
                        <input type="number" value="${currentCart[i].quantityDays}" aria-label="Search" class="form-control" style="width: 100px"
                            min="1" max="10" onchange="" />
                    </td>
                    <td class="font-weight-bold">
                        <h5><strong>$${currentCart[i].totalPrice}</strong></h5>
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
  pay.innerHTML = htmlString;
}
payment(currentCart);
