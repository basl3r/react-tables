import { API_URL } from '../config'

//selectors 
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, id) => tables.find(table => table.id === id);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const LOAD_TABLES = createActionName('LOAD_TABLES');
const START_LOADING = createActionName('START_LOADING');
const UPLOAD_TABLES = createActionName('UPLOAD_TABLES');

export const loadTables = payload => ({ payload, type: LOAD_TABLES });
export const uploadTables = payload => ({ payload, type: UPLOAD_TABLES});
export const startLoading = () => ({ type: START_LOADING });

export function loadTablesFromAPI() {
  return async (dispatch) => {
    try {
      dispatch(startLoading()); 
      const response = await fetch(`${API_URL}/tables`);
      if (!response.ok) {
        throw new Error('Wystąpił problem podczas pobierania danych z serwera.');
      }
      const data = await response.json();
      dispatch(loadTables(data));
    } catch (error) {
      console.error('Błąd podczas pobierania danych z serwera:', error.message);
    }
  };
}

export function pushTablesToAPI(data) {
  console.log('wysylanie na serwer', data);
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/tables/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      });

      if (!response.ok) {
        throw new Error('Wystąpił problem podczas wysyłania danych na serwer.');
      }
      dispatch(uploadTables(data));
    } catch (error) {
      console.error('Błąd podczas wysyłania danych na serwer:', error.message);
    }
  };
}

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_TABLES:
      return [...action.payload];
    case UPLOAD_TABLES:
      const tableIndex = statePart.findIndex(table => table.id === action.payload.id);
      if (tableIndex === -1) {
        return statePart;
      }
      const updatedTable = {
        ...statePart[tableIndex], 
        ...action.payload,
      };
      const updatedTables = [...statePart];
      updatedTables[tableIndex] = updatedTable;
      return updatedTables;
    case START_LOADING:
      return { ...statePart, loading: true };
    default:
      return statePart;
  };
};

export default tablesReducer;
