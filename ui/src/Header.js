import logo from './logo.svg';

function Header() {
    return (
        <div id='wrapper'>
            <img src={logo} id='logo'></img>
            <div id='header-wrapper'>
                <div id='brand'>ReactFacts</div>
                <div id='brand'>Aabid Majid - Project</div>
            </div>
        </div>

    )
}

export default Header