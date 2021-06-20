import CONFIG from "./config";

const API_ENDPOINT = {
  GET_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  GET_DETAIL_RESTAURANT: `${CONFIG.BASE_URL}/detail/`,
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
