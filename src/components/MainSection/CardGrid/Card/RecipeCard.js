import React from 'react'
import './RecipeCard.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { setChoosenProduct } from '../../../../store/actions';
import { useDispatch } from 'react-redux';


const RecipeCard = (props) => {

const dispatch = useDispatch()

const handleOnClick = (event) =>{


  dispatch(setChoosenProduct(props.id))

}


  return (

    
    <div className='RecipeCardContainer' onClick={handleOnClick}>
    
      <Card className='CardContainer'>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.imgThum}
          alt="green iguana"
        />
        <CardContent>
         <h3>{props.name}</h3>
        </CardContent>
      </CardActionArea>
    </Card>
      
      </div>
  )
}

export default RecipeCard