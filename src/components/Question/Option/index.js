import { useState } from "react";
import { nanoid } from "nanoid";

export function Option(props) {
  const [value, setValue] = useState("");

  const [error, setError] = useState("");

  const setOption = () => {
    if (value !== "") {
      props.option.value = value;
      props.optionsList([
        ...props.options,
        { id: nanoid(), value: null, votes: 0 },
      ]);
    } else {
      setError("Enter the option value first!!");
    }
  };
  return (
    <div className="row">
      <input
        className="input"
        placeholder="Enter the option.."
        value={value}
        maxLength="80"
        onChange={(e) => { setValue(e.target.value);  setError(""); }}
        type="text"
      />
      {props.option.value ? (
        <button
          className="button-close"
          onClick={() => {
            props.optionsList(
              props.options.filter((x) => {
                return x.id !== props.option.id;
              })
            );
          }}
        >
          X
        </button>
      ) : (
        <button className="button-opt" onClick={setOption}>
          Add
        </button>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}
