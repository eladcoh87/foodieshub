import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

import {getRecipesApi} from '../../../apis/apis'
import {addToLastSearch, getRecipeAction,setCopyRecipesList} from '../../../store/actions'
import './InputSearch.scss'
import { useDispatch } from 'react-redux';

const InputSearch = () => {
const [value,setValue]  = useState('')



 const dispatch = useDispatch();

const handleOnChange = (event) => {
 
  setValue(event.target.value)

}




const handleOnClick = (event) =>{



dispatch(addToLastSearch(value))

// const SearchParams = new URLSearchParams({q:value,type:'public'})

const SearchParams = {keyword:value}
const recipeList = getRecipesApi(SearchParams);

setValue('')

recipeList.then(recipes => {
  
  if(!recipes) {


    throw new Error('somtinhg went wrong!!')

  }

  const recipeList = recipes.map((recpieItem => recpieItem.recipe ))

  console.log(recipeList);


    console.log(recipes);


  
  dispatch(getRecipeAction(recipeList))
  dispatch(setCopyRecipesList(recipeList))
  

  console.log(123);


}).catch(error => {
    
    
    console.log(error)
    
  });


}




  return (


    <div className='InputTextContainer'>
        <TextField value={value} onChange={handleOnChange} id="outlined-basic" label="search recipe..." variant="outlined" />

        <Button onClick={handleOnClick} color="secondary" className='search-btn' size="small" variant="contained" endIcon={<SearchIcon />}>
  
</Button>


    </div>



  )
}

export default InputSearch