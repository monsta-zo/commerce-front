import { useEffect, useState } from "react";
import axiosInstance from "../apis";
import OrderedProduct from "../components/OrderedProduct";

const OrderedListPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrderedList = async () => {
      const response = await axiosInstance.get("/orders/seller");

      if (response.status === 200) {
        setOrders(response.data.data.products);
      }
    };

    getOrderedList();
  }, []);

  return (
    <>
      <h1>주문 내역</h1>
      {orders.length > 0 &&
        orders.map((product) => <OrderedProduct product={product} />)}
    </>
  );
};

export default OrderedListPage;
