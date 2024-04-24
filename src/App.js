import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import StorePage from "./pages/StorePage";
import AddProductPage from "./pages/AddProductPage";
import ProductPage from "./pages/ProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import CartPage from "./pages/CartPage";
import OrderListPage from "./pages/OrderListPage";
import OrderedListPage from "./pages/OrderedListPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/product/:id/update" element={<UpdateProductPage />} />
        <Route path="/store/:id" element={<StorePage />} />
        <Route path="/store/add" element={<AddProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderListPage />} />
        <Route path="/ordered" element={<OrderedListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
