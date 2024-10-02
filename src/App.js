import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsAll from "./pages/ProductsAll/ProductsAll.jsx";
import ProductSingle from "./pages/ProductSingle/ProductSingle.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Header from "./Components/Header/Header.jsx";
import { useContext } from "react";
import { UserContext } from "./pages/ContextAPIs/authUserContext.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart/Cart.jsx";
import Wishlist from "./pages/Wishlist/Wishlist.jsx";
function App() {
  // const { token } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/:id" element={<ProductSingle />} />
        {/* {token ? <Route path="/" element={<ProductsAll />} /> : ""} */}
        <Route path="/" element={<ProductsAll />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
