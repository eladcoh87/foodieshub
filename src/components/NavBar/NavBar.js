import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './NavBar.scss'
import { Container } from '@mui/material';

const NavBar = () => {
  return (



<AppBar position='fixed' >

<Toolbar className='toolbar'>


<Container className='LinksContainer' maxWidth="xl">



<div><h2>FoodiesHub</h2></div>
    
    <div>
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">HELP</a>
    </div>
    </Container>


</Toolbar>

</AppBar>
    




  )
}

export default NavBar