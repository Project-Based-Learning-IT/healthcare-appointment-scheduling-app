import React, { useMemo, useState } from 'react'
import './AutoCompleteText.css';
import Trie from "./Trie.js";
import specialization from './specialization'

export default function AutoCompleteText() {
    const [text, setText] = useState();
    const [suggestions, setSuggestions] = useState([]);

    const memoized_trie = useMemo(() => {
        const trie = new Trie();

        // Insert
        for(let i=0; i<specialization.length; i++){
            trie.insert(specialization[i]);
        }

        return trie;
    }, []);

    function onTextChanged(e) {
        let value = e.target.value;
        setText(value);
        value = value.toLowerCase();
        if(value !== '')
            setSuggestions(memoized_trie.find(value))
        else 
            setSuggestions([])
    }

    function suggestionSelected(value){
        setText(value);
        setSuggestions([]);
    }

    function renderSuggestions() {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={()=>suggestionSelected(item)} key={item}>{item}</li>)}
            </ul>
        )
    }

    return (
        <div className="AutoCompleteText">
            <input value={text} onChange={onTextChanged} type="text"></input>
            {renderSuggestions()}
        </div>
    )
}