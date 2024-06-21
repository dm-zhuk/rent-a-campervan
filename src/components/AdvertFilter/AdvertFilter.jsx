import React, { useContext, useState } from 'react';
import styles from './index.module.scss';
import sprite from '../../img/sprite.svg';
import { filteredAdverts } from 'redux/advert/advertSlice';
import toast from 'react-hot-toast';
/* 
import vector_line from 'img/vLine.svg';
import ac from 'img/ac.svg';
import automatic from 'img/transmission.svg';
import kitchen from 'img/kitchen.svg';
import tv from 'img/tv.svg';
import shower from 'img/shower.svg';
import van from 'img/van.svg';
import van_fully_intg from 'img/fullyIntegrated.svg';
import van_alcove from 'img/alcove.svg'; */

const AdvertFilter = ({ adverts, setFilteredAdverts }) => {
  const { resetPage } = useContext(Pagination);

  const handleSubmit = e => {
    e.preventDefault();
    const FilterParams = getFilterParams(e.target);
    let filteredData = filterData(adverts, filterParams);
    resetPage();
    setFilteredAdverts(filteredData);
    toast.success('Your filter applied');
    resetFilterParams(e.target);
  };
  const resetFilterParams = form => {
    form.reset();
  };
  return (
    <>
      <div className={styles.inputForm}>
        <div className={styles.textInputContainer}>
          <label className={styles.label} htmlFor="city">
            Location
          </label>
          <div className={styles.textField}>
            <symbol viewBox={sprite.viewBox} className={styles.symbol}>
              {sprite.icons.location}
            </symbol>
            <input
              className={styles.input}
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
              placeholder="City"
            />
          </div>
        </div>
        <label className={styles.label} htmlFor="details">
          Filters
        </label>
      </div>
      <div className={styles.checkBoxContainer}>
        <h2 className={styles.h2}>Vehicle equipment</h2>
        <symbol
          viewBox={sprite.viewBox}
          className={styles.vectorLine}
          src={''}
          alt="line"
        />
        <div className={styles.checkRadioInput}>
          <div className={styles.filtersContainer}>
            <input className={styles.filtersTypeInput} onClick={handleClick}>
              <label className={styles.contentBox}>
                <symbol
                  viewBox={sprite.viewBox}
                  className={styles.contentImg}
                  src={''}
                  alt="AC"
                />
                <p className={styles.bodyText}>AC</p>
              </label>
            </input>
            <input className={styles.filtersTypeInput} onClick={handleClick}>
              <label className={styles.contentBox}>
                <symbol viewBox={sprite.viewBox} className={styles.symbol}>
                  {sprite.icons.location}
                </symbol>
                <p className={styles.bodyText}>Automatic</p>
              </label>
            </input>
            <input className={styles.filtersTypeInput} onClick={handleClick}>
              <label className={styles.contentBox}>
                <symbol viewBox={sprite.viewBox} className={styles.symbol}>
                  {sprite.icons.location}
                </symbol>
                <p className={styles.bodyText}>Kitchen</p>
              </label>
            </input>
          </div>
          <div className={styles.filtersContainer}>
            <input className={styles.filtersTypeInput} onClick={handleClick}>
              <label className={styles.contentBox}>
                <symbol viewBox={sprite.viewBox} className={styles.symbol}>
                  {sprite.icons.location}
                </symbol>
                <p className={styles.bodyText}>TV</p>
              </label>
            </input>
            <input className={styles.filtersTypeInput} onClick={handleClick}>
              <label className={styles.contentBox}>
                <symbol viewBox={sprite.viewBox} className={styles.symbol}>
                  {sprite.icons.location}
                </symbol>
                <p className={styles.bodyText}>Shower/WC</p>
              </label>
            </input>
          </div>
        </div>
      </div>
      <div className={styles.checkBoxContainer}>
        <h2 className={styles.h2}>Vehicle type</h2>
        <symbol
          viewBox={sprite.viewBox}
          className={styles.vectorLine}
          src={''}
          alt="line"
        />
        <div className={styles.checkRadioInput}>
          <div className={styles.filtersContainer}>
            <input className={styles.filtersTypeInput} onClick={handleClick}>
              <label className={styles.contentBox}>
                <symbol viewBox={sprite.viewBox} className={styles.symbol}>
                  {sprite.icons.location}
                </symbol>
                <p className={styles.bodyText}>Van</p>
              </label>
            </input>
            <input className={styles.filtersTypeInput} onClick={handleClick}>
              <label className={styles.contentBox}>
                <symbol viewBox={sprite.viewBox} className={styles.symbol}>
                  {sprite.icons.location}
                </symbol>
                <p className={styles.bodyText}>Fully Integrated</p>
              </label>
            </input>
            <input className={styles.filtersTypeInput} onClick={handleClick}>
              <label className={styles.contentBox}>
                <symbol viewBox={sprite.viewBox} className={styles.symbol}>
                  {sprite.icons.location}
                </symbol>
                <p className={styles.bodyText}>Alcove</p>
              </label>
            </input>
          </div>
        </div>
        <button
          className={styles.button}
          type="button"
          text="Search"
          onClick={handleSearch}
        ></button>
      </div>
    </>
  );
};

export default AdvertFilter;
