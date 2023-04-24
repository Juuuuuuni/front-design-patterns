import { useState } from "react";
import "./App.css";
import {PlainComponent} from "./components/PlainComponent";

function App() {
    const [chapter, setChapter] = useState<"PROVIDER_PATTERN" | "WITHOUT_PROVIDER_PATTERN" | null>(null);

    if (!chapter) {
        return (
            <div width="1200px" height="800px" background="red">
                Choose
                <button onClick={() => {
                    console.log("click plain");
                    setChapter("WITHOUT_PROVIDER_PATTERN");
                }}>Plain</button>
                <button onClick={() => setChapter("PROVIDER_PATTERN")}>Provider</button>
            </div>
        );
    }
    else if (chapter === "PROVIDER_PATTERN") {
        return null;
    }
    else {
        return <PlainComponent />
    }
}

export default App;
