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
  }, [question,refershChart]);
  return (
    <>
      <div className="row">
        <h3 className="title">Vote a lot</h3>
      </div>
      <div key="question" className="row">
        <div className="column">
          <Question setQuestion={setQuestion} />
        </div>
        <div className="column">
          {question && question.options !== null && (
            <Vote
              refershChart={refershChart}
              setRefreshChart={setRefreshChart}
              question={question}
            />
          )}
        </div>
        <div className="column">
          {question && question.options !== null && (
            <Results question={question} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
