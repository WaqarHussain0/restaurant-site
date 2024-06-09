import Home from "../pages/Home.page";
import Menu from "../pages/Menu.page";
import OurStory from "../pages/OurStory.page";

export const PAGES_ROUTES = {
  home: "/",
  menu: "/menu",
  about: "/about",
};

interface Route {
  path: string;
  Component: React.ComponentType<any>;
}
const routes: Route[] = [
  { path: PAGES_ROUTES.home, Component: Home },
  { path: PAGES_ROUTES.menu, Component: Menu },
  { path: PAGES_ROUTES.about, Component: OurStory },
];

export default routes;
