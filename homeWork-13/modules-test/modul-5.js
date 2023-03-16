export function clearCount() {
  const clearBtn = document.getElementsByClassName("clear-Count")[0];
  clearBtn.addEventListener("click", () => {
    const countText = document.getElementsByClassName("count")[0];
    countText.innerText = "";
    countText.remove();
    localStorage.removeItem("count");
  });
}
