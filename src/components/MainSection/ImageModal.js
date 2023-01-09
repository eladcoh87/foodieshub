import { Modal } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { ReactDOM } from 'react'
const ImageModal = (props) => {

    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => props.handleCloseModal();
    console.log(props);

    console.log(props.openModal);

  return (


   
     
    <Modal
    open={props.openModal}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >

<img src={props.imageUrl} alt="" />



</Modal>

    
  )
}

export default ImageModal