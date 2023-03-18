export function count() {
  const body = document.getElementsByTagName("body")[0];
  const countBtn = document.getElementsByClassName("create-Count")[0];
  const countItem = createElement("span", { className: "count" });

  function increasCount() {

    if (
      !Array.from(body.children).some((item) => {
        return item.className === "count";
      })
    ) {
      countBtn.insertAdjacentElement("afterend", countItem);
    }
    
    let count = 0;
    count = localStorage.getItem("count");
    count++;
    countItem.innerText = `count: ${count}`;
    localStorage.setItem("count", count);
  }

  function createElement(tagName, options) {
    return Object.assign(document.createElement(tagName), options);
  }

  if (localStorage.getItem("count")) {
    count = localStorage.getItem("count");
    countItem.innerText = `count: ${count}`;
    countBtn.insertAdjacentElement("afterend", countItem);
  }

  countBtn.addEventListener("click", increasCount);
  countBtn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    increasCount();
    // Я это сделал так как на ноуте из-за быстрого спама двух пальцев открвыется контекст меню которое меня бесит!(
  });
}
