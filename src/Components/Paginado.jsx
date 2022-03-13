import React from "react";
import styles from '../Components/Paginado.module.css';

export default function Paginado({elementsPerPage, Data, paginado, currentPage}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(Data/elementsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <div className={styles.paginado}>
            <div className={styles.div}>
            
            {
                currentPage === 1 ? <div/>: <button onClick={() => paginado(currentPage - 1)}>Anterior</button>
            }
            <a> Pagina actual: {currentPage}</a>
            {
                currentPage === pageNumbers.length ? <div/> : <button onClick={() => paginado(currentPage + 1)}>Siguiente</button>
            }

            </div>
            <ul className='paginado'>
                
                { pageNumbers?.map(number => {
                    return (
                    <label key={number} className={styles.label}>
                        <button onClick={() => paginado(number)} className={styles.number}>{number}</button> 
                    </label>
                    )
                })}
                
                
            </ul>
        </div>
    )
}