import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodChecker from "./components/FoodChecker";

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Navbar />
      <Hero />
      <FoodChecker />
    </div>
  );
}

export default App;
