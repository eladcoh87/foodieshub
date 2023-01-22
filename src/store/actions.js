export const getRecipeAction = (recpies) => {
  return {
    type: 'GET_RECPIES',
    payload: recpies,
  };
};

export const setIsLoadingAction = (flag) => {
  return {
    type: 'SET_ISLOADING',
    payload: flag,
  };
};

export const setChoosenRecipe = (id) => {
  return {
    type: 'SET_PRODUCT',
    payload: id,
  };
};



export const addToLastSearch = (id) => {
  return {
    type: 'ADD_TO_LAST_SEARCH',
    payload: id,
  };
};


export const setOriginalRecipes = (recpies) => {
  return {
    type: 'SET_ORIGINAL_RECIPE',
    payload: recpies,
  };
};

