window.onload = function () {
//evento para agregar el mensaje escrito//
var button = document.getElementById("button");
  button.addEventListener("click", addText);
//evento para agregar contador de letras//
/*var text = document.getElementById("text");
  text.addEventListener("keyup", addAccount);*/

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
        document.getElementById("text").value="";
        document.getElementById("contador").value="140";
        document.getElementById("contador").style.color="black";
          }
  };

function addAccount (){
  var max = "140";
  var message = document.getElementById("text").value;
  var longitud = message.length;
  var contador=document.getElementById("contador");

    if(longitud>="0" & longitud<"120") {
      contador.style.color="black";
      contador.value = max-longitud;
       }
    else if(longitud>="120" & longitud<"130") {
      contador.style.color="red";
      contador.value = max-longitud;
        }
    else if(longitud>="130" & longitud<="140") {
      contador.style.color="green";
      contador.value = max-longitud;
        }
    else if(longitud>"140"){
      contador.value =("-"+(longitud-max));
          }
}
