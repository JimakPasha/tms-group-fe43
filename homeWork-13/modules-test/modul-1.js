export function createButton(text = "Кнопка", buttonClass) {
  const button = document.createElement("button");
  const body = document.getElementsByTagName("body")[0];
  Object.assign(button, { innerText: `${text}`, className: `${buttonClass}` });
  button.style.margin = "10px";
  body.insertAdjacentElement("beforeend", button);
}
