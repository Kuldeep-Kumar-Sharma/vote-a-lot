import './App.css';
import { useState, useEffect } from "react";

// ==== Importing Components
import { Question } from "./components/Question";
import { Vote } from "./components/Vote";
import { Results } from "./components/Results";

function App() {
  const [question, setQuestion] = useState();
  const [refershChart, setRefreshChart] = useState(0);

  useEffect(() => {
    //Referesh the chart from here
      }, [refershChart]);
  return (
    <>
      <div className="row">
        <h3>Sir Vote-a-lot</h3>
      </div>
      <div className="row">
        <div className="column">
          <Question setQuestion={setQuestion} />
        </div>
        <div className="column">
          {question && (
            <Vote
              refershChart={refershChart}
              setRefreshChart={setRefreshChart}
              question={question}
            />
          )}
        </div>
        <div className="column">
          {question && (
            <Results  question={question} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
