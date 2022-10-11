import './styles.css';

import { useEffect, useState } from 'react';

import diceSVG from '../../assets/icon-dice.svg';
import Loader from '../Loader';

const Advice = () => {
  const [advice, setAdvice] = useState({
    id: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then(({ slip }) => {
        setAdvice({
          id: slip.id,
          description: slip.advice,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAdvice = () => {
    setLoading(true);
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then(({ slip }) => {
        setAdvice({
          id: slip.id,
          description: slip.advice,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="adviceCard">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="adviceTitle">ADVICE # {advice.id}</h1>
          <p className="adviceDescription">{`"${advice.description}"`}</p>
        </>
      )}
      <div className="adviceDivider" />
      <button className="adviceDice" onClick={handleAdvice}>
        <img src={diceSVG} alt="Dice" />
      </button>
    </div>
  );
};

export default Advice;
