window.onload = function () {

var form = document.getElementById("button")
form.addEventListener("click", addText);

};

function addText() {
var input = document.getElementById("text").value;
/*document.getElementById("message").innerHTML = input;
}*/
var message = document.createElement("div");
var contenido = document.createTextNode(input);
message.appendChild(contenido);

message.classList.add ("message")

var main = document.getElementById("box-image")
main.appendChild(message);

}
