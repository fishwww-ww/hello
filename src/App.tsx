import { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>灌林彩豹</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
