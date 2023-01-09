import React from 'react';
import { useSelector } from 'react-redux';
import './ImageSection.scss';
import { useState } from 'react';
import BasicModal from './BasicModal/BasicModal';

const ImageSection = () => {
  const [openModal, setOpenModal] = useState(false);

  console.log(openModal, 'come from ImageSection ');
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const choosenRecipe = useSelector((state) => state.choosenRecipe);

  console.log(choosenRecipe);
  if (!choosenRecipe) {
    return;
  }

  const imageUrl = choosenRecipe.images.REGULAR.url;

  console.log(imageUrl);

  return (


    <div className="imageContainer">
      <img onClick={handleOpenModal} src={imageUrl} alt="" />

      <BasicModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default ImageSection;
