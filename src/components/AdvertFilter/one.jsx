import styles from './index.module.scss';
import sprite from '../../img/sprite.svg';

export const navbar = (
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
          placeholder="City"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(navbar, document.getElementById('root'));

/* 
RENT-A-CAMPER project

Best camper rentals from trusted outdoor company!

Choose from our selection of fully equipped RVs available at our stations across Ukraine.
All our models are perfect for an epic road trip or weekend getaway.
 */
