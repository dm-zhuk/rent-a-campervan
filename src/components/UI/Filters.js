import styles from 'components/AdvertFilter/index.module.scss';
import ac from 'img/ac.svg';
import automatic from 'img/automatic.svg';
import kitchen from 'img/kitchen.svg';
import tv from 'img/tv.svg';
import shower from 'img/shower.svg';
import van from 'img/van.svg';
import van_fully_intg from 'img/van_fully_intg.svg';
import van_alcove from 'img/van_alcove.svg';

const CheckboxList = [
  {
    name: 'AC',
    label: 'AC',
    icon: <img src={ac} alt="AC" className={styles.symbol32} />,
  },
  {
    name: 'transmission',
    label: 'Automatic',
    icon: (
      <img src={automatic} alt="transmission" className={styles.symbol32} />
    ),
  },
  {
    name: 'kitchen',
    label: 'Kitchen',
    icon: <img src={kitchen} alt="kitchen" className={styles.symbol32} />,
  },
  {
    name: 'TV',
    label: 'TV',
    icon: <img src={tv} alt="TV" className={styles.symbol32} />,
  },
  {
    name: 'shower',
    label: 'Shower/WC',
    icon: <img src={shower} alt="shower/wc" className={styles.symbol32} />,
  },
];

const RadioButtonsList = [
  {
    label: 'Van',
    value: 'panelTruck',
    icon: <img src={van} alt="Van" className={styles.symbol32} />,
  },
  {
    label: 'Fully Integrated',
    value: 'fullyIntegrated',
    icon: (
      <img
        src={van_fully_intg}
        alt="Fully Integrated"
        className={styles.symbol32}
      />
    ),
  },
  {
    label: 'Alcove',
    value: 'alcove',
    icon: <img src={van_alcove} alt="Alcove" className={styles.symbol32} />,
  },
];

const EquipmentCheckBox = ({ name, label, icon }) => {
  return (
    <div className={styles.contentBox}>
      <input
        type="checkbox"
        id={name}
        name={name}
        className={styles.inputHidden}
      />
      <label htmlFor={name} className={styles.checkLabel}>
        {icon}
        {label}
      </label>
    </div>
  );
};

const VecTypeRadioBtn = ({ label, icon, value }) => {
  return (
    <div className={styles.contentBox}>
      <input
        className={styles.inputHidden}
        type="radio"
        id={label}
        name="form"
        value={value}
      />
      <label htmlFor={label} className={styles.checkLabel}>
        {icon}
        {label}
      </label>
    </div>
  );
};

const getFilterParams = elements => {
  const { location, AC, transmission, kitchen, TV, shower, form } = elements;
  const details = {
    AC: AC.checked,
    transmission: transmission.checked,
    kitchen: kitchen.checked,
    TV: TV.checked,
    shower: shower.checked,
  };
  const filterParams = {};
  if (location.value) {
    filterParams.location = location.value;
  }
  if (form.value) {
    filterParams.form = form.value;
  }
  const detailsArr = Object.keys(details).filter(key => details[key] === true);
  if (detailsArr.length > 0) {
    filterParams.details = detailsArr;
  }
  return filterParams;
};

const filterData = (data, filterParams) => {
  return data.filter(item => {
    if (
      filterParams.location &&
      !item.location.toLowerCase().includes(filterParams.location.toLowerCase())
    ) {
      return false;
    }
    if (filterParams.form && item.form !== filterParams.form) {
      return false;
    }
    if (filterParams.details && filterParams.details.length > 0) {
      for (let detail of filterParams.details) {
        if (!item.details[detail]) {
          return false;
        }
      }
    }
    return true;
  });
};

export {
  CheckboxList,
  RadioButtonsList,
  EquipmentCheckBox,
  VecTypeRadioBtn,
  getFilterParams,
  filterData,
};
