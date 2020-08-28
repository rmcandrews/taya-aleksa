import { lazy } from "react";
// import Portfolio from "./Portfolio";

const Home = lazy(() => import("./Home"));
const Portfolio = lazy(() => import("./Portfolio"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const NotFound = lazy(() => import("./NotFound"));

export { Home, Contact, About, Portfolio, NotFound };
