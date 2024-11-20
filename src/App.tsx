import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.css";
import Nav from "./components/Nav";

import Services from "./components/Services";
import BannerText from "./components/Home";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Labos from "./components/Labos";
import {
  Labo1,
  Labo2,
  Labo3,
  Labo4,
  Labo5,
  Labo6,
  Labo7,
  Labo8,
} from "./components/Labos/index";

const Root = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <BannerText />
    </div>
  );
};

const Page1 = () => {
  return <div>Page 1</div>;
};

const Page2 = () => {
  return <div>Page 2</div>;
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "page1",
          element: <Page1 />,
        },
        {
          path: "labos",
          element: <Labos />,
        },
        {
          path: "labos/labo1",
          element: <Labo1 />,
        },
        {
          path: "labos/labo2",
          element: <Labo2 />,
        },
        {
          path: "labos/labo3",
          element: <Labo3 />,
        },
        {
          path: "labos/labo4",
          element: <Labo4 />,
        },
        {
          path: "labos/labo5",
          element: <Labo5 />,
        },
        {
          path: "labos/labo6",
          element: <Labo6 />,
        },
        {
          path: "labos/labo7",
          element: <Labo7 />,
        },
        {
          path: "labos/labo8",
          element: <Labo8 />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "technologies",
          element: <Technologies />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
