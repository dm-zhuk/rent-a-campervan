import styles from 'components/App/index.module.scss';
import AdvertForm from 'components/AdvertForm/AdvertForm';
import AdvertFilter from 'components/AdvertFilter/AdvertFilter';

const FavoritesPage = () => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.leftSection}>
        <AdvertFilter />
      </section>
      <section className={styles.rightSection}>
        <AdvertForm />
      </section>
    </div>
  );
};

/* 
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/advert/selectors';
import AdvertFilter from 'components/AdvertFilter/AdvertFilter';
import CardData from '../helpers/CardData';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const [filteredAdverts, setFilteredAdverts] = useState(favorites);

  return (
    <>
      <AdvertFilter
        adverts={favorites}
        setFilteredAdverts={setFilteredAdverts}
      />
      <CardData data={filteredAdverts} />
    </>
  );
};
 */
export default FavoritesPage;
