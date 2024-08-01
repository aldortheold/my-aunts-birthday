import {useState, useEffect} from 'react';
import text from './assets/text.json';

function Timer(props) {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let days = 2 - time.getDate();
        let hours = (time.getMinutes() === 0 && time.getSeconds() === 0) ? 24 - time.getHours() : 23 - time.getHours();
        let minutes = time.getSeconds() === 0 ? 60 - time.getMinutes() : 59 - time.getMinutes();
        let seconds = time.getSeconds() === 0 ? 0 : 60 - time.getSeconds();

        return (`${days > 0 ? days + ":" : ""}${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`.endsWith("60:00") || `${days > 0 ? days + ":" : ""}${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`.endsWith("00:60")) ? `${days > 0 ? days + ":" : ""}${padZero(hours)}:00:00` : `${days > 0 ? days + ":" : ""}${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }
    
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <>
            <p className="clock-p">
                {`⌚ ${text[props.lang].clock[0]} ⌚`}<br/>
                {`🚚 ${text[props.lang].clock[1]} 🚚`}
            </p>
            <div className="clock-container">
                <img src="space.svg" className="side-img"/>
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    );
}

export default Timer
