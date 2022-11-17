import React, {useState} from 'react';
import './App.css';
/*import HelloWorldComponent from "./Components/HelloWorldComponent";
import GreetingPersonComponent from "./Components/GreetingPersonComponent";*/
import {RICK_AND_MORTY_CHARACTERS} from "./Components/rickAndMortyCharacters";
import CharacterGalleryComponent from "./Components/CharacterGalleryComponent";
import Character from "./Components/CharacterCardComponent"
import axios from "axios";


// Komponente, die "App" heißt
// Alle Komponente werden in .tsx-Format gespeichert
function App() {
    //const newName="Anna"

    //const personList = ["Anna", "Maria", "Anton", "Alex"]

  // Hier wrd Logik betrieben
  // Hier gilt reines TypeScript


  // das ist ein "Template" = Schablone, kein HTML
  // Aus diesem Objekt baut REACT dann "echtes" HTML

    const [characters, setCharacters] = useState<Character[]>([])

    function getCharacters(){
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results)
                console.log(characters)
            })
    }

  return (
    <div className="App">
      {/*<HelloWorldComponent/>*/}
{/*      <HelloUserComponent name={"Maria"}/>
        <HelloUserComponent name={newName}/>*/}
{/*      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
{/*
        <div>
            <GreetingPersonComponent personName={personList}/>
        </div>*/}



        <h1 className={"siteTitle"}>Rick and Morty App</h1>
        <br/>
{/*        <div>
            {CounterExample()}
        </div>*/}


        <div className ="charactersList">

            <CharacterGalleryComponent characterItems={characters}/>

        </div>
        </div>
  );
}

export default App;
