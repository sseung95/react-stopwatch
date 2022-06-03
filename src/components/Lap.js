const Lap = (props) => {
  return (
    <ul>
      {props.history.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Lap;
