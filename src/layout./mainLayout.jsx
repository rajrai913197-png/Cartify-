import { Link , Outlet} from "react-router-dom"
import logo from "/Users/apple/Downloads/Cartify - E-commerce/src/assets/logo.png"
const Mainlayout = ()=>{
    return (
        <>
        <nav>
            <img src={logo} alt="" style={{height:"80px" , width:"130px"}} />
            <div>
        <Link to="/home">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to= "/search">SEARCH</Link>
        <Link to="/wishlist">WISHLIST</Link>
        <Link to="/cart">CART</Link>
            </div>
        <Link to="/login">LOGIN</Link>
        </nav>
        <Outlet />
        </>
       
    )

}
export default Mainlayout;