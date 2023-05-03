import { useState } from "react";
import "./App.css";
import { ProviderPatternMain } from "~/components/ProviderPattern/ProviderPatternMain";
import { ObserverPatternMain } from "~/components/ObserverPattern/basicExample/ObserverPatternMain";
import { ObserverPatternAboutRuleBook } from "~/components/ObserverPattern/ruleBookExample/ObserverPatternAboutRuleBook";
type Pattern = "PROVIDER_PATTERN" | "OBSERVER_PATTERN";

function App() {
  const [chapter, setChapter] = useState<Pattern | null>(null);

  if (!chapter) {
    return (
      <div width="1200px" height="800px" background="red">
        Choose
        <button onClick={() => setChapter("PROVIDER_PATTERN")}>
          Provider Pattern
        </button>
        <button onClick={() => setChapter("OBSERVER_PATTERN")}>
          Observer Pattern
        </button>
      </div>
    );
  } else if (chapter === "PROVIDER_PATTERN") {
    return <ProviderPatternMain />;
  } else if (chapter === "OBSERVER_PATTERN") {
    return <ObserverPatternAboutRuleBook />;
  }
}

export default App;
