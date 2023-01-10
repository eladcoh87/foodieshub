const initialState = {
  isLoading: true,
  choosenRecipe: null,
  recpiesList: [],
  originalSearchList: [],
  lastSearch: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {


    case 'GET_RECPIES':
      const recpiesList = [...action.payload];
      const choosenRecipe = { ...recpiesList[0] };
      console.log(recpiesList);
      return { ...state, recpiesList, choosenRecipe};

    case 'SET_ISLOADING':
      const flag = action.payload;

      return { ...state, isLoading: flag };

    case 'SET_PRODUCT':
      const choosenProduct = state.recpiesList.find(
        (recpie) => recpie.uri === action.payload
      );

      return { ...state, choosenRecipe: { ...choosenProduct } };

    case 'ADD_TO_LAST_SEARCH':
      const lastSearch = [action.payload, ...state.lastSearch.slice(0, 5)];

      return { ...state, lastSearch };

      case 'SET_ORIGINAL_RECIPE':
     
     const originalSearchList = [...action.payload]
      return { ...state, originalSearchList };

    default:
      return state;
  }
};
export default recipeReducer;
