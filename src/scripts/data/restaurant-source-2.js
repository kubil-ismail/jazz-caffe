import ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
  static async getRestaurant() {
    const response = await fetch(ENDPOINT.GET_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(`${ENDPOINT.GET_DETAIL_RESTAURANT + id}`);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
