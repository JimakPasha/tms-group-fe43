const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function getPosts(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      response.ok ? resolve(response) : reject(new Error("error"));
    });
  });
}

function printPosts(callback, target) {
  getPosts().then((posts) => {
    console.log(posts);
  });
}
