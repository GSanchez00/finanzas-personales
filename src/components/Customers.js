import React, { useReducer, useEffect } from 'react';
import Loading from './loading'
import axios from 'axios'
import {Titulo} from './styledCommon'
import CustomTable from './CustomTable';

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
              <CustomTable 
              header={headers} 
              data={fetchState.data} 
              columnsOrder={[{column:'name', type:"string"},{column: 'birthdate', type:"date"},{column: 'email', type:"string"},{column: 'img', type:"img"}]} />
            }
            <Loading visible={fetchState.isLoading} />
        </div>
      </>
      )
  }

  export default Customers;