import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getData, orderByCUIT, orderByComercios, filterByActivo} from '../Actions/index' 
import styles from '../Components/Table.module.css';
import Paginado from "./Paginado";


export default function Table(){

    const dispatch = useDispatch();
    const Data = useSelector((state) => state.allData);
    const [orden , setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage, setElementsPerPage] = useState(10);
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElement = Data.slice(indexOfFirstElement, indexOfLastElement);


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    function handleOrderByComercios(e){
        e.preventDefault();
        dispatch(orderByComercios(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    };

    function handleOrderByCUIT(e){
        e.preventDefault();
        dispatch(orderByCUIT(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    };

    function handleFilterByActivo(e){
        e.preventDefault();
        dispatch(filterByActivo(e.target.value));
    };

    return(
        <div>
            <Paginado elementsPerPage={elementsPerPage} Data={Data.length} paginado={paginado} currentPage={currentPage}/>
            <table>
                <tbody>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            <select onChange={e => handleOrderByComercios(e)} className={styles.select1}>
                                <option>Comercio</option>
                                <option value= 'asc'>Comercio (A-Z)</option>
                                <option value= 'desc'>Comercio (Z-A)</option>
                            </select>
                        </th>
                        <th>
                            <select onChange={e => handleOrderByCUIT(e)} className={styles.select2}>
                                <option>CUIT</option>
                                <option value= 'mayor'>CUIT (Mayor a Menor)</option>
                                <option value= 'menor'>CUIT (Menor a Mayor)</option>
                            </select>
                        </th>
                        <th>
                            Concepto 1
                        </th>
                        <th>
                            Concepto 2
                        </th>
                        <th>
                            Concepto 3
                        </th>
                        <th>
                            Concepto 4
                        </th>
                        <th>
                            Concepto 5  
                        </th>
                        <th>
                            Concepto 6
                        </th>
                        <th>
                            Balance Anual  
                        </th>
                        <th>
                            <select onChange={e => handleFilterByActivo(e)} className={styles.select4}>
                                <option value='Todos'>Activo?</option> 
                                <option value='Activo'>Activo (Si)</option> 
                                <option value='Inactivo'>Activo (No)</option>
                            </select>
                        </th>
                        <th>
                            Ultima venta
                        </th>
                    </tr>
                        {
                            currentElement ? currentElement.map(el => {

                                return( 
                                    <tr key={el.ID}>
                                        <td>{el.ID}</td>
                                        <td>{el.Comercio}</td>
                                        <td>{el.CUIT}</td>
                                        <td>{el.Concepto1}</td>
                                        <td>{el.Concepto2}</td>
                                        <td>{el.Concepto3}</td>
                                        <td>{el.Concepto4}</td>
                                        <td>{el.Concepto5}</td>
                                        <td>{el.Concepto6}</td>
                                        <td>{el.BalanceAnual}</td>
                                        <td>{el.Activo? 'Si' : 'No'}</td>
                                        <td>{el.UltimaVenta}</td>
                                    </tr>
                                )
                            }) : <tr>
                                    <td> 
                                        Loading...
                                    </td>
                                </tr>
                        }
            </tbody>
        </table>
    </div>
    )
}