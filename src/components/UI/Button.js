import styles from 'components/AdvertFilter/index.module.scss';

const Button = ({ text, onClick, ...props }) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default Button;
