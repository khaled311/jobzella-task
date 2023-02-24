import { MainContent, Navbar, Sidebar } from "../index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="flex overflow-hidden">
      <ToastContainer />
      {/* Sidebar */}
      <Sidebar />
      {/* Sidebar */}
      {/* Main */}
      <main className="flex-grow">
        <Navbar />
        <MainContent />
      </main>
      {/* Main */}
    </section>
  );
};

export default Home;
