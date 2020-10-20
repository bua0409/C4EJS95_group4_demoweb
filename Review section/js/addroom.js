const loadPicture = function(event) {
  const reader = new FileReader();
  reader.onload = function(){
    const picture = document.getElementById('picture');
    picture.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

function show() {
console.log(document.getElementById("soLuong").value)
console.log(document.getElementById("moTa").value)
console.log(document.getElementById("giaPhong").value)
console.log(picture);
};


