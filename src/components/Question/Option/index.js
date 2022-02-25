import { useState } from "react";
import { nanoid } from "nanoid";

export function Option(props) {
    const [value, setValue] = useState("");

    const setOption = () => {
        props.option.value = value;
        props.optionsList([
            ...props.options,
            { id: nanoid(), value: null, votes: 0 },
        ]);
    };
    return (
      <div className="row">
        <input
          className="input"
          placeholder="Option.."
          value={value}
          maxLength="80"
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        {props.option.value ? (
          <button
            className="button"
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
      </div>
    );
};