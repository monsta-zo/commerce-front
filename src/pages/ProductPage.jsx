import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../apis";

const ProductPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axiosInstance.get(`/products/${id}`);

      setProduct(response.data.data);
    };

    getProduct();
  }, []);

  const deleteProduct = async () => {
    const response = await axiosInstance.delete(`/products/${id}`);

    if (response.status === 200) {
      navigate(-1);
    }
  };

  const addToCart = async () => {
    await axiosInstance.post(`/carts/products/${id}`);
  };

  const orderProduct = async () => {
    await axiosInstance.post(`/orders/${id}`);
  };

  return (
    <>
      <h1>상품 정보</h1>
      <p>{product?.name}</p>
      <p>{product?.info}</p>
      <p>{product?.price}원</p>

      {product?.isSeller ? (
        <>
          <Link to={`/product/${product?.id}/update`}>상품 수정</Link>
          <button onClick={deleteProduct}>상품 삭제</button>
        </>
      ) : (
        <>
          <button onClick={addToCart}>장바구니 담기</button>
          <button onClick={orderProduct}>구매하기</button>
        </>
      )}
    </>
  );
};

export default ProductPage;
