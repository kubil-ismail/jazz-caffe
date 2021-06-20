/* eslint-disable quotes */
import { headmasterDetail } from "../templates/headmaster";
import {
  categoriesTemplate,
  drinkTemplate,
  foodTemplate,
  reviewTemplate,
} from "../templates/detail-template";
import RestaurantSource from "../../data/restaurant-source";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import RestaurantIdb from "../../data/restaurant-idb";

const Detail = {
  async render() {
    return `
        <div>
            <h1 class="text-center headmaster-title hide-shadow-text">
                Our categories
            </h1>
            <div class="grid-1 categories"></div>
        </div>
        <div>
            <h1 class="text-center headmaster-title hide-shadow-text">
                Our foods
            </h1>
            <div class="grid-1 foods"></div>
        </div>
         <div>
            <h1 class="text-center headmaster-title hide-shadow-text">
                Our drinks
            </h1>
            <div class="grid-1 drinks"></div>
        </div>
        <div class="review-section">
            <h1 class="text-center headmaster-title hide-shadow-text">
                Testimonials
            </h1>
            <div class="grid-1 reviews"></div>
        </div>
        <div class="location-section" tabindex="0">
            <h1 class="text-center headmaster-title hide-shadow-text">
                Our location
            </h1>
            <p class="location-text"></p>
            <p class="rating-text"></p>
        </div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const restaurantId = window.location.hash.split("/")[2];
    const data = await RestaurantSource.detailRestaurant(restaurantId);
    // const restaurant = await RestaurantSource.getDetailRestaurant(restaurantId);
    const headContent = document.querySelector("#headcontent");
    const categories = document.querySelector(".categories");
    const drinks = document.querySelector(".drinks");
    const foods = document.querySelector(".foods");
    const reviews = document.querySelector(".reviews");
    const location = document.querySelector(".location-text");
    const rating = document.querySelector(".rating-text");
    const { restaurant } = data;

    headContent.innerHTML = headmasterDetail(restaurant);
    restaurant.categories.forEach((element) => {
      const card = document.createElement("div");
      card.innerHTML = categoriesTemplate(element);
      categories.appendChild(card);
    });

    restaurant.menus.foods.forEach((element) => {
      const card = document.createElement("div");
      card.innerHTML = foodTemplate(element);
      foods.appendChild(card);
    });

    restaurant.menus.drinks.forEach((element) => {
      const card = document.createElement("div");
      card.innerHTML = drinkTemplate(element);
      drinks.appendChild(card);
    });

    restaurant.customerReviews.forEach((element) => {
      const card = document.createElement("div");
      card.innerHTML = reviewTemplate(element);
      reviews.appendChild(card);
    });

    location.innerHTML = `${restaurant.address}, ${restaurant.city}`;
    rating.innerHTML = `Overall Rating: ${restaurant.rating}`;

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurant: RestaurantIdb,
      data,
    });
  },
};

export default Detail;
