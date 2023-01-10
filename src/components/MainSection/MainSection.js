import React, { useEffect } from 'react';
import './MainSection.scss';
import { CircularProgress, Container } from '@mui/material';
import InputSearch from './InputSearch/InputSearch';
import PreviousSearch from './PreviousSearch/PreviousSearch';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeAction, setCopyRecipesList, setIsLoadingAction } from '../../store/actions';
import { getRecipesApi } from '../../apis/apis';
import FilterAndSort from './FilterAndSort/FilterAndSort';
import RecipesSection from './RecipesSection/RecipesSection';

const MainSection = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  console.log(isLoading);

  useEffect(() => {

    const defaultSearch = 'pizza'
    const recipeList = getRecipesApi(defaultSearch);

    recipeList
      .then((recipes) => {
        if (!recipes) {
          throw new Error('somtinhg went wrong!!');
        }
        const recipeList = recipes.map((recpieItem) => recpieItem.recipe);

        dispatch(getRecipeAction(recipeList));
        dispatch(setCopyRecipesList(recipeList))

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
  );
};

export default MainSection;
