import Button from './Button';

const Control = (props) => {
  return (
    <>
      <Button onClick={props.onStart}>Start</Button>
      <Button onClick={props.onStop}>Stop</Button>
      <Button onClick={props.onReset}>Reset</Button>
      <Button onClick={props.onLap}>lap</Button>
    </>
  );
};

export default Control;
