import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DiffieHellmanGroup} from "crypto";
import HelloComponent from "./Components/HelloComponent";
import HelloWorldComponent from "./Components/HelloWorldComponent";
import HelloUserComponent from "./Components/HelloUserComponent";
import GreetingPersonComponent from "./Components/GreetingPersonComponent";



// Komponente, die "App" heißt
// Alle KOmponente werden in .tsx-Format gespeichert
function App() {
    const newName="Anna"

    const personList = ["Anna", "Maria", "Anton", "Alex"]


  // Hier wrd Logik betrieben
  // Hier gilt reines TypeScript


  // das ist ein "Template" = Schablone, kein HTML
  // Aus diesem Objekt baut REACT dann "echtes" HTML
  return (
    <div className="App">
      <HelloWorldComponent/>
{/*      <HelloUserComponent name={"Maria"}/>
        <HelloUserComponent name={newName}/>*/}

        <GreetingPersonComponent personName={personList}/>

      <header className="App-header">

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
      </header>
    </div>
  );
}

export default App;
