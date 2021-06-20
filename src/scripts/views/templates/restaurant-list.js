/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
import CONFIG from "../../globals/config";

const restaurantList = (param) => {
  const { city, description, name, pictureId, rating, id } = param;

  return `
    <div class="grid-item">
        <article class="article-card" tabindex="0">
        <div class="head-article">
          <a href="/#/detail/${id}">
            <img
              alt="${name} image"
              width="100%"
              class="lazyload"
              data-src="${CONFIG.PICTURE_URL + pictureId}"
            />
          </a>
          <span>${city}</span>
        </div>
        <div class="content-article">
            <h3>${name}</h3>
            <p>Rating: <span>${rating}</span></p>
            <p class="article-desc">${description}</p>
        </div>
        </article>
    </div>
  `;
};

export default restaurantList;
