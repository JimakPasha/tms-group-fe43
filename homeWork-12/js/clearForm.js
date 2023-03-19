import { inputName } from "./main.js";
import { inputSurName } from "./main.js";
import { inputAge } from "./main.js";

export function clearForm(event){
            inputName.value = '';
            inputSurName.value = '';
            inputAge.value = '';
}