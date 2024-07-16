import {useState} from 'react';
import Timer from './Timer';
import HappyBirthday from './HappyBirthday';
import SneakPeek from './SneakPeek';
import languages from './assets/languages.json';

function App() {

    const [language, setLanguage] = useState(parseInt(localStorage.getItem("b-day-lang")) || 0);

    function languageChange(event) {
        setLanguage(languages.indexOf(event.target.value));
        localStorage.setItem("b-day-lang", languages.indexOf(event.target.value));
    }
  
    return (
        <div className="app">
            <div className="language">
                <img src={`${languages[language]}.svg`} />
                <select value={languages[language]} onChange={languageChange}>
                    <option value="русский">русский</option>
                    <option value="english">english</option>
                </select>
            </div>
            <hr/>
            <Timer lang={language}/>
            <HappyBirthday lang={language}/>
            <SneakPeek lang={language}/>
        </div>
    )
}

export default App
