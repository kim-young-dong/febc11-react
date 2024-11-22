import Header from "@components/Header";
import Footer from "@components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="todoapp">
      <Header />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
