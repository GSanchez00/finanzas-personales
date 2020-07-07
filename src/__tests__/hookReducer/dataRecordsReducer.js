import React from 'react';
import {DataRecordsReducer} from '../../hookReducer/DataRecordsReducer'

it('returns new state for "FETCH_INIT" type', () => {
    const initialState = {
      isLoading: false,
      isError: false,
      data: [],
      currentData: {},
      titulo: "Reporte de Todos los registros"
    };
    const updateAction = {type: 'FETCH_INIT', data: {} };
    const updatedState = DataRecordsReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      isLoading: true,
      isError: false,
      data: [],
      currentData: {},
      titulo: "Reporte de Todos los registros"
    });
  });


  it('returns new state for "FETCH_SUCCESS" type', () => {
    const initialState = {
      isLoading: false,
      isError: false,
      data: [],
      currentData: {},
      titulo: "Reporte de Todos los registros"
    };
    const updateAction = {type: 'FETCH_SUCCESS', data: { "data" : {"registros" : {} } } };
    const updatedState = DataRecordsReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      isLoading: false,
      isError: false,
      data: { "registros" : {}  },
      currentData: {},
      titulo: "Reporte de Todos los registros"
    });
  });


  it('returns new state for "FETCH_FAILURE" type', () => {
    const initialState = {
      isLoading: false,
      isError: false,
      data: [],
      currentData: {},
      titulo: "Reporte de Todos los registros"
    };
    const updateAction = {type: 'FETCH_FAILURE', data: {}  };
    const updatedState = DataRecordsReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      isLoading: false,
      isError: true,
      data: [],
      currentData: {},
      titulo: "Reporte de Todos los registros"
    });
  });

  
  it('returns new state for "SET_CURRENT_DATA" type', () => {
    const initialState = {
      isLoading: false,
      isError: false,
      data: [],
      currentData: {},
      titulo: "Reporte de Todos los registros"
    };
    const updateAction = {type: 'SET_CURRENT_DATA', data: "CurrentData" , titulo: "NuevoTitulo"  };
    const updatedState = DataRecordsReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      isLoading: false,
      isError: true,
      data: [],
      currentData: "CurrentData",
      titulo: "NuevoTitulo"
    });
  });

  