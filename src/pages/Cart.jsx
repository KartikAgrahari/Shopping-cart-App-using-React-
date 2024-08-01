import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div className="flex justify-center mt-6">
      {
        cart.length > 0 ? 
        (<div className="flex justify-between gap-4 mx-auto">
          <div className="w-full">
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>
          <div className="flex flex-col ">
            <div className="mt-16">
              <div className="text-xl font-bold text-green-700 ">Your Cart</div>
              <div className="text-4xl font-bold text-green-700 mb-4">Summary</div>
              <p className="font-bold text-gray-600">
                <span>
                Total Items: {cart.length}
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center gap-y-2">
              <p className="text-2xl font-semibold">Total Amount: <span className="font-bold"> ${totalAmount.toFixed(2)}</span></p>
              <button className="flex items-center justify-center border w-[400px] rounded-md bg-green-700 text-white font-bold h-[50px]">Checkout Now</button>
            </div>
          </div>


        </div>):
        (<div className="flex flex-col h-full w-full justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-500">Cart is Empty!</h2>
          <Link to={"/"}>
            <button className="flex border w-[250px] items-center justify-center h-[50px] mt-3 rounded-md bg-green-700 text-white font-bold hover:bg-green-800 transition duration-200 ease-in">
              Shop Now
            </button>  
          </Link> 
        </div>)
      }
    </div>
  );
};

export default Cart;
