const Control = (props) => {
  return (
    <>
      <button onClick={props.onStart}>Start</button>
      <button onClick={props.onStop}>Stop</button>
      <button onClick={props.onReset}>Reset</button>
      <button onClick={props.onLap}>lap</button>
    </>
  );
};

export default Control;
