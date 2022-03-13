import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../Actions";
import styles from '../Components/SearchBar.module.css';

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)        
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getData(name))
        setName('')
    }

    return (
        <form className={styles.form}>
            <input value={name} type= 'text' placeholder= 'Search...' onChange={e => handleInputChange(e)} onSubmit={e => handleSubmit(e)}/>
            <button type='submit' placeholder='Buscar' onClick={e => handleSubmit(e)} onSubmit={e => handleSubmit(e)} className={styles.button}>Buscar</button>
        </form>
    )
}