import diceSVG from '../assets/icon-dice.svg';

const Advice = () => {
  return (
    <div>
      <h1>ADVISE # 117</h1>
      <p>{`"It is easy to sit up and take notice, what's difficult is getting up and taking action."`}</p>
      <div className="adviseDivider" />
      <button>
        <img src={diceSVG} alt="Dice" />
      </button>
    </div>
  );
};

export default Advice;
