import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="bg-DarkMode text-white md:px-10 lg:px-16 xl:px-20">
      <Navbar />
      <Hero />
      <Skills />
    </main>
  );
}

export default App;
