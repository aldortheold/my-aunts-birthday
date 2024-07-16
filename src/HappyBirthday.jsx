import text from './assets/text.json';

function HappyBirthday(props) {

    return (
        <div className="greeting">
            <p>
                {`🎉 ${text[props.lang].birthday[0]} 🎉`}<br/>
                {text[props.lang].birthday[1]}<br/>
                {text[props.lang].birthday[2]}<br/>
            </p>
        </div>
    )
}

export default HappyBirthday