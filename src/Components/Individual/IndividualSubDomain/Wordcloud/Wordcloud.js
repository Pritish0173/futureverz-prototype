import "d3-transition";
import React from "react";
import ReactWordcloud from "react-wordcloud";
import "./wordcloud.css";
import data from "./words";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const callbacks = {
  getWordColor: (word) => (word.value > 20 ? "orange" : "purple"),
  getWordTooltip: (word) =>
    `The subdomain "${word.text}" is accelerating by ${word.value}.`,
};

const options = {
    rotations: 3,
    rotationAngles: [0, 0],
    fontSizes: [10, 60],
  };


function Wordcloud({domain}) {

  let worddata = data.filter(word => word.domain===domain);

  return (
    <div className="wordcloud">
        <ReactWordcloud callbacks={callbacks} words={worddata} options={options} />
    </div>
  );

}

export default Wordcloud;