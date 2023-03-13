
whole_todo = document.createElement("div");
root.appendChild(whole_todo);
whole_todo.classList.add("whole_todo");


header = document.createElement("div");
whole_todo.appendChild(header);
header.classList.add("header");

delete_big_button = document.createElement("button");
header.appendChild(delete_big_button);
delete_big_button_text = document.createTextNode("Delete all");
delete_big_button.appendChild(delete_big_button_text);
delete_big_button.classList.add("big_button");

header_input = document.createElement("INPUT");
header_input.setAttribute("type", "text");
header.appendChild(header_input);
header_input.classList.add("header_input");
header_input.value = "Enter todo ...";
// !Как привязать его стиль?
// .header_input::placeholder 

add_big_button = document.createElement("button");
header.appendChild(add_big_button);
add_big_button_text = document.createTextNode("Add");
add_big_button.appendChild(add_big_button_text);
add_big_button.classList.add("big_button");

wrapper_table = document.createElement("div");
whole_todo.appendChild(wrapper_table);
wrapper_table.classList.add("wrapper_table");

table_element = document.createElement("div");
wrapper_table.appendChild(table_element);
table_element.classList.add("table_element");

table_element_left = document.createElement("div");
table_element.appendChild(table_element_left);


small_button_check = document.createElement("button");
table_element_left.appendChild(small_button_check);
small_button_check_text = document.createTextNode("V");
small_button_check.appendChild(small_button_check_text);
small_button_check.classList.add("small_button");
// !так и не поняла, как вставить иконку с fontawesome <i class="fa-sharp fa-solid fa-check"></i>

table_input = document.createElement("INPUT");
table_input.setAttribute("type", "text");
table_element.appendChild(table_input);
table_input.classList.add("table_input");
table_input.value = "Todo text";


table_element_right = document.createElement("div");
table_element.appendChild(table_element_right);
table_element_right.classList.add("table_element_right");

small_button_close = document.createElement("button");
table_element_right.appendChild(small_button_close);
small_button_close_text = document.createTextNode("X");
small_button_close.appendChild(small_button_close_text);
small_button_close.classList.add("small_button");
// !так и не поняла, как вставить иконку с fontawesome <i class="fa-solid fa-xmark"></i>

date = document.createElement("INPUT");
date.setAttribute("type", "text");
table_element_right.appendChild(date);
date.classList.add("date");
date.value = "Date";



table_element = document.createElement("div");
wrapper_table.appendChild(table_element);
table_element.classList.add("table_element");

table_element_left = document.createElement("div");
table_element.appendChild(table_element_left);


small_button_check = document.createElement("button");
table_element_left.appendChild(small_button_check);
small_button_check_text = document.createTextNode("V");
small_button_check.appendChild(small_button_check_text);
small_button_check.classList.add("small_button");
// !так и не поняла, как вставить иконку с fontawesome <i class="fa-sharp fa-solid fa-check"></i>

table_input = document.createElement("INPUT");
table_input.setAttribute("type", "text");
table_element.appendChild(table_input);
table_input.classList.add("table_input");
table_input.value = "Todo text";


table_element_right = document.createElement("div");
table_element.appendChild(table_element_right);
table_element_right.classList.add("table_element_right");

small_button_close = document.createElement("button");
table_element_right.appendChild(small_button_close);
small_button_close_text = document.createTextNode("X");
small_button_close.appendChild(small_button_close_text);
small_button_close.classList.add("small_button");
// !так и не поняла, как вставить иконку с fontawesome <i class="fa-solid fa-xmark"></i>

date = document.createElement("INPUT");
date.setAttribute("type", "text");
table_element_right.appendChild(date);
date.classList.add("date");
date.value = "Date";
