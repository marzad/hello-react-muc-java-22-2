import React from "react";

type HelloUserComponentProps = {
    name: string
}

export default function HelloUserComponent(props: HelloUserComponentProps) {

    return (
        <h1>Hallo Du, {props.name}! </h1>
    );
}
