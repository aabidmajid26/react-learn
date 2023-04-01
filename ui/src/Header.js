import logo from './logo.svg';

function Header() {
    return (
        <div id='wrapper'>
            <img src={logo} id='logo'></img>
            <div id='header-wrapper'>
                <div id='brand'>Third Wave</div>
                <ul id='ul-list'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>

    )
}

export default Header