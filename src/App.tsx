import React from 'react';
import './App.css';
/*import HelloWorldComponent from "./Components/HelloWorldComponent";
import GreetingPersonComponent from "./Components/GreetingPersonComponent";*/
import {RICK_AND_MORTY_CHARACTERS} from "./Components/rickAndMortyCharacters";
import CharacterGalleryComponent from "./Components/CharacterGalleryComponent";
import CounterExample from "./CounterExample"
import SearchCharacter from "./SearchCharacter";

// Komponente, die "App" heißt
// Alle Komponente werden in .tsx-Format gespeichert
function App() {
    //const newName="Anna"

    //const personList = ["Anna", "Maria", "Anton", "Alex"]

  // Hier wrd Logik betrieben
  // Hier gilt reines TypeScript


  // das ist ein "Template" = Schablone, kein HTML
  // Aus diesem Objekt baut REACT dann "echtes" HTML

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

            <CharacterGalleryComponent item={RICK_AND_MORTY_CHARACTERS}/>

        </div>
        </div>
  );
}

export default App;
