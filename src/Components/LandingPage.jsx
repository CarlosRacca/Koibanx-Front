import React from "react";
import styles from '../Components/LandingPage.module.css';
import SearchBar from "./SearchBar";
import Table from "./Table";


export default function LandingPage(){

    return(
        <div className={styles.LandingPage}>
            <div className={styles.div}>
                <h1 className={styles.title}>Assesment Koibanx</h1>
                <br/>
                <SearchBar></SearchBar>
                <br></br>
                <Table></Table>
                
            </div>
        </div>
    )
}