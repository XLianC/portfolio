import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;