const Counter = ({ counter, onPlus, onMinus }) => {
  return (
    <div>
      <button onClick={onPlus} className="me-4 btn btn-success">
        +
      </button>
      {counter}
      <button onClick={onMinus} className="ms-4 btn btn-danger">
        -
      </button>
      <br /> <br />
    </div>
  );
};

export default Counter;
