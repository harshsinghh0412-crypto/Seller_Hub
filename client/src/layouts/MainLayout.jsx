import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <Sidebar />

        <div className="main">
          {children}
        </div>
      </div>
    </>
  );
}

export default MainLayout;