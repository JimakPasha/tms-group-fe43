const getList = document.querySelector(".getList");
const sortUp = document.querySelector(".sortUp");
const sortDown = document.querySelector(".sortDown");
const apiUrl = "https://the-one-api.dev/v2/movie";
const apiKey = "fMJ_fJOMdE_R2PzCnANd";

const getMovies = (sortOrder) => {
  const queryParams = `?sort=name:${sortOrder}`;

  fetch(apiUrl + queryParams, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const moviesList = document.getElementById("list");
      moviesList.innerHTML = "";

      data.docs.forEach(
        ({
          name,
          academyAwardNominations,
          budgetInMillions,
          academyAwardWins,
        }) => {
          const moviesItem = document.createElement("li");
          moviesItem.innerHTML = `
                    <span>Movie:</span> ${name}, <br>
                    <span>Academy Award Nominations:</span> ${academyAwardNominations}, <br>
                    <span>Academy Award Wins:
                    </span> ${academyAwardWins}, <br>
                    <span>Budget in Millions
                    :</span> ${budgetInMillions}`;
          moviesList.appendChild(moviesItem);
        }
      );
    })
    .catch(() => {
      const element = document.createElement("div");
      element.innerText = "Что-то пошло не так!";
      moviesList.append(element);
    });
};

getList.addEventListener("click", () => {
  getMovies();
});

sortUp.addEventListener("click", () => {
  getMovies("asc");
});
sortDown.addEventListener("click", () => {
  getMovies("desc");
});
