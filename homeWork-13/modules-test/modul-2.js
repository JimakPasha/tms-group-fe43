export function changeBackground() {
  const button = document.getElementsByClassName("bg-toggle")[0];
  button.addEventListener("click", () => {
    const body = document.getElementsByTagName("body")[0];
    let theme = {};
    if (body.style.background === "black") {
      Object.assign(theme, { background: "white", color: "black" });
      Object.assign(body.style, theme);
    } else {
      Object.assign(theme, { background: "black", color: "white" });
      Object.assign(body.style, theme);
    }
    localStorage.setItem("theme", theme.background);
    localStorage.setItem("color", theme.color);
  });
}
