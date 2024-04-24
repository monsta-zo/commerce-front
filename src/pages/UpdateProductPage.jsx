import { useState } from "react";
import axiosInstance from "../apis";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [info, setInfo] = useState();
  const [price, setPrice] = useState();

  const addProductHandler = async () => {
    const response = await axiosInstance.patch(`/products/${id}`, {
      name,
      info,
      price,
    });

    if (response.status === 200) {
      navigate(`/product/${id}`);
    }
  };

  return (
    <>
      <h1>상품 등록</h1>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="설명"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
      <input
        type="number"
        placeholder="가격"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addProductHandler}>수정</button>
    </>
  );
};

export default UpdateProductPage;
