import React, { useReducer, useEffect} from 'react';
import CustomTable from './CustomTable';
import Loading from './loading'
import axios from 'axios'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import isEmpty from 'is-empty'
import {Titulo} from './styledCommon'
import * as Reducer from '../hookReducer/DataRecordsReducer'
import {reportsTypes} from '../constants/reportsTypes'


const Home=()=> {
    const [fetchState, localDispatch] = useReducer(Reducer.DataRecordsReducer, Reducer.initialState);

    const handleSelect=(e)=>{
        localDispatch({ type: 'SET_CURRENT_DATA', data: fetchState.data[e], titulo:reportsTypes.find(x=>x.id==e).description });
    }

    useEffect(() => {
        localDispatch({ type: 'FETCH_INIT' });
        axios.get("/records")
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
            <Titulo>{fetchState.titulo}</Titulo>
            <DropdownButton onSelect={handleSelect} id="dropdown-basic-button" title="Reportes" className="mb-3">
                <Dropdown.Item eventKey="registros" as="button">Todos los Registros</Dropdown.Item>
                <Dropdown.Item eventKey="reporteDiario" as="button">Diario</Dropdown.Item>
                <Dropdown.Item eventKey="reportePorCategoria" as="button">Gastos por Categoria</Dropdown.Item>
                <Dropdown.Item eventKey="proyeccion" as="button">Proyección Mensual</Dropdown.Item>
            </DropdownButton>
            {
                !isEmpty(fetchState.currentData) && fetchState.currentData.data.length > 0 
                && <CustomTable 
                        header={fetchState.currentData.headers} 
                        data={fetchState.currentData.data} 
                        columnsOrder={fetchState.currentData.columnsOrder} />
            }
            <Loading visible={fetchState.isLoading} />
        </div>
      </>
      )
  }

  export default Home;