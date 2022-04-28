import "./Calculator.css";

import { useState } from "react";
const Calculator = () => {
    const [temp, setTemp] = useState('');
    const [displayData, setDisplayData] = useState(null);
    
    const cal = ((displayData - 32) * 5/9).toFixed(3);

    const handleClick = () => {
        setTemp(cal);
    };

    const handleChange = (e) => {
        setDisplayData(e.target.value);
    };

    return(
        <div className="background">
            <div className="center">
            <input className="input" onChange={handleChange} placeholder="°F" />
            <button className="button" onClick={handleClick}>Enter</button>
            <p className="output-color">{temp <= 0 ? <p>please enter a temp in fahrenheit.</p> : <p>{`${temp} °C`}</p> }</p>
            </div>
        </div>
    );
};

export default Calculator;