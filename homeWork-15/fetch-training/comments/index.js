const POSTS_URL = "https://641d66e01a68dc9e461de689.mockapi.io/users";
const commentsBoddy = document.getElementById("comments");
console.log(commentsBoddy);

function getComments(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      response.ok ? resolve(response.json()) : reject(new Error("error"));
    });
  });
}

function printComments(callback, target) {
  console.log(target);
  callback.then((comments) => {
    comments.forEach(({ name, avatar, content }) => {
      const userName = document.createElement("span");
      const comment = document.createElement("span");
      const contentWrap = document.createElement("article");
      const commentwrap = document.createElement("article");
      const avatarWrap = document.createElement("article");
      const avatarImg = document.createElement("img");

      commentwrap.className = "comments__wrapper";
      contentWrap.className = "comments__content";
      avatarImg.className = "comments__avatar";

      userName.textContent = `${name}`;
      comment.textContent = content;
      avatarImg.src = avatar;
      contentWrap.append(userName, comment);
      avatarWrap.append(avatarImg);
      commentwrap.append(avatarWrap, contentWrap);
      target.append(commentwrap);
    });
  });
}

printComments(getComments(POSTS_URL), commentsBoddy);
