import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.css";
import Nav from "./components/Nav";

import Services from "./components/Services";
import BannerText from "./components/Home";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";

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
          path: "page2",
          element: <Page2 />,
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
