import Mainlayout from "./layout./mainLayout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Search from "./component/search";
import Login from "./pages/login";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
const App =()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainlayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="search" element={<Search />} />
      <Route path="login" element={<Login />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;