import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const {cart} =useSelector((state)=>state)
  return(
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="h-[30px] mt-3 w-[100px]" alt="" />
          </div>

        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          
            <NavLink to="/Cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl"/>
              {
                cart.length >0 &&
                  <div className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</div>
              }
            </div>
            </NavLink>
          
          
        </div>
      </nav>
    </div>
    
    );
};

export default Navbar;
