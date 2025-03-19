import { useState } from "react";
import axios from "axios";

function App() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleGenerate = async () => {
        try {
            const response = await axios.post("https://individual-assignment-2-new-1.onrender.com", { prompt: input });
            setOutput(response.data.text);
        } catch (error) {
            setOutput("Error generating text.");
        }
    };

    return (
        <div className="App">
            <h1>Business Name & Slogan Generator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a business idea"
            />
            <button onClick={handleGenerate}>Generate</button>
            <p>{output}</p>
        </div>
    );
}

export default App;

