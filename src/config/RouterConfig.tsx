import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/Root/RootLayout";
import HomePage from "../pages/Home/Home";
import SpinnerLoading from "../components/UI/SpinnerLoading/Spinner";

const PortfolioPage = lazy(() => {
  import("../pages/Portfolio/Portfolio");
});

const PortfolioDetailPage = lazy(() => {
  import("../pages/PortfolioDetail/PortfolioDetail");
});

const ContactPage = lazy(() => {
  import("../pages/Contact/Contact");
});

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

  return (
    <Suspense fallback={<SpinnerLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default RouterConfig;
