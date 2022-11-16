import React from "react";

type HelloUserComponentTape = {
    name: String
}

export default function HelloUserComponent(props: HelloUserComponentTape) {

    return (
        <h1>Hallo Du, {props.name}! </h1>
    );
}
