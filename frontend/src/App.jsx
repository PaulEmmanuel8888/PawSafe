import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodChecker from "./components/FoodChecker";
import ResultCard from "./components/ResultCard";
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
          </>
        )}

        {result && <ResultCard result={result} onReset={handleReset} />}
      </main>
    </div>
  );
}

export default App;
