import logo from './logo.svg';


function Trial() {
    return (
            <nav>

                <img src={logo}></img>
                <div id='brand'>Third Wave</div>
                <ul id="nav-items">
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
            </nav>


    );
}

export default Trial;