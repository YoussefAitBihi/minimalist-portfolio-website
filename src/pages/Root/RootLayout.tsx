import PrimaryFooter from "../../components/Layout/Footer/PrimaryFooter";
import PrimaryHeader from "../../components/Layout/Header/PrimaryHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <PrimaryHeader />
      <main className="container">
        <Outlet />
      </main>
      <PrimaryFooter />
    </>
  );
};

export default RootLayout;
