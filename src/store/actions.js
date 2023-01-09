import React from 'react';

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

export const setChoosenProduct = (id) => {
  return {
    type: 'SET_PRODUCT',
    payload: id,
  };
};

export const setCopyRecipesList = (recpies) => {
  return {
    type: 'SET_COPY_RECIPES',
    payload: recpies,
  };
};

export const addToLastSearch = (id) => {
  return {
    type: 'ADD_TO_LAST_SEARCH',
    payload: id,
  };
};

