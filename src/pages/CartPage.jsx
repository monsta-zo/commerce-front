import { useEffect, useState } from "react";
import axiosInstance from "../apis";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCarts = async () => {
      const response = await axiosInstance.get("/carts");

      if (response.status === 200) {
        setCarts(response.data.data.products);
      }
    };

    getCarts();
  }, []);

  const orderCart = async () => {
    const response = await axiosInstance.post("/orders/carts");

    if (response.status === 200) {
      // 주문 완료
    }
  };

  return (
    <>
      <h1>장바구니</h1>
      {carts.length > 0 &&
        carts.map((product) => (
          <Link to={`/product/${product.id}`}>
            <p>{product.name}</p>
            <p>{product.info}</p>
            <p>{product.price}원</p>
          </Link>
        ))}
      <button onClick={orderCart}>주문하기</button>
    </>
  );
};

export default CartPage;
