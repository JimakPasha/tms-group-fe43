const body = document.getElementsByTagName("body")[0];
const buttons = document.querySelector(".buttons");
const nexPage = document.querySelector(".next-page");
const prevPage = document.querySelector(".prev-page");
const sortPos = document.querySelector(".sort-positive");
const sortNeg = document.querySelector(".sort-negative");
const currPageText = document.querySelector(".current-page");
const maxPagesText = document.querySelector(".max-pages");
const contentList = document.querySelector(".list");

let currentEndpoint = "";
let currentSort = "";
let currentPage = 1;

currPageText.innerHTML = 0;
maxPagesText.innerHTML = 0;

buttons.addEventListener("click", (e) => {
  if (!e.target.classList.contains("get-button")) return;
  const endpoint = e.target.dataset.endpoint;
  currentEndpoint = endpoint;
  currentPage = 1;
  getTLotRData(endpoint).then((items) => {
    renderData(endpoint, items);
  });
});

sortPos.addEventListener("click", () => {});

sortNeg.addEventListener("click", () => {});

nexPage.addEventListener("click", () => {
  currentPage++;
  getTLotRData(currentEndpoint, currentPage).then((items) => {
    renderData(currentEndpoint, items);
  });
});

prevPage.addEventListener("click", () => {
  currentPage--;
  getTLotRData(currentEndpoint, currentPage).then((items) => {
    renderData(currentEndpoint, items);
  });
});

function renderData(endpoint, context) {
  contentList.innerHTML = "";
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
  buttonsDisabler(context);
  correctPagesInfo(context);
}

function renderContent(content) {
  const listItem = document.createElement("li");
  listItem.className = "list-item";
  listItem.innerHTML = content;
  contentList.append(listItem);
}

function correctPagesInfo(context) {
  currPageText.innerHTML = context.page;
  maxPagesText.innerHTML = context.pages;
}

function buttonsDisabler(context) {
  {
    currentPage < context.pages
      ? (nexPage.disabled = false)
      : (nexPage.disabled = true);
  }

  {
    currentPage < 2 ? (prevPage.disabled = true) : (prevPage.disabled = false);
  }

  {
    contentList.childElementCount === 0
      ? ((sortPos.disabled = true), (sortNeg.disabled = true))
      : ((sortPos.disabled = false), (sortNeg.disabled = false));
  }
}

async function getTLotRData(endpoint, page = 1, sort = "") {
  const API_KEY = "menxPwb7rM3CjLEboTUT";
  const URL = "https://the-one-api.dev/v2/";
  const headersTLotR = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const response = await fetch(
    sort === ""
      ? `${URL}${endpoint}?limit=100&page=${page}`
      : `${URL}${endpoint}?limit=100&page=${page}&sort=${sort}`,
    headersTLotR
  );
  return response.json();
}
