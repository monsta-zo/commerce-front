import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../apis";

const StorePage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axiosInstance.get(`store/${id}/products`);

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
      <h1>Store</h1>
      <h1>상품 목록</h1>
      {productList.length > 0 &&
        productList.map((product) => (
          <Link to={`/product/${product.id}`}>
            <p>{product.name}</p>
            <p>{product.info}</p>
            <p>{product.price}원</p>
          </Link>
        ))}
      <Link to="/store/add">상품 등록하기</Link>
      <Link to="/ordered">주문 내역</Link>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};

export default StorePage;
