import React from "react";
import "./CharacterCard.css"


export type Character = {
    id : number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {name: string, url: string},
    location: {name: string, url: string},
    image: string,
    episode: string[],
    url: string,
    created: string
}

type CharactersCardProps = {
    characterItem: Character
}

export default function CharacterCardComponent(props: CharactersCardProps){

    return (
        <div className={"characterCard"}>
            <p id={"Name"}>{props.characterItem.name}</p>
            <img src={props.characterItem.image} alt={"Image"}/>
            <p>{props.characterItem.location.name}</p>
        </div>
    )
}