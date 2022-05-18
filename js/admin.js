import {section_administrador, section_login} from './js/log.js';

export function adminstrador(){
    alert('Bienvenid@');
    section_administrador.classList.add("activar-block");
    section_login.classList.remove("activar-flex");
}