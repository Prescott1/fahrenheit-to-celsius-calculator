import "./Calculator.css";


import { useState } from "react";
const Calculater = () => {
    const [temp, setTemp] = useState('');
    const [displayData, setDisplayData] = useState(null);
    
    const cal = Math.round((displayData - 32) * 5/9);

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
            <p className="output-color">{temp <= 0 ? <p>please enter a temp in fahrenheit.</p> : <p>{`${temp} Celsius`}</p> }</p>
            </div>
        </div>
    );
};

export default Calculater;