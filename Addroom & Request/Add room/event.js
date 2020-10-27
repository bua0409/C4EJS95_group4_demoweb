showIF.addEventListener('click', () => {
  if  (numOfPerson.value == "" || description.value == "" || price.value == "") {
    alert('Bạn phải điền đủ tất cả thông tin');
  }
  else {
    pushRoom();
    alert('Tạo phòng thành công');
    clearInput();
  }
});

