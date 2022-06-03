import { useEffect, useState } from 'react';

import styles from './Content.module.css';

const Content = (props) => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milliSecond, setMilliSecond] = useState(0);

  const [timer, setTimer] = useState();

  // START
  useEffect(() => {
    // start 되지 않았으면 동작 X
    if (!props.isStart) return;

    // 0.01초마다 millisecond 1씩 증가
    const timer = setInterval(() => {
      setMilliSecond((prevMilliSecond) => prevMilliSecond + 1);
    }, 10);

    setTimer(timer);

    // 클린업 함수 -> 타이머 중지
    return () => {
      clearInterval(timer);
    };
  }, [props.isStart]);

  // LAP
  useEffect(() => {
    if (!props.isLap) return;

    const time = `${convertNumber(minute)}:${convertNumber(
      second
    )}.${convertNumber(milliSecond)}`;

    props.onAddHistory(time);
  }, [props.isLap]);

  // RESET
  useEffect(() => {
    if (!props.isReset) return;

    setMinute(0);
    setSecond(0);
    setMilliSecond(0);
  }, [props.isReset]);

  // 시간 증가
  useEffect(() => {
    if (milliSecond === 100) {
      setMilliSecond(0);
      setSecond((prevSecond) => prevSecond + 1);
    }
    if (second === 60) {
      setSecond(0);
      setMinute((prevMinute) => prevMinute + 1);
    }
    if (minute === 60) {
      clearInterval(timer);
    }
  }, [milliSecond, second, minute, timer]);

  // 시간 포맷 두자리수 변환 ex) 2 -> 02
  const convertNumber = (number) => {
    return String(number).padStart(2, '0');
  };

  return (
    <>
      <h1 className={styles.heading}>Stopwatch</h1>
      <h2 className={styles.heading}>Vanilla JavaScript Stopwatch</h2>
      <p className={styles.time}>
        <span>{convertNumber(minute)}</span>:
        <span>{convertNumber(second)}</span>.
        <span>{convertNumber(milliSecond)}</span>
      </p>
    </>
  );
};

export default Content;
