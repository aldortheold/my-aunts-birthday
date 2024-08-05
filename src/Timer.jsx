import {useState, useEffect} from 'react';
import text from './assets/text.json';

function Timer(props) {

    return(
        <>
            <p className="clock-p">
                {`⌚ ${text[props.lang].clock[0]} ⌚`}<br/>
                {`🚚 ${text[props.lang].clock[1]} 🚚`}
            </p>
            <div className="clock-container">
                <img src="space.svg" className="side-img"/>
                <div className="clock">
                    <span>{text[props.lang].present)}</span>
                </div>
            </div>
        </>
    );
}

export default Timer
