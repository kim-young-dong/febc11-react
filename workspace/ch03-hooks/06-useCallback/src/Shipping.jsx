import { useCallback } from "react";
import PropTypes from "prop-types";

Shipping.propTypes = {
  fees: PropTypes.number.isRequired,
  handlePayment: PropTypes.func.isRequired,
};

function Shipping({ fees, handlePayment }) {
  const handleClick = useCallback(() => {
    handlePayment();
  }, [handlePayment]);
  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비: {fees.toLocaleString()}원<br />
      </div>
      <br />
      <button type="button" onClick={handleClick}>
        결제
      </button>
    </>
  );
}

export default Shipping;
