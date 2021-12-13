import Counter from "./counter";
import PropTypes from "prop-types";

const Product = ({
  product: { id, price, title, body, category, amount, src },
  onDelete,
  onPlus,
  onMinus,
  onCart,
}) => {
  return (
    <div className="col-12 col-xl-3 col-md-6  text-center  ">
      <div className="card-deck d-flex justify-content-center mb-3">
        <div className="card ">
          <img className="card-img-top" src={src} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
            <span>{category}</span>
            <span className="ms-3">{price} $ </span>
            <br />

            <div className="text-center mt-4">
              <Counter counter={amount} onMinus={onMinus} onPlus={onPlus} />
            </div>
            <br />

            <button className="btn btn-primary float-start" onClick={onCart}>
              Add Cart
            </button>

            <button className="btn btn-danger float-end" onClick={onDelete}>
              Delete
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Product;
