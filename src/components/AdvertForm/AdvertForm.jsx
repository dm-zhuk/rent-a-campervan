import React, { useEffect, useState, memo } from 'react';
// import CardData from '../../helpers/CardData';
import Card from '../../helpers/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/advert/operations';
import { selectAdvert } from '../../redux/advert/selectors';
import styles from './index.module.scss';

const AdvertForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAdvert);
  const perPage = 4;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  const MemoizedCardContainer = memo(
    <div className={styles.cardContainer}></div>
  );

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const renderedCards =
    items && Object.values(items).slice(startIndex, endIndex);

  return (
    <>
      <section className={styles.cardsContainer}>
        {renderedCards &&
          renderedCards.map(card => (
            <MemoizedCardContainer key={card._id}>
              <Card card={card} />
            </MemoizedCardContainer>
          ))}
        {Object.values(items).length > endIndex && (
          <button
            type="button"
            className={styles.loadMore}
            onClick={handleLoadMore}
          >
            Load more
          </button>
        )}
      </section>
    </>
  );
};

export default AdvertForm;
