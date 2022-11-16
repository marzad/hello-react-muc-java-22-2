import React from "react";
import "./GreetingComponent.css"

type GreetingPersonComponentProps = {
    personName: string[]
}

export default function GreetingPersonComponent(props: GreetingPersonComponentProps) {
   //
    const result = props.personName.map((name) => {
            return <div className={"GreetBox"}>Hallo {name}!</div>
        }
    )
    return (
   <>
       {result}
    </>
    )
}