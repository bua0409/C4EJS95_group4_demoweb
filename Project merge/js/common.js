const removeClass = (element, className) => {
  element.classList.remove(className);
};
const addClass = (element, className) => {
  element.classList.add(className);
};

const pushdata = (data) => {
  Element.listUser.push(data);
};

const loadFile = function (event) {
  const reader = new FileReader();
  reader.onload = function () {
    picture.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
