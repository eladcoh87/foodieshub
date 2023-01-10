import React, { useEffect } from 'react';
import './MainSection.scss';
import { CircularProgress, Container } from '@mui/material';
import InputSearch from './InputSearch/InputSearch';
import PreviousSearch from './PreviousSearch/PreviousSearch';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRecipeAction,
  setIsLoadingAction,
  setOriginalRecipes,
} from '../../store/actions';
import { getRecipesApi } from '../../apis/apis';
import FilterAndSort from './FilterAndSort/FilterAndSort';
import RecipesSection from './RecipesSection/RecipesSection';

const MainSection = () => {

  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state);


  useEffect(() => {

    const recipeList = getRecipesApi('pizza');
    
    recipeList
      .then((recipes) => {
        if (!recipes) {
          throw new Error('somtinhg went wro');
        }

        const recipeList = recipes.map((recpieItem) => recpieItem.recipe);

        dispatch(getRecipeAction(recipeList));
        dispatch(setOriginalRecipes(recipeList))

      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoadingAction(false));
      });
  }, []);



  return (
    <Container className="MainSectionContainer" maxWidth="xl">
      <PreviousSearch />
      <InputSearch />
      <FilterAndSort />
      {isLoading && (
        <div className="spinner">
          {' '}
          <CircularProgress />{' '}
        </div>
      )}
      <RecipesSection />
    </Container>
  )
}

export default MainSection;
