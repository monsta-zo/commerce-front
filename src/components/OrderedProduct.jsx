import { useState } from "react";
import axiosInstance from "../apis";

const OrderedProduct = (props) => {
  const { product } = props;
  const [status, setStatus] = useState(product.status);

  const handleStatusChange = async (e) => {
    setStatus(e.target.value);

    await axiosInstance.patch(`/orders/products/${product.orderProductId}`, {
      status: e.target.value,
    });
  };

  return (
    <>
      <p>{product.name}</p>
      <p>구매자 : {product.buyerName}</p>
      <p>
        <select value={status} onChange={handleStatusChange}>
          <option value="PENDING">대기중</option>
          <option value="SHIPPED">배송중</option>
          <option value="DELIVERED">배송완료</option>
        </select>
      </p>
    </>
  );
};

export default OrderedProduct;
