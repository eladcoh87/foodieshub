import React, { useEffect } from 'react';
import './MainSection.scss';
import { Container } from '@mui/material';

import InputSearch from './InputSearch/InputSearch';
import PreviousSearch from './PreviousSearch/PreviousSearch';
import CardGrid from './CardGrid/CardGrid';
import ImageSection from './ImageSection/ImageSection';
import RecpieInfo from './RecpieInfo/RecpieInfo';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { getRecipeAction, setCopyRecipesList, setIsLoadingAction } from '../../store/actions';
import { getRecipesApi } from '../../apis/apis';
import FilterAndSort from './FilterAndSort/FilterAndSort';

const MainSection = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  console.log(isLoading);

  useEffect(() => {

    const defaultSearch = {keyword:'pizza'}
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
      <div className="InfoContainer">
        <CardGrid />
        <ImageSection />
        <RecpieInfo />
      </div>
    </Container>
  );
};

export default MainSection;
