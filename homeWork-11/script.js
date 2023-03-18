(function () {
  function createElement(tagName, options) {
    return Object.assign(document.createElement(tagName), options);
  }
  function cloneNode(nodeName, options) {
    return Object.assign(nodeName.cloneNode(true), options);
  }
  const root = document.getElementById("root");
  const buttonsQuantity = 3;
  const center = {
    width: "fit-content",
    margin: "30px auto",
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
    gap: "50px",
    right: "0",
    left: "0",
  };
  (function () {
    const wrapper = createElement("wrapper");
    Object.assign(wrapper.style, center);
    root.insertAdjacentElement("beforeend", wrapper);
    for (let i = 0; i < buttonsQuantity; i++) {
      const button = createElement("button", { innerHTML: `button: ${i + 1}` });
      Object.assign(button.style, {
        width: "100px",
        height: "100px",
        cursor: "pointer",
      });
      button.addEventListener("click", () => {
        alert("Hello, i am button!");
      });
      wrapper.insertAdjacentElement("beforeend", button);
    }
  })();
  (function () {
    const buttons = ["right click event", "disco button"];
    for (const btn of buttons) {
      const button = createElement("button", {
        innerHTML: btn,
        className: btn,
      });
      Object.assign(button.style, center, {
        cursor: "pointer",
      });
      root.insertAdjacentElement("beforeend", button);
      if (button.className.includes("event")) {
        button.addEventListener("mousedown", (e) => {
          if (e.button === 0) return;
          window.oncontextmenu = false;
          alert("Это event contextmenu!!!");
        });
      } else if (button.className.includes("disco")) {
        button.addEventListener("click", (e) => {
          if (button.style.background === "deepskyblue") {
            button.style.background = "buttonface";
          } else {
            button.style.background = "deepskyblue";
          }
        });
      }
    }
  })();
  (function () {
    const cellsQuantity = 16;
    const wrapper = createElement("wrapper", { className: "cells" });
    Object.assign(wrapper.style, center, {
      width: `${558}px`,
    });
    root.insertAdjacentElement("beforeend", wrapper);
    for (let i = 0; i < cellsQuantity; i++) {
      const cell = createElement("div", { className: `cell-${i + 1}` });
      Object.assign(cell.style, {
        padding: `${50}px`,
        width: "max-content",
        background: "buttonface",
        border: "1px solid black",
        cursor: "pointer",
      });
      wrapper.insertAdjacentElement("beforeend", cell);
    }
    wrapper.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.className.includes("cell-")) return;
      target.style.background =
        "#" +
        (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
      for (const i of wrapper.childNodes) {
        if (i === e.target) {
          continue;
        }
        i.style.background = "buttonface";
      }
    });
  })();
  (function () {
    const wrapper = createElement("wrapper");
    Object.assign(wrapper.style, center);
    let countValue = 0;
    const countWrapper = createElement("div", {
      innerHTML: `count: ${countValue}`,
      className: "valueHolder",
    });
    const countButton = createElement("button", {
      innerHTML: "addOne",
      className: "increasValue",
    });
    wrapper.insertAdjacentElement("beforeend", countWrapper);
    wrapper.insertAdjacentElement("beforeend", countButton);
    wrapper.addEventListener("click", (e) => {
      if (!e.target.className.includes("increasValue")) return;
      countValue++;
      countWrapper.innerHTML = `count: ${countValue}`;
    });
    root.insertAdjacentElement("beforeend", wrapper);
  })();
})();
