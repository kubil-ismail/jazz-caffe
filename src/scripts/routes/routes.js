/* eslint-disable import/no-duplicates */
/* eslint-disable quotes */
import HomePage from "../views/pages/home";
import DetailPage from "../views/pages/detail";
import FavoritePage from "../views/pages/favorite";

const routes = {
  "/": HomePage, // default page
  "/home": HomePage,
  "/favorite": FavoritePage,
  "/detail": DetailPage,
};

export default routes;
