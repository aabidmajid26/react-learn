
import React from 'react';



export default function App() {
    const [c, setC] = React.useState(0);
    return (
        <div>
        <h1>Counters that update separately</h1>
        <MyButton
            c= {c}
            func= {setC}
        />
        <MyButton
        c= {c}
        func= {setC}
        />
        <MyButton
        c= {c}
        func= {setC}
        />
        <MyButton
        c= {c}
        func= {setC}
        />
        </div>
    );
}

function MyButton({c, func}) {
  const [count, setCount] = React.useState(0);
  console.log(c, 'outside')
  function handleClick() {
    func(c + 1)
    console.log(c, 'inside')
    setCount(count + 1);
    console.log(c)
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times, Total:{c} times
    </button>
  );
}
    // let [count, setCount] = React.useState(0)
    // function minus(e) {
    //     e.preventDefault()
    //     setCount(count-1)
    // }
    // function plus(e) {
    //     e.preventDefault()
    //     setCount(count+1)
    // }
    // function reset(e) {
    //     e.preventDefault()
    //     setCount(0)
    // }
    // return(
    //     <div className="container">
    //         <button id='minus' onClick={minus}>-</button>
    //         <div id='counter' onClick={reset}>{count}</div>
    //         <button id='plus' onClick={plus}>+</button>
    //     </div>
    // )
