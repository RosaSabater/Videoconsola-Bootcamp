let encendido = false;

const button = document.getElementById("onButton");

button.onclick = function(event) {

    if (encendido) {
        document.getElementsByClassName("battery")[0].style.background = "black"
        encendido = false;

    } else {
        document.getElementsByClassName("battery")[0].style.background = "red"
        encendido = true;
    }
}


