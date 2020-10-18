// const hello = () => {
//   const getNow = document.getElementById("now");
//   getNow.innerHTML = new Date();
// };
// const getUsername = document.getElementById("username_input");
// const getPass = document.getElementById("pass_input");
// const getLoginBtn = document.getElementById("login_btn");

// function login() {
//   getLoginBtn.addEventListener("click", () => {
//     if (getUsername.value === "admin" && getPass.value === "12345") {
//       alert("Dang nhap thanh cong!");
//       window.location.href = "https://dantri.com.vn/";
//     } else {
//       alert("Sai!");
//     }
//   });
// }

// //Event xay ra: context, (event)
// //call function
// function enterLogin(e) {
//   console.log(e);
//   if (e.key === "Enter") {
//     login2();
//   }
// }

let listPhones = [
  {
    name: "Iphone X",
    price: 20e6,
    brand: "Apple",
    img:
      "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
  },
  {
    name: "Iphone Xr",
    price: 22e6,
    brand: "Apple",
    img:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/i/p/ip-xr-do.jpg",
  },
  {
    name: "Redmi 9",
    price: 23e6,
    brand: "Xiaomi",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/217308/xiaomi-redmi-9-114620-094644-400x400.jpg",
  },
  {
    name: "Galaxy A21s",
    price: 26e6,
    brand: "Samsung",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/219314/samsung-galaxy-a21s-055620-045659-600x600.jpg",
  },
  {
    name: "Reno3",
    price: 30e6,
    brand: "Oppo",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/213591/oppo-reno3-trang-600x600-600x600.jpg",
  },
];
console.log(listPhones);

const displayListPhones = () => {
  let tbody = document.getElementById("list-phones");
  tbody.innerHTML = "";
  for (let i = 0; i < listPhones.length; i++) {
    const phone = listPhones[i];
    let html = `
    <tr>
        <td>${i + 1}</td>
        <td>
            <img
              src="${phone.img}"
              alt="${phone.name}"
              width="150"
              height="150"
            />
          </td>
        <td><span onclick="viewDetail('${phone.name}')"
        style="cursor: pointer; text-decoration: underline; color: blue">${
          phone.name
        }</span></td>
        <td>${phone.price} d</td>
        <td>${phone.brand}</td>
    </tr>
    `;
    tbody.innerHTML += html;
  }
};
displayListPhones();

const viewDetail = (phoneName) => {
  alert(phoneName);
};
