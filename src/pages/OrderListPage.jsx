import { useEffect, useState } from "react";
import axiosInstance from "../apis";

const OrderListPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axiosInstance.get("/orders/buyer");

      if (response.status === 200) {
        setOrders(response.data.data.orders);
      }
    };

    getOrders();
  }, []);

  return (
    <>
      <h1>주문 내역</h1>
      {orders.length > 0 &&
        orders.map((order) => (
          <>
            <p>주문 번호 : {order.orderId}</p>
            {order.products.map((product) => (
              <>
                <p>{product.name}</p>
                <p>{product.info}</p>
                <p>{product.price}원</p>
                <p>
                  {product.status === "PENDING"
                    ? "대기중"
                    : product.status === "SHIPPED"
                    ? "배송중"
                    : "배송완료"}
                </p>
              </>
            ))}
          </>
        ))}
    </>
  );
};

export default OrderListPage;
