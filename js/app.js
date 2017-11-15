window.onload = function () {
//evento para agregar el mensaje escrito//
var button = document.getElementById("button");
  button.addEventListener("click", addText);
//evento para agregar contador de letras//
var text = document.getElementById("text");
  text.addEventListener("keyup", addAccount);
};

//creando funcion para addText//
function addText() {
  var length = document.getElementById("text").value.length;
    if (length>"0" & length<="140"){
      var input = document.getElementById("text").value;
      var container = document.createElement("div");
      var message= document.createElement("p");
      var date = new Date();
      var content = document.createTextNode(input +" "+ date.getHours()+":"+date.getMinutes());
        container.appendChild(message);
        message.appendChild(content);
        message.classList.add ("message");
      var main = document.getElementById("box-image")
        main.appendChild(message);
    }
};

//creando funcion para addAccount//
function addAccount() {
  var max = "140";
  var message = document.getElementById("text").value;
  var longitud = message.length;
    if(longitud <= max) {
      document.getElementById("contador").value = max-longitud;
       }
  };
