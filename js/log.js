export var section_administrador = document.getElementById("section-administrador");
export var section_login = document.getElementById("section-login");

import {user} from "./js/user.js";
import { adminstrador } from "./js/admin.js";

export function login(username,password){

    for(let i = 0; i<=7;i++){
        if(username === user[i][1] || username === user[i][5]){
            if(password === user[i][2]){
                console.log("Ahora tienes acceso");
                adminstrador();
            }else{
                console.log('Constraseña incorrecta');
            }
        }else {
            console.log("Usuario incorrecto");
        }
    }

}