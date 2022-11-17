import React, {useState} from "react";

export default function CounterExample(){
    let [counter, setCounter] = useState(0);

    const increaseCount = () => setCounter(++counter)
    const decreaseCount = () => setCounter(--counter)

        return(
            <div>
                Mein Counter: {counter}
                <br/>
                <button onClick={increaseCount}>Click me</button>
                <br/>
                <button onClick={decreaseCount}>Click me</button>
                <br/>
            </div>
            )


}