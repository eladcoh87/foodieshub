import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeAction } from '../../../../store/actions';
const Filter = () => {
  const recpiesList = useSelector((state) => state.recpiesList);
  const originalSearchList = useSelector((state) => state.originalSearchList);
  
  const dispatch = useDispatch();

  const handleOnBlur = (event) => {


    if (event.target.value === '' && recpiesList.length === originalSearchList.length) {
      return;
    }

    if (event.target.value.trim() === '' && recpiesList.length !== originalSearchList.length) {
      dispatch(getRecipeAction(originalSearchList));
      return;
    }

    const value = event.target.value.toLowerCase();

    const filteredList = originalSearchList.filter((recpie) => {

      const ingredintText = recpie.ingredients.map((ingredient) =>
        ingredient.text.toLowerCase()
      );


      let ingredintFlag = false;

      ingredintText.forEach((string) => {
        const position = string.search(value);

        if (position >= 0) {
          ingredintFlag = true;
        } else {
          return;
        }
      });

      return ingredintFlag;
    });



    if (filteredList.length > 0) {
      dispatch(getRecipeAction(filteredList));
    }

  }



  
  return (
    <div>
      <TextField
        onBlur={handleOnBlur}
        id="outlined-basic"
        label="enter a ingredint"
        variant="outlined"
      />
    </div>
  );
};

export default Filter;
