import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
import CardData from './CardData';
import CardModalData from 'components/Modal/Modal';

import styles from 'components/AdvertForm/index.module.scss';

const Card = ({ card }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.cardFrame} onClick={handleCardClick}>
        {card.gallery && card.gallery.length > 0 && (
          <img className={styles.imgThumb} src={card.gallery[0]} alt="van" />
        )}
        {CardData(card)}
      </div>
      <ModalWindow isOpen={showModal} onClose={handleModalClose}>
        <CardModalData modal={card} onClose={handleModalClose} />
      </ModalWindow>
    </>
  );
};

export default Card;
