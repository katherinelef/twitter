window.onload = function () {

var form = document.getElementById("button")
form.addEventListener("click", addText);

};

function addText() {
var input = document.getElementById("text").value;
/*document.getElementById("message").innerHTML = input;
}*/
var parrafo = document.createElement("div");
var contenido = document.createTextNode(input);
parrafo.appendChild(contenido);

document.body.appendChild(parrafo);

}
