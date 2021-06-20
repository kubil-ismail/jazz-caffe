/* eslint-disable quotes */
import { headmasterFavorite } from "../templates/headmaster";
import FavoriteRestaurant from "../../data/favorite-restaurant-db";
import RestaurantList from "../templates/restaurant-list";

const Home = {
  async render() {
    return `
            <div class="restaurant-content">
                <h2 class="text-center restaurant-title">Explore Restaurant</h2>
                <div id="restaurant" class="grid content-list"></div>
            </div>
        `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurant.getAllRestaurants();
    const restaurantContainer = document.querySelector("#restaurant");
    document.querySelector("#headcontent").innerHTML = headmasterFavorite;
    restaurant.forEach((element) => {
      const card = document.createElement("div");
      card.innerHTML = RestaurantList(element);
      restaurantContainer.appendChild(card);
    });
  },
};

export default Home;
