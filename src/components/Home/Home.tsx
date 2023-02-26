import { MainContent, Navbar, Sidebar } from "../index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IHome {}

const Home = (props: IHome) => {
  return (
    <section className="flex overflow-hidden">
      <div className="bg-[#F3F3F3] p-[30px_27px_30px_60px] w-[287px] h-screen shrink-0 relative">
        <Sidebar />
      </div>

      <main className="flex-grow relative">
        <Navbar />
        <MainContent />
      </main>
    </section>
  );
};

export default Home;
