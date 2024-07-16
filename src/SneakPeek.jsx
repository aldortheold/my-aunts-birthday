import {useState} from 'react';
import text from './assets/text.json';
import peeks from './assets/peeks.json';

function SneakPeek(props) {

    const [peekDisplay, setPeekDisplay] = useState("hidden");
    const [view, setView] = useState(0);
    const [emoji, setEmoji] = useState("😎");
    const [index, setIndex] = useState(Math.floor(Math.random() * peeks.length));

    function show() {
        setPeekDisplay(!view ? "visible" : "hidden");
        setEmoji(!view ? "🫣" : "😎");
        setView(!view ? 1 : 0);
        setIndex(Math.floor(Math.random() * peeks.length));
    }

    return (
        <div className="peek">
            <p>
                {`😶‍🌫️ ${text[props.lang].peek[0]} 😶‍🌫️`}<br/>
                {`🎁 ${text[props.lang].peek[1]} 🎁`}
            </p>
            <div className="show">
                <img src={`${peeks[index]}.svg`} style={{visibility: peekDisplay}}/>
            </div>
            <button onClick={show}>
                {text[props.lang].show[view]} <span style={{fontStyle: "normal"}}>{emoji}</span>
            </button>
        </div>
    )
}

export default SneakPeek