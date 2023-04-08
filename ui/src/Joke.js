

export default function Joke(props) {
    let p_displayed = false;
    function showHidePL(e){
        e.preventDefault();
        console.log(e)
        // const p = document.getElementById("p");
        const q = document.getElementById("q");
        const clickme = document.getElementById("clickme");
        if (e.nativeEvent.target.style.display==='block'){
            e.nativeEvent.target.style.display = "none";
            // p.style.display = "none";
            p_displayed = false;
            q.style.borderRadius = '3rem';
            clickme.style.rotate = '-90deg';
            
        }else{
            // p.style.display = "block"

            e.nativeEvent.target.style.display = "block";
            p_displayed = true;
            q.style.borderRadius = '0'
            clickme.style.rotate = '0deg';
        }
    }
    return (
        <div className="dadjoke">
            <p id="q" onClick={showHidePL}>{props.joke.question} <img alt="click here" id="clickme" src="https://cdn-icons-png.flaticon.com/512/60/60995.png" /></p>
            <p id="p">{props.joke.punchline}</p>
        </div>
    )
}