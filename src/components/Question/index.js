import { Option } from './Option';
import { useState } from "react";
import { nanoid } from "nanoid";
import "./styles.css";

export function Question(props) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [options, setOptions] = useState([{ id: nanoid(), value: null,votes: 0  }]);
   return (
     <div className="row">
       <input
         className="input"
         maxLength="80"
         placeholder="Enter the question ?"
         value={value}
         onChange={(e) => setValue(e.target.value)}
         type="text"
         required
       />
       {options &&
         options.map((op) => (
           <Option key={op.id} options={options} option={op} optionsList={setOptions} />
         ))}
       {error && <p className="error">{error}</p>}
       <button
         className="button"
         onClick={() => {
           if (value === "" || value === undefined) {
             setError("Please Enter the value of the question ");
           } else if (options.length < 3) {
             setError("Please Enter at least two options ");
           } else {
             props.setQuestion({
               id: nanoid(),
               question: value,
               options: options,
             });
             setError("");
           }
         }}
       >
         Submit
       </button>

       <button
         className="button"
         onClick={() => {
           props.setQuestion(null);
           setOptions([{ id: nanoid(), value: null, votes: 0 }]);
           setError("");
         }}
       >
         Reset
       </button>
     </div>
   );
};
