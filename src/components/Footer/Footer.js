import { Container, Grid } from '@mui/material'
import React from 'react'
import './style.scss'


const Footer = () => {
  return (


   
      <Container className="footerContainer" maxWidth="xl">
      
<Grid className='gridContainer' container spacing={2}>

<Grid className='gridItem' container item xs={4}  justifyContent="center"
  alignItems="center"   direction="column"
  >


<h3>HEADLINE</h3>
<ul>
<li> <a href="#">link</a> </li>
<li> <a href="#">link</a> </li>
<li> <a href="#">link</a> </li>

</ul>

</Grid>

<Grid container item xs={4}  justifyContent="center"
  alignItems="center"   direction="column"
  >


<h3>HEADLINE</h3>
<ul>
<li> <a href="#">link</a> </li>
<li> <a href="#">link</a> </li>
<li> <a href="#">link</a> </li>

</ul>

</Grid>


<Grid container item xs={4}  justifyContent="center"
  alignItems="center"   direction="column"
  >


<h3>HEADLINE</h3>
<ul>
  <li> <a href="#">link</a> </li>
  <li> <a href="#">link</a> </li>
  <li> <a href="#">link</a> </li>

</ul>

</Grid>



</Grid>

    
    </Container>
  )
}

export default Footer