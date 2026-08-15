import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodChecker from "./components/FoodChecker";
import ResultCard from "./components/ResultCard";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  const handleResult = (data) => {
    setResult(data.result);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Navbar />

      <main>
        {!result && (
          <>
            <Hero />

            <FoodChecker onResult={handleResult} />
            <HowItWorks />
          </>
        )}

        {result && <ResultCard result={result} onReset={handleReset} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
