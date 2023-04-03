import logo from '../images/airbnb-logo.png';

export default function Header() {
    return (
        <nav id='header'>
            <img id="logo-img" src={logo} alt="bnb logo"/>
        </nav>
    )
}