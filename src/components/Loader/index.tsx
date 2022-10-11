import './styles.css';
const Loader = () => {
  return (
    <div className="loaderContainer">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
