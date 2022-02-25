import { useState } from "react";
import "./styles.css";

export function Vote(props) {
    const [option, setOption] = useState();
    
  return (
    <div className="row">
      <h5>{props.question.question}</h5>
      {props.question &&
        props.question.options &&
        props.question.options.map((op) => (
          op.value !== null && <div className="row" onChange={(e) => setOption(e.target.id)}>
            <input type="radio" id={op.id} name="option" value={op.value} />
            {op.value}
          </div>
        ))}
      <button
        className="button"
        onClick={() => {
            const optionToBeUpdatedIndex = props.question.options.findIndex(
              (element) => {
                return element.id === option;
              }
            );
            if (optionToBeUpdatedIndex !== -1) {
              props.question.options[optionToBeUpdatedIndex].votes =
                props.question.options[optionToBeUpdatedIndex].votes + 1;
            }
           
            props.setRefreshChart(props.refershChart + 1);
        }}
      >
        Vote
      </button>
    </div>
  );
}
