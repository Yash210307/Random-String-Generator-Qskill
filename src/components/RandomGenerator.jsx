import { useState, useCallback, useEffect } from "react";
import "../App.css";

function RandomGenerator() {

  const [length, setLength] = useState(10);
  const [randomString, setRandomString] = useState("");

  const generateString = useCallback(() => {

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setRandomString(result);

  }, [length]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  const copyText = () => {
    navigator.clipboard.writeText(randomString);
    alert("Copied!");
  };

  return (
    <div className="container">

      <h1>Random String Generator</h1>

      <div className="card">

        <label>
          String Length: {length}
        </label>

        <input
          type="range"
          min="5"
          max="30"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />

        <input
          className="output"
          value={randomString}
          readOnly
        />

        <div className="buttons">

          <button onClick={generateString}>
            Generate
          </button>

          <button onClick={copyText}>
            Copy
          </button>

        </div>

      </div>

    </div>
  );
}

export default RandomGenerator;