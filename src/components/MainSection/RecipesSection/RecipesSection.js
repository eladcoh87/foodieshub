import React from 'react';
import CardGrid from '../CardGrid/CardGrid';
import ImageSection from '../ImageSection/ImageSection';
import RecpieInfo from '../RecpieInfo/RecpieInfo';

const RecipesSection = () => {
  return (
    <div className="InfoContainer">
      <CardGrid />
      <ImageSection />
      <RecpieInfo />
    </div>
  );
};

export default RecipesSection;
