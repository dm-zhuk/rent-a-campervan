import React, { useState } from 'react';
// import CardModalData from '../Modal/Modal';
import styles from '../components/AdvertForm/index.module.scss';

const ShowMoreModal = ({ advItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={styles.button}
        type="button"
        text="Show more"
        onClick={handleOpen}
      ></button>
      {isOpen && (
        <button onClick={handleClose}>{advItem.name}</button>
        // {CardModalData(data)}
      )}
      ;
    </>
  );
};

export default ShowMoreModal;
