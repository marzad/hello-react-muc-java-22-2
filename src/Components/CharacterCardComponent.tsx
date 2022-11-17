import React, {ChangeEvent} from "react";
import "./CharacterCard.css"
import Character from "./model/Character"

/*
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
}*/

type CharactersCardProps = {
    characterItem: Character
    deleteFunction(idToDelete: number): void
}

export default function CharacterCardComponent(props: CharactersCardProps){

    const deleteCharacterButton = () => {
        props.deleteFunction(props.characterItem.id)
    }

    return (
        <div className={"characterCard"}>
            <p id={"Name"}>{props.characterItem.name}</p>
            <img src={props.characterItem.image} alt={"Image"}/>
            <p>{props.characterItem.location.name}</p>
            <div><button onClick={deleteCharacterButton}>Delete</button></div>
        </div>
    )
}