import { memo } from "react";
import PropTypes from "prop-types";

const Product = memo(function Product({ product }) {
  console.log("Product2 렌더링");

  return (
    <>
      <h2>상품 설명</h2>
      <p>상품명: {product.name}</p>
      <p>가격: {product.price.toLocaleString()}원</p>
      <p>상품 설명</p>
      <div>
        <img src={`https://11.fesp.shop${product.mainImage}`} width="600" />
        <p>{product.content}</p>
      </div>
    </>
  );
});

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mainImage: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default Product;
