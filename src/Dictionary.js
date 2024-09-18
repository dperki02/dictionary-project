import React, { useState } from 'react';
import axios from 'axios';
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [searchTerm, setTerm] = useState("");
    let [results, setResults] = useState(null);

    
    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }
    function search(event) {
        event.preventDefault();
        // documentation : https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSearchTeamChange(event) {
        setTerm(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange = {handleSearchTeamChange}  />
            </form>
            <Results results={results} />
        </div>
    );
}