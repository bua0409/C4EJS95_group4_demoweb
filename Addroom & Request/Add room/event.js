showIF.addEventListener('click', function() {
  if (numOfPerson.value == "" || description.value == "" || price.value == "") {
    alert('Bạn phải điền đủ tất cả thông tin');
  }
  else {
    alert('Tạo phòng thành công');
    let room = {
      id: listRoom.length + 1,
      soNguoi: Number(numOfPerson.value),
      mieuTa: description.value,
      gia: Number(price.value),
  };    
    listRoom.push(room);
    console.log(listRoom);
    numOfPerson.value ="";
    description.value ="";
    price.value ="";
    picture.src = "";
  };
});

