import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-DarkMode text-white md:px-10 lg:px-16 xl:px-20">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
