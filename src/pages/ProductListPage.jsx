import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../apis";

const ProductListPage = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axiosInstance.get("/products");

      if (response.status === 200) {
        setProductList(response.data.data.products);
      }
    };

    getProducts();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <h1>전체 상품 조회</h1>
      {productList.length > 0 &&
        productList.map((product) => (
          <Link to={`/product/${product.id}`}>
            <p>{product.name}</p>
            <p>{product.info}</p>
            <p>{product.price}원</p>
          </Link>
        ))}
      <Link to="/cart">장바구니</Link>
      <Link to="/order">주문 내역</Link>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};

export default ProductListPage;
