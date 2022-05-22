import React from "react";
import { Chart } from "react-google-charts";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function Results(props) {
  const data = [["Votes", "Options", { role: "style" }]];
  if (props.question.options !== null) {
    for (let i = 0; i < props.question.options.length - 1; i++) {
      data.push([
        props.question.options[i].value,
        props.question.options[i].votes,
        getRandomColor(),
      ]);
    }
  }
    const options = {
      title: props.question.question,
      chartArea: { width: "50%" },
      hAxis: {
        title: "Votes",
        minValue: 0,
      },
      vAxis: {
        title: "Options",
      },
    };
  return props.question.options
    ? data.length > 0 && (
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      )
    : null;
}
