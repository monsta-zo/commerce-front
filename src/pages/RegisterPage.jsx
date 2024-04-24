import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../apis";
import { useState } from "react";

const RegisterPage = () => {
  const [param, setParam] = useSearchParams();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const type = param.get("type");

  const navigate = useNavigate();

  const registerHandler = async () => {
    const response = await axiosInstance.post(`/register?type=${type}`, {
      email,
      name,
      password,
      passwordConfirm,
    });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.data.accessToken);
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.data.accessToken}`;

      if (response.data.data.role === "buyer") navigate("/product-list");
      else navigate(`/store/${response.data.data.id}`);
    }
  };

  return (
    <>
      <h1>회원가입</h1>
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button onClick={registerHandler}>회원가입</button>
    </>
  );
};

export default RegisterPage;
