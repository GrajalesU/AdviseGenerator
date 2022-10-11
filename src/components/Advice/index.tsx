import './styles.css';

import diceSVG from '../../assets/icon-dice.svg';

const Advice = () => {
  return (
    <div className="adviceCard">
      <h1 className="adviceTitle">ADVICE # 117</h1>
      <p className="adviceDescription">{`"It is easy to sit up and take notice, what's difficult is getting up and taking action."`}</p>
      <div className="adviceDivider" />
      <button className="adviceDice">
        <img src={diceSVG} alt="Dice" />
      </button>
    </div>
  );
};

export default Advice;
