
import { setState, useEffect,useRef } from 'react';
import styles from 'components/AdvertFilter/index.module.scss';

handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { filtered } = this.state;
    console.log(
      `checked: ${filtered}`
    );

const CheckBox = ({ name, svg, label }) => {
  return (
    <div className={styles.checkRadioInput}>
      <div className={styles.filtersContainer}>
        <input
          className={styles.filtersTypeInput}
          type="checkbox"
          checked={filtered}
          onChange={this.handleChange}
          id={name}
        />
      </div>
    </div>
  );
};

export default CheckBox;


  return (
    <div className={styles.inputBar}>
      <input
        id={iconName}
        type="checkbox"
        name={iconName}
        className={`${styles.checkbox} ${styles.visuallyHidden}`}
        ref={inputRef}
      />
      <label
        key={iconName}
        className={styles.contentBox}
        htmlFor={iconName}
        tabIndex="0"
        ref={labelRef}
      >
        <svg className={styles.symbol}>
          <use xlinkHref={`${sprite}#${iconName}`}></use>
        </svg>
        {label}
      </label>
    </div>
  );

        /* 
        <label className={styles.checkRadioLabel} htmlFor={name}>
          {svg}
          {label}
        </label>
       */
    
    // sample to check:
    
/*       render() {
    const { login, email, password, agreed } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
    }
 */