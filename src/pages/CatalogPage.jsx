import styles from 'components/App/index.module.scss';
import AdvertForm from 'components/AdvertForm/AdvertForm';
import AdvertFilter from 'components/AdvertFilter/AdvertFilter';

const CatalogPage = () => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.leftSection}>
        <AdvertFilter />
      </section>
      <section className={styles.RightSection}>
        <AdvertForm />
      </section>
    </div>
  );
};
export default CatalogPage;

/* import React, { useEffect, useState, memo } from 'react';
import Card from '../helpers/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../redux/advert/operations';
import {
  selectAdvert,
  selectLoader,
  selectError,
} from '../redux/advert/selectors';
import Loader from 'components/Loader/Loader';
import {
  CardsContainer,
  CardContainer,
  LoadMore,
} from 'components/AdvertForm/index.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdvert);
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);
  const perPage = 4;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  const MemoizedCardContainer = memo(CardContainer);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const renderedCards =
    adverts && Object.values(adverts).slice(startIndex, endIndex);

  return (
    <>
      {isLoading && <Loader />}
      {error && <b>Error: {error}</b>}
      <CardsContainer>
        {renderedCards &&
          renderedCards.map(card => (
            <MemoizedCardContainer key={card._id}>
              <Card card={card} />
            </MemoizedCardContainer>
          ))}
        {Object.values(adverts).length > endIndex && (
          <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
        )}
      </CardsContainer>
    </>
  );
};
 */
