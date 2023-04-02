import picture from '../images/ayesha.jpeg';


export default function Profile() {
    return (
        <div className='profile-container'>
            <img id='profile-picture' src={picture}></img>
            <div className='name-contact-div'>
                <p id="name">Ayesha Hilal</p>
                <p id="email">ayesha.hilal@gmail.com</p>
            </div>
        </div>
    )
}