//selectors 
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, id) => tables.find(table => table.id === id);

// actions
// eslint-disable-next-line
const createActionName = actionName => `app/tables/${actionName}`;
const LOAD_TABLES = createActionName('LOAD_TABLES');
// eslint-disable-next-line
const START_LOADING = createActionName('START_LOADING');

export const loadTables = payload => ({ payload, type: LOAD_TABLES });

export function loadTablesFromAPI() {
  return function (dispatch) {
    fetch('http://localhost:3131/api/tables')
      .then(response => response.json())
      .then(data => dispatch(loadTables(data)))}
}


// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_TABLES:
      return [...action.payload];
    default:
      return statePart;
  };
};

export default tablesReducer;
