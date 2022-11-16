import {Character} from "./CharacterCardComponent";
import React from "react";
//import "./CharacterGallery.css"


type CharactersGalleryProps = {
    item: Character[]
}

export default function CharacterGalleryComponent(props: CharactersGalleryProps){
    const result = props.item.map((item, index) => {
        return <CharacterGalleryComponent item={props.item} key={index}/>
        }
    )
    return (
        <div className={"charactersList"}>
            {result}
        </div>
    )
}