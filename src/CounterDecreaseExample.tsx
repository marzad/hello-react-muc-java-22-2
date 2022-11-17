import React, {useState} from "react";

export default function CounterDecreaseExample(){
    let [counter, setCounter] = useState(0);

    const increaseCount = () => setCounter(counter--)

    return(
        <div>
            <button onClick={increaseCount}>Click me</button>

        </div>
    )


}