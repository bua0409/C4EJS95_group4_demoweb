const { default: Axios } = require("axios");
const itemsContainerElement = document.getElementById("itemsContainer");

const fetchUser = async () => {
  const result = await Axios.get("https://sheetdb.io/api/v1/hbcuhzs8in8zu");
  if (result.status === 200) {
    return result.data;
  }
  return [];
};

const renderUsers = async () => {
  const users = await fetchUser();
  let htmlUser = "";
  for (const user of users) {
    htmlUser += `<li>${user}</li>`;
  }
};
