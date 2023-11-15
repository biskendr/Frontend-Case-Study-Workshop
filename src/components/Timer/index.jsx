import { useState, useRef } from 'react';
import './Timer.css';
import Modal from '../Modal';

export default function Timer() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(1 * 5);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setIsRunning(true);
      setTime((prevTime) => {
        if (prevTime > 0) return prevTime - 1;

        resetTimer();
        return;
      });
    }, 1000);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(1 * 5);
    setIsRunning(false);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  }

  const openModal = () => {
    setIsOpenModal(true);
  };

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');

  const seconds = (time - minutes * 60).toString().padStart(2, '0');

  return (
    <div>
      <div className="timer" onClick={openModal}>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      {!isRunning ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={stopTimer}>Pause</button>
      )}
      <button onClick={resetTimer}>Reset</button>

      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} setTime={setTime} />
      )}
    </div>
  );
}
