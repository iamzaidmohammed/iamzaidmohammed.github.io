import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="bg-DarkMode text-white md:px-10 lg:px-16 xl:px-20">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
