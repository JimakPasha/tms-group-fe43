import{add} from './main.js';
import{inputAge} from './main.js';

export function removeDisabled(){
    if(add.hasAttribute('disabled')){
        add.removeAttribute('disabled','disabled');
        add.classList.remove('body__add_disabled');
        add.innerText=`Создать`;
    }
}