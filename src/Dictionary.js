import React, {useState} from 'react';
import "./Dictionary.css";

export default function Dictionary() {
    let [searchTerm, setTerm] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`searching for ${searchTerm}`);
    }
    function handleSearchTeamChange(event) {
        setTerm(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange = {handleSearchTeamChange}  />
            </form>
        </div>
    );
}