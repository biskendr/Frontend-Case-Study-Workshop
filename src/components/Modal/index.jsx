import { useState } from 'react';
import './Modal.css';

export default function Modal({ setTime, setIsOpenModal }) {
  const [seconds, setSeconds] = useState(1);
  const [minute, setMinute] = useState(1);

  const closeModal = () => {
    setIsOpenModal(false);
  };
  const onSave = (e) => {
    e.preventDefault();
    setTime(parseInt(minute) * 60 + parseInt(seconds));
    setIsOpenModal(false);
  };

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <form onSubmit={onSave}>
          <label htmlFor="minute">Minute</label>
          <input
            type="number"
            name="minute"
            max={60}
            min={1}
            onChange={(e) => setMinute(e.target.value)}
          />
          <label htmlFor="seconds">Seconds</label>
          <input
            type="number"
            name="seconds"
            max={60}
            min={1}
            onChange={(e) => setSeconds(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
        <button className="close" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}
