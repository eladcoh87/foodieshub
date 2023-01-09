import React from 'react'
import { useSelector } from 'react-redux'
import './recpieInfo.scss'




const RecpieInfo = () => {

const recipe =  useSelector((state => state.choosenRecipe));

if (!recipe) {

  return
}




  return (



    <div className='recipeinfoConatiner'>
      <h2>{recipe.label}</h2>
      
      <h3>ingrdeint</h3>

      <ul>

    {recipe.ingredientLines.map((ingredeintLine => <li key={ingredeintLine}>{ingredeintLine}</li>))}

      </ul>
      
      
      </div>



  )
}

export default RecpieInfo