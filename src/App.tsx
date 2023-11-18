import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import ContactPage from "./pages/Contact/Contact";
import RootLayout from "./pages/Root/RootLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/portfolio", element: <PortfolioPage /> },
        { path: "/contact-me", element: <ContactPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
