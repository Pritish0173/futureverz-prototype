import React,{ useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IndividualSubDomain from './IndividualSubDomain/IndividualSubDomain';
import "d3-transition";
import { select } from "d3-selection";
import ReactWordcloud from "react-wordcloud";
import "./wordcloud.css";
import words from "./words";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";


function IndividualDomain() {

  const data = ['medicine', 'computer science', 'chemistry', 'biology', 'material science'];
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    setValue(inputValue);
  }

  function getCallback(callback) {
    return function (word, event) {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      text
        .on("click", () => {
          if (isActive) {
            setValue(word.text);
          }
        })
    };
  }
  
  const callbacks = {
    getWordColor: (word) => (word.value > 40 ? "orange" : "purple"),
    getWordTooltip: (word) =>
      `The domain "${word.text}" is accelerating by ${word.value}.`,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver")
  };
  
  const options = {
      rotations: 3,
      rotationAngles: [0, 0],
      fontSizes: [10, 40],
    };
    
  if(value !== null){
    return(
      <div>
        <IndividualSubDomain domain={value}/>
      </div>
    );
  }
  else{
    return (
      <div>
        <br></br>
        <h2 className='title'>Explore Technology Forecast</h2>
        <div className='searchbar'>
          <Autocomplete
            freeSolo
            disableClearable
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={data}
            style={{
              backgroundColor: 'white',
              width: '65%',
              marginLeft: '15%',
              borderTopLeftRadius: '0.4em',
              borderBottomLeftRadius: '0.4em',              
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Showing results for all domains"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
              
            )}
          />
          <SearchIcon 
            onClick={handleSearch}
            style={{
              backgroundColor: 'white',
              marginTop: '0.05em',
              width: '1.7em',
              height: '3.4em',
              borderTopRightRadius: '0.4em',
              borderBottomRightRadius: '0.4em',
              fontSize: '1em',
              color: 'grey',
              cursor: "pointer"
            }} />
        </div>
        <br></br>
        <h3 className="textforwordcloud">Accelerating Domains</h3>
        <div className="wordcloud">
            <ReactWordcloud callbacks={callbacks} words={words} options={options} />
        </div>
        <br></br>
        <br></br>
      </div>
  
    );
  }


}

export default IndividualDomain;