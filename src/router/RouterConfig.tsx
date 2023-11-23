import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/Root/RootLayout";
import HomePage from "../pages/Home/Home";
import PortfolioPage from "../pages/Portfolio/Portfolio";
import ContactPage from "../pages/Contact/Contact";
import PortfolioDetailPage from "../pages/PortfolioDetail/PortfolioDetailPage";

const RouterConfig = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/portfolio", element: <PortfolioPage /> },
        { path: "/portfolio/:slug", element: <PortfolioDetailPage /> },
        { path: "/contact-me", element: <ContactPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterConfig;
