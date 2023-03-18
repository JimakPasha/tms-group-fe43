export function themeCheck() {
  if (localStorage.getItem("theme") === "black") {
    const body = document.getElementsByTagName("body")[0];
    Object.assign(body.style, {
      background: localStorage.getItem("theme"),
      color: localStorage.getItem('color'),
    });
  }
}
