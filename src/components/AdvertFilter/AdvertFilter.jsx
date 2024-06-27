import React, { useContext } from 'react';
import styles from './index.module.scss';
import location from 'img/location.svg';
import toast from 'react-hot-toast';
import Button from 'components/UI/Button';
import { PaginationContext } from '../../service/PaginationContext';
import {
  CheckboxList,
  RadioButtonsList,
  EquipmentCheckBox,
  VecTypeRadioBtn,
  getFilterParams,
  filterData,
} from 'components/UI/Filters';

const AdvertFilter = ({ adverts, setFilteredAdverts }) => {
  //   const { resetPage } = useContext(PaginationContext);

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
          <div className={styles.inputBar}>
            <img src={location} alt="location" className={styles.symbol18} />
            <input
              type="search"
              id="location"
              autoComplete="off"
              placeholder="City"
            />
          </div>
        </div>
        <div className={styles.filterSection}>
          <p>Filters</p>
          <div className={styles.checkBoxContainer}>
            <h2 className={styles.h2}>Vehicle equipment</h2>
            <div className={styles.btnsWrapper}>
              {CheckboxList.map(item => (
                <EquipmentCheckBox
                  key={item.name}
                  name={item.name}
                  label={item.label}
                  icon={item.icon}
                />
              ))}
            </div>
            <h2 className={styles.h2}>Vehicle Type</h2>
            <div className={styles.btnsWrapper}>
              {RadioButtonsList.map(({ value, label, icon }) => (
                <VecTypeRadioBtn
                  key={label}
                  value={value}
                  label={label}
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
