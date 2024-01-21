import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Hello World</h1>
      <h3>
        <button onClick={handleCounter} style={{}}>
          Counter {counter}
        </button>{" "}
      </h3>
    </>
  );
}

export default App;
