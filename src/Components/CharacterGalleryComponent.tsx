import CharacterCardComponent, {Character} from "./CharacterCardComponent";
import SearchCharacter from "../SearchCharacter";
import React, {ChangeEvent, useState} from "react";

import "./CharacterGallery.css"

type CharactersGalleryProps = {
    characterItems: Character[]
}

export default function SearchCharacterComponent(props: CharactersGalleryProps){

    let [searchCharacter, setSearchCharacter] = useState("");
    let [filteredCharacter, setFilteredCharacter] = useState(props.characterItems);

    const textOutput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchCharacter(event.target.value)
    }
    let result;
    function deleteCharacter(id: number) {
        const characters: any = props.characterItems.filter((character) =>{
            if(character.id !== id){
                return character
            }
        })
        setFilteredCharacter(characters)
    }



        const filtered = () => {
            let filteredCharacters = filteredCharacter

            let uniqueNames = new Set<string>()
            filteredCharacter.map((characterItem) => {
                    uniqueNames.add(characterItem.name.toLowerCase())
                }
            )
            if (uniqueNames.has(searchCharacter.toLowerCase())) {
                filteredCharacters = filteredCharacter.filter((character) => {
                    return character.name.toLowerCase() === searchCharacter.toLowerCase()
                })
            } else {

                if (searchCharacter.toLowerCase() === "alive") {
                    filteredCharacters = filteredCharacter.filter((character) => {
                        return character.status === "Alive"
                    })
                }
                if (searchCharacter.toLowerCase() === "dead") {
                    filteredCharacters = filteredCharacter.filter((character) => {
                        return character.status === "Dead"
                    })
                }
                if (searchCharacter.toLowerCase() === "human") {
                    filteredCharacters = filteredCharacter.filter((character) => {
                        return character.species === "human"
                    })
                }
                if (searchCharacter.toLowerCase() === "nohuman") {
                    filteredCharacters = filteredCharacter.filter((character) => {
                        return character.species !== "human"
                    })
                }
                if (searchCharacter.toLowerCase() === "male") {
                    filteredCharacters = filteredCharacter.filter((character) => {
                        return character.gender === "male"
                    })
                }
                if (searchCharacter.toLowerCase() === "female") {
                    filteredCharacters = filteredCharacter.filter((character) => {
                        return character.gender === "female"
                    })
                }
            }
            return filteredCharacter.map((characterItem, index) => {
                    return <CharacterCardComponent characterItem={characterItem} key={index} deleteFunction={deleteCharacter}/>
                }
            )
        }


    if(searchCharacter !== "") {
        result = filtered()
    }
    else{
        result = filteredCharacter.map((characterItem, index) => {
                return <CharacterCardComponent characterItem={characterItem} key={index} deleteFunction={deleteCharacter}/>
            }
        )
    }

    return (
        <>
            <div>
            <input onChange={textOutput}/>
            </div>
            <div className={"charactersList"}>
                {result}
            </div>

        </>


    )

}