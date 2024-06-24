import styles from 'components/AdvertFilter/index.module.scss';
import sprite from '../../img/sprite.svg';

const CheckboxList = [
  {
    name: 'AC',
    label: 'AC',
    icon: (
      <svg className={styles.symbol32}>
        <use xlinkHref={`${sprite}#ac`}></use>
      </svg>
    ),
  },
  {
    name: 'transmission',
    label: 'Automatic',
    icon: (
      <svg className={styles.symbol32}>
        <use xlinkHref={`${sprite}#transmission`}></use>
      </svg>
    ),
  },
  {
    name: 'kitchen',
    label: 'Kitchen',
    icon: (
      <svg className={styles.symbol32}>
        <use xlinkHref={`${sprite}#kitchen`}></use>
      </svg>
    ),
  },
  {
    name: 'TV',
    label: 'TV',
    icon: (
      <svg className={styles.symbol32}>
        <use xlinkHref={`${sprite}#tv`}></use>
      </svg>
    ),
  },
  {
    name: 'shower',
    label: 'Shower/WC',
    icon: (
      <svg className={styles.symbol32}>
        <use xlinkHref={`${sprite}#shower`}></use>
      </svg>
    ),
  },
];

const RadioButtonsList = [
  {
    label: 'Van',
    value: 'panelTruck',
    icon: (
      <svg className={styles.symbol40}>
        <use xlinkHref={`${sprite}#van`}></use>
      </svg>
    ),
  },
  {
    label: 'Fully Integrated',
    value: 'fullyIntegrated',
    icon: (
      <svg className={styles.symbol40}>
        <use xlinkHref={`${sprite}#fullyIntegrated`}></use>
      </svg>
    ),
  },
  {
    label: 'Alcove',
    value: 'alcove',
    icon: (
      <svg className={styles.symbol40}>
        <use xlinkHref={`${sprite}#alcove`}></use>
      </svg>
    ),
  },
];

const EquipmentCheckBox = ({ name, label, icon }) => {
  return (
    <div className={styles.contentBox}>
      <input
        type="checkbox"
        id={name}
        name={name}
        className={styles.filtersTypeInput}
      />
      <label htmlFor={name} className={styles.checkRadioLabel}>
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
        className={styles.filtersTypeInput}
        type="radio"
        id={label}
        name="form"
        value={value}
      />
      <label htmlFor={label} className={styles.checkRadioLabel}>
        {icon}
        {label}
      </label>
    </div>
  );
};

const getFilterParams = elements => {
  const { location, AC, automatic, kitchen, TV, shower, form } = elements;
  const details = {
    AC: AC.checked,
    automatic: automatic.checked,
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
