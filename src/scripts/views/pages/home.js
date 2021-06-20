/* eslint-disable quotes */
import { headmasterHome } from "../templates/headmaster";
import RestaurantList from "../templates/restaurant-list";
import RestaurantSource from "../../data/restaurant-source";

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
    document.querySelector("#headcontent").innerHTML = headmasterHome;
    const request = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector("#restaurant");

    request.restaurants.forEach((element) => {
      const card = document.createElement("div");
      card.innerHTML = RestaurantList(element);
      restaurantContainer.appendChild(card);
    });
  },
};

export default Home;
