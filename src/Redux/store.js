import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
let store = {
    page:1,
    totalPage:"",
    dashBoard:[],
    searchValue:"",
    filterSearch:[]

}

function appReducerFunction(state=store,action){
    console.log("hit");
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "SEARCH_VALUE":
            console.log(action.payload)
            stateCopy.searchValue = action.payload
            let startsWith = stateCopy.dashBoard.filter((name) => {
                let newName = name.first_name.toLowerCase()+name.last_name.toLowerCase()
                return newName.startsWith(action.payload.toLowerCase())}
                

                );
                
            stateCopy.filterSearch = startsWith;
            return stateCopy;
        case "FETCH_PRODUCT_LIST":
            stateCopy.dashBoard = stateCopy.dashBoard.concat(action.payload)
            stateCopy.totalPage = action.totalPage
            stateCopy.page = stateCopy.page +1;
            return stateCopy;
    }
    return state;
}
export default createStore(appReducerFunction,applyMiddleware(thunk))