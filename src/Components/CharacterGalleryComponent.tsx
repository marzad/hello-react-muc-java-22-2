import CharacterCardComponent, {Character} from "./CharacterCardComponent";
import SearchCharacter from "../SearchCharacter";
import React, {ChangeEvent, useState} from "react";

import "./CharacterGallery.css"

type CharactersGalleryProps = {
    item: Character[]
}

export default function SearchCharacterComponent(props: CharactersGalleryProps){

    let [searchCharacter, setSearchCharacter] = useState("All");

    const textOutput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchCharacter(event.target.value)
    }
    const result = () => {
        let filteredCharacters = props.item

        let uniqueNames = new Set<string>()
        props.item.map((characterItem) => {
                uniqueNames.add(characterItem.name.toLowerCase())
            }
        )
        if(uniqueNames.has(searchCharacter.toLowerCase())){
            filteredCharacters = props.item.filter((character) => {
                return character.name.toLowerCase() === searchCharacter.toLowerCase()})
        }else {

            if (searchCharacter.toLowerCase() === "alive") {
                filteredCharacters = props.item.filter((character) => {
                    return character.status === "Alive"
                })
            }
            if (searchCharacter.toLowerCase() === "dead") {
                filteredCharacters = props.item.filter((character) => {
                    return character.status === "Dead"
                })
            }
            if (searchCharacter.toLowerCase() === "human") {
                filteredCharacters = props.item.filter((character) => {
                    return character.species === "human"
                })
            }
            if (searchCharacter.toLowerCase() === "nohuman") {
                filteredCharacters = props.item.filter((character) => {
                    return character.species !== "human"
                })
            }
            if (searchCharacter.toLowerCase() === "male") {
                filteredCharacters = props.item.filter((character) => {
                    return character.gender === "male"
                })
            }
            if (searchCharacter.toLowerCase() === "female") {
                filteredCharacters = props.item.filter((character) => {
                    return character.gender === "female"
                })
            }
        }


        return filteredCharacters.map((characterItem, index) => {
                return <CharacterCardComponent characterItem={characterItem} key={index}/>
            }
        )
        }
    return (
        <>
            <input onChange={textOutput}/>
            <div className={"charactersList"}>
                {result()}
            </div>
        </>


    )

}