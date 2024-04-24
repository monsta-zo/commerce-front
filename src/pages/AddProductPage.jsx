import { useState } from "react";
import axiosInstance from "../apis";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [info, setInfo] = useState();
  const [price, setPrice] = useState();

  const addProductHandler = async () => {
    const response = await axiosInstance.post("/products", {
      name,
      info,
      price,
    });

    if (response.status === 200) {
      navigate(`/product/${response.data.data.id}`, { replace: true });
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
      <button onClick={addProductHandler}>등록</button>
    </>
  );
};

export default AddProductPage;
