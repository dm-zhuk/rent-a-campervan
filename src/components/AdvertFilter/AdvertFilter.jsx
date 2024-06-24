// import { filteredAdverts } from 'redux/advert/advertSlice';
import React, { useContext } from 'react';
import styles from './index.module.scss';
import toast from 'react-hot-toast';
import Button from 'components/UI/Button';
import sprite from '../../img/sprite.svg';
import { PaginationContext } from '../../helpers/PaginationContext';
import {
  CheckboxList,
  RadioButtonsList,
  EquipmentCheckBox,
  VecTypeRadioBtn,
  getFilterParams,
  filterData,
} from 'components/UI/Filters';

const AdvertFilter = ({ adverts, setFilteredAdverts }) => {
  // const { resetPage } = useContext(PaginationContext);

  const handleSubmit = e => {
    e.preventDefault();
    const filterParams = getFilterParams(e.target);
    let filteredData = filterData(adverts, filterParams);
    // resetPage();

    setFilteredAdverts(filteredData);
    toast.success('Your filter applied');
    resetFilterParams(e.target);
  };
  const resetFilterParams = form => {
    form.reset();
  };

  return (
    <>
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <div className={styles.textInputContainer}>
          <label className={styles.label} htmlFor="location">
            Location
          </label>
          <input
            className={styles.input}
            type="text"
            id="location"
            placeholder="City"
          />
          <svg className={styles.symbol18}>
            <use xlinkHref={`${sprite}#location`}></use>
          </svg>
        </div>
        <div className={styles.filterSection}>
          <label className={styles.label} htmlFor="details">
            Filters
          </label>
          <div className={styles.checkBoxContainer}>
            <h2 className={styles.h2}>Vehicle equipment</h2>
            <div className={styles.list}>
              {EquipmentCheckBox.map(({ name, label, icon }) => (
                <CheckboxList
                  key={label}
                  name={name}
                  label={label} // see if omit
                  icon={icon}
                />
              ))}
            </div>
            <h2 className={styles.h2}>Vehicle Type</h2>
            <div className={styles.list}>
              {VecTypeRadioBtn.map(({ value, label, icon }) => (
                <RadioButtonsList
                  key={label}
                  value={value}
                  label={label} // see if omit
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </div>
        <Button type="submit" text="Search" />
      </form>
    </>
  );
};

export default AdvertFilter;
