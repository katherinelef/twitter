window.onload = function () {

var form = document.getElementById("button");
form.addEventListener("click", addText);

var text = document.getElementById("text")
text.addEventListener("keyup", addAccount);

};

function addText() {
var input = document.getElementById("text").value;
/*document.getElementById("message").innerHTML = input;
}*/
var message = document.createElement("div");
var contenido = document.createTextNode(input);
message.appendChild(contenido);
message.classList.add ("message");

var main = document.getElementById("box-image")
main.appendChild(message);
};

function addAccount() {
     var max = "150";
     var message = document.getElementById("text").value;
     var longitud = message.length;

       if(longitud <= max) {
            document.getElementById("contador").value = max-longitud;
       }
}
