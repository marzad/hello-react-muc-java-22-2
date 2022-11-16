import CharacterCardComponent, {Character} from "./CharacterCardComponent";
import React from "react";

import "./CharacterGallery.css"

type CharactersGalleryProps = {
    item: Character[]
}

export default function CharacterGalleryComponent(props: CharactersGalleryProps){
    const result = props.item.map((character, index) => {
        return <CharacterCardComponent characterItem={character} key={index}/>
        }
    )
    return (
        <div className={"charactersList"}>
            {result}
        </div>
    )

}