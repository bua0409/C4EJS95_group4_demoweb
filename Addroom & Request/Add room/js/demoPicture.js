const loadFile = function(event) {
    const reader = new FileReader();
    reader.onload = function(){
      console.log(reader.result);
      picture.src = reader.result;

    };
    reader.readAsDataURL(event.target.files[0]);
  };