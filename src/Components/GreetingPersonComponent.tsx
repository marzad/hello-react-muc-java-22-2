import React from "react";

type GreetingPersonComponentProps = {
    personName: string[]
}

export default function GreetingPersonComponent(props: GreetingPersonComponentProps) {

    props.personName.map((name) => {
            return <>Hallo {name}!</>
        }
    )

}