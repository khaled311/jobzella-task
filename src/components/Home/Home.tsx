import { MainContent, Navbar, Sidebar } from "../index";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="flex overflow-hidden">
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
