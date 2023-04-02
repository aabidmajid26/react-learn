import './MainContent.css';


function MainContent() {
    return (
        <div className="main-content">
            <h1 id="react-fun-heading">Fun Facts About React:</h1>
            <ul id="react-fun-list">
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Weeles</li>
                <li>Has well over 100K stars on Github</li>
                <li>It's maintained by folks at Meta!</li>
            </ul>
        </div>
    )
}

export default MainContent