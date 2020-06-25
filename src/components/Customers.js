import React, { useReducer, useEffect } from 'react';
import Loading from './loading'
import axios from 'axios'
import { Table } from "reactstrap";
import {formatDDMMYYYY} from "../helpers/dateHelper";
import {Titulo} from './styledCommon'

const initialData = [];
const dataGetReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.data.data
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };

 const Customers=()=> {
    const headers=["Nombre", "Fecha Nacimiento", "Mail", "Foto"]
    const [fetchState, localDispatch] = useReducer(dataGetReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    useEffect(() => {
        localDispatch({ type: 'FETCH_INIT' });
        axios.get("/customers")
        .then(function (response) {
          localDispatch({ type: 'FETCH_SUCCESS', data: response.data });
        })
        .catch(function (error) {
          localDispatch({ type: 'FETCH_FAILURE' });
        });
    },[]);

    return(
      <>
        <div style={{margin:"5%"}}>
            <Titulo>Clientes</Titulo>
            {fetchState.data && fetchState.data.length > 0 && 
            <Table responsive>
                <thead>
                    <tr>
                        {
                            headers.map((el, key)=>
                            (
                                <th key={key}>{el}</th> 
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    fetchState.data.map((cell, key) => {
                    return (
                        <tr key={key}>
                            <td>{cell.name}</td>
                            <td>{formatDDMMYYYY(cell.birthdate)}</td>
                            <td>{cell.email}</td>
                            <td><img src={cell.img}  width="67" height="50" alt="" /></td>
                        </tr>
                        );
                    })
                }
                </tbody>
            </Table>
            }
            <Loading visible={fetchState.isLoading} />
        </div>
      </>
      )
  }

  export default Customers;