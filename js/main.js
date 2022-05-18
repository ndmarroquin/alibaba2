import {login} from "./js/log.js"

function recuperar_datos(e) {
    e.preventDefault();

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    login(username,password);
}

var bt_entrar = document.querySelector("#login");
bt_entrar.addEventListener('submit',recuperar_datos); 