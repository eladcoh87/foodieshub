

const initialState = {isLoading:true,choosenRecipe:null,recpiesList:[],originalSearchList:[],lastSearch:[]}


const recipeReducer = (state = initialState,action) => {


switch (action.type) {

case "GET_RECPIES":
   
const recpiesList = [...action.payload];
const choosenRecipe = {...recpiesList[0]};
console.log(recpiesList);
return {...state,recpiesList,choosenRecipe}


case "SET_ISLOADING":

const flag = action.payload;

return {...state,isLoading:flag}


case "SET_PRODUCT":

const choosenProduct = state.recpiesList.find((recpie) => recpie.uri === action.payload);



return {...state,choosenRecipe:{...choosenProduct}}



case "SET_COPY_RECIPES":

const originalSearch = [...action.payload]

console.log(originalSearch);
return {...state,originalSearchList:originalSearch}


case "ADD_TO_LAST_SEARCH":


const lastSearch = [action.payload,...state.lastSearch.slice(0,5)];


return {...state,lastSearch}


    default:

    return state;
}

}
export default recipeReducer;