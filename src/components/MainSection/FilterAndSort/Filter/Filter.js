import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipeAction} from '../../../../store/actions'
const Filter = () => {

const recpiesList =  useSelector(state => state.recpiesList);
const originalSearchList =  useSelector(state => state.originalSearchList);

const dispatch = useDispatch()

const handleOnBlur = (event) => {

if(event.target.value === "") {

    const newOriginalSearchList = [...originalSearchList];

dispatch(getRecipeAction(newOriginalSearchList))

return;

}

console.log(event.target.value);

const value = event.target.value.toLowerCase();

const filteredList = recpiesList.filter((recpie => {
    
const ingredintText = recpie.ingredients.map((ingredient => ingredient.text.toLowerCase()));
    
console.log(ingredintText);
       
let ingredintFlag = false;


ingredintText.forEach(string => {
        
        const position = string.search(value);

            if (position >= 0) {


                ingredintFlag = true;
                
                

            } else{

                return;
            }
            

       });



        return ingredintFlag

} ))


console.log(filteredList,'this is filtered list ');

if (filteredList.length > 0) {

    dispatch(getRecipeAction(filteredList));
    
}


}



  return (



    <div>

<TextField onBlur={handleOnBlur} id="outlined-basic" label="enter a ingredint" variant="outlined" />

    </div>
  )



}

export default Filter