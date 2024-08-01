import {toast} from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return(
    <div className="p-5 max-w-[600px] ">
      <div className="flex gap-4 ">
        <div className="min-w-[150px] h-[150px]">
            <img src={item.image} className="h-full w-full"/>
        </div>
        
        <div className="">
          <h1 className="text-lg font-bold text-gray-700">{item.title}</h1>
          <h1 className="text-sm font-semibold w-full text-gray-600 mt-3 mb-6">{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
          <div className="flex justify-between">
            <p className="text-xl text-green-600 font-bold">${item.price}</p>
            <div className="w-[30px] justify-center rounded-[200%] flex items-center mr-4 bg-red-200 "
            onClick={removeFromCart}>
              <MdDelete  className="text-red-700 "></MdDelete >
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] mt-3  bg-gray-500 rounded-md"></div>
    </div>
  );
};

export default CartItem;
