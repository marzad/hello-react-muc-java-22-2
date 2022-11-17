import React, {ChangeEvent, ChangeEventHandler, useState} from "react";

export default function SearchCharacter(){
    let [searchCharacter, setSearchCharacter] = useState("All");

    const textOutput = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }


    return(
        <div>
            <br/>
            <input onChange={textOutput}/>
            <br/>
        </div>
    )


}