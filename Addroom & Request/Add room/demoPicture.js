const loadFile = function(event) {
    const reader = new FileReader();
    reader.onload = function(){
      picture.src = reader.result;

    };
    reader.readAsDataURL(event.target.files[0]);
  };