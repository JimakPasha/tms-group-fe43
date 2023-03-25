const IMAGES_URL =
  "https://api.unsplash.com/photos/" +
  "?client_id=WNZYAkxUwYKahEkitGod3o4mQKDpGoA-IrO2Nji5qMU";
const cardsBody = document.getElementById("cards-body");

function getImage(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      response.ok ? resolve(response.json()) : reject(new Error("error"));
    });
  });
}

function createCustomElement(tagName, options) {
  return Object.assign(document.createElement(tagName), options);
}

function createCard(name, description, avatar, image) {
  const cardWrapper = createCustomElement("article", {
    className: "cards__wrapper",
  });
  const cardImgWrapper = createCustomElement("article", {
    className: "cards__image-wrapper",
  });
  const cardImgLink = createCustomElement("a", {
    className: "cards__image-link",
    href: image,
    target: "_blank",
  });
  const cardImg = createCustomElement("img", {
    className: "cards__image",
    src: image,
  });
  const cardContentWrapper = createCustomElement("article", {
    className: "cards__content-wrapper",
  });
  const cardTextWrapper = createCustomElement("article", {
    className: "cards__text-wrapper",
  });
  const cardAvatarWrapper = createCustomElement("article", {
    className: "cards__avatar-wrapper",
  });
  const cardAvatar = createCustomElement("img", {
    className: "cards__avatar",
    src: avatar,
  });
  const cardAuthorName = createCustomElement("span", {
    className: "cards__name",
    textContent: name,
  });
  const cardDescription = createCustomElement("p", {
    className: "cards__description",
    textContent: description,
  });
  cardImgLink.append(cardImg);
  cardImgWrapper.append(cardImgLink);
  cardAvatarWrapper.append(cardAvatar);
  cardTextWrapper.append(cardAuthorName, cardDescription);
  cardContentWrapper.append(cardAvatarWrapper, cardTextWrapper);
  cardWrapper.append(cardContentWrapper, cardImgWrapper);
  return cardWrapper;
}

function printCards(callback) {
  callback.then((images) => {
    console.log(images);
    images.forEach(
      ({
        alt_description: description,
        urls: { full: image },
        user: {
          name,
          profile_image: { large: avatar },
        },
      }) => {
        cardsBody.append(createCard(name, description, avatar, image));
      }
    );
  });
}

/*
urls:{full}
alt_description:description
user:{first_name:name}
user:{profile_image:{large:avatar}}
*/

printCards(getImage(IMAGES_URL));
createCard(cardsClasses);
