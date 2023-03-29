const body = document.getElementsByTagName("body")[0];
const buttons = document.querySelector(".buttons");
const nexPage = document.querySelector(".next-page");
const prevPage = document.querySelector(".prev-page");
const currPageText = document.querySelector(".current-page");
const maxPagesText = document.querySelector(".max-pages");
const contentList = document.querySelector(".list");

let currentEndpoint = "";
let currentPage = 1;

currPageText.innerHTML = 0;
maxPagesText.innerHTML = 0;

buttons.addEventListener("click", (e) => {
  if (!e.target.classList.contains("get-button")) return;
  const endpoint = e.target.dataset.endpoint;
  currentEndpoint = endpoint;
  getTLotRData(endpoint).then((items) => {
    contentList.innerHTML = "";
    renderPagesValue(items);
    pagesCheck(items);
    endpointCheck(endpoint, items);
  });
});

console.dir(nexPage);

nexPage.addEventListener("click", () => {
  currentPage++;
  getTLotRData(currentEndpoint, currentPage).then((items) => {
    contentList.innerHTML = "";
    pagesCheck(items);
    renderPagesValue(items);
    endpointCheck(currentEndpoint, items);
  });
});

prevPage.addEventListener("click", () => {
  currentPage--;
  getTLotRData(currentEndpoint, currentPage).then((items) => {
    contentList.innerHTML = "";
    pagesCheck(items);
    renderPagesValue(items);
    endpointCheck(currentEndpoint, items);
  });
});

function endpointCheck(endpoint, context) {
  if (endpoint === "book") {
    context.docs.forEach(({ name }) => {
      renderContent(`Книга: ${name}`);
    });
  } else if (endpoint === "movie") {
    context.docs.forEach(({ name, rottenTomatoesScore }) => {
      renderContent(
        `Фильм: ${name}<br>Рейтинг: ${Math.floor(rottenTomatoesScore)}`
      );
    });
  } else if (endpoint === "character") {
    context.docs.forEach(({ name, race, gender }) => {
      renderContent(`Имя: ${name} | Расса: ${race} | Пол: ${gender}`);
    });
  } else if (endpoint === "quote") {
    context.docs.forEach(({ dialog }) => {
      renderContent(`Цитата: ${dialog}`);
    });
  }
}

function renderContent(content) {
  const listItem = document.createElement("li");
  listItem.className = "list-item";
  listItem.innerHTML = content;
  contentList.append(listItem);
}

function renderPagesValue(context) {
  currPageText.innerHTML = context.page;
  maxPagesText.innerHTML = context.pages;
}

function pagesCheck(context) {
  currentPage < context.pages
    ? (nexPage.disabled = false)
    : (nexPage.disabled = true);
  currentPage < 2 ? (prevPage.disabled = true) : (prevPage.disabled = false);
}

async function getTLotRData(endpoint, page = 1) {
  const API_KEY = "menxPwb7rM3CjLEboTUT";
  const URL = "https://the-one-api.dev/v2/";
  const headersTLotR = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const response = await fetch(
    `${URL}${endpoint}?limit=100&page=${page}`,
    headersTLotR
  );
  return response.json();
}
