import { Container, Grid } from '@mui/material';
import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <Container className="footerContainer" maxWidth="xl">
      <div>
        <h2>FoodiesHub</h2>
      </div>
      <Grid className="gridContainer" container spacing={2}>
        <Grid
          className="gridItem"
          container
          item
          xs={4}
          justifyContent="center"
          alignItems="center"
          direction="column"
          justifyItems="center"
        >
          <h3>Contact</h3>
          <ul>
            <li>
              {' '}
              <a href="#">About Us</a>{' '}
            </li>
            <li>
              {' '}
              <a href="#">Editorial Process</a>{' '}
            </li>
            <li>
              {' '}
              <a href="#">Privacy Policy</a>{' '}
            </li>
          </ul>
        </Grid>

        <Grid
          container
          item
          xs={4}
          justifyContent="center"
          alignItems="center"
          justifyItems="center"
          direction="column"
        >
          <h3>Terms of Use</h3>
          <ul>
            <li>
              {' '}
              <a href="#">Content Licensing</a>
            </li>
            <li>
              {' '}
              <a href="#">Anti-Racism Pledge</a>
            </li>
            <li>
              {' '}
              <a href="#">Product Vetting</a>
            </li>
          </ul>
        </Grid>

        <Grid
          container
          item
          xs={4}
          justifyContent="center"
          alignItems="center"
          justifyItems="center"
          direction="column"
        >
          <h3>ABOUT US</h3>
          <ul>
            <li>
              {' '}
              <a href="#">Content Licensing</a>
            </li>
            <li>
              {' '}
              <a href="#">Anti-Racism Pledge</a>
            </li>
            <li>
              {' '}
              <a href="#">Product Vetting</a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
