export const initialState={
  isLoading: false,
  isError: false,
  data: [],
  currentData: {},
  titulo: "Reporde de Todos los registros"
}

export const DataRecordsReducer = (state, action) => {
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
          data: action.data.data,
          currentData: action.data.data.registros
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
        case 'SET_CURRENT_DATA':
        return {
            ...state,
            isLoading: false,
            isError: true,
            currentData: action.data,
            titulo: action.titulo
        };
      default:
        throw new Error();
    }
  };