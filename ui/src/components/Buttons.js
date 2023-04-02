import callIcon from '../images/call-icon.png';
import emailIcon from '../images/email-icon.jpg';



export default function Buttons() {
    return (
        <div className="buttons">
            <button><img id='icon' src={callIcon}></img><span>Call</span></button>
            <button><img id='icon' src={emailIcon}></img><span>Email</span></button>
        </div>
    )
}