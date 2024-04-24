import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../apis";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = async () => {
    const response = await axiosInstance.post("/login", { email, password });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.data.accessToken);

      if (response.data.data.role === "buyer") navigate("/product-list");
      else navigate(`/store/${response.data.data.id}`);
    }
  };

  return (
    <>
      <h1>로그인</h1>
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>로그인</button>
      <Link to="/register?type=Buyer">일반 회원가입</Link>
      <Link to="/register?type=Seller">판매자 회원가입</Link>
    </>
  );
};

export default LoginPage;
