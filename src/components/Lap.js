import styles from './Lap.module.css';

const Lap = (props) => {
  return (
    <ul>
      {props.history.map((item, index) => (
        <li className={styles.lap} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Lap;
