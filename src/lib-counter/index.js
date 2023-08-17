import { useState } from "react";
import CounterLogo from "./counterLogo"

function Counter() {
    const [count, setCount] = useState(0);
    const incrementCount = function() {
        setCount(count + 1);
    }

    return (
        <div style={{border: "5px solid red"}}>
            <p>This is my counter component</p>

            <p>{count}</p>


            adfadsfsf

            <button onClick={incrementCount}>Click Me</button>

            <CounterLogo></CounterLogo>
        </div>
    );
}

export default Counter;
