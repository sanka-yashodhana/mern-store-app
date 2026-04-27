import React, { useState, useContext } from "react";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    products,
  } = useContext(ShopContext);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items),
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount(),
      };

      switch (method) {
        //API Calls for COD
        case "cod": {
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } },
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        case "stripe": {
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } },
          );
          if(responseStripe.data.success){
            const {session_url} = responseStripe.data
            window.location.replace(session_url)
          } else{
            toast.error(responseStripe.data.message)
          }
          break
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col lg:flex-row justify-between gap-12 pt-10 sm:pt-16 min-h-[80vh] border-t-4 border-black mb-24"
    >
      
      <div className="flex flex-col gap-6 w-full lg:max-w-[600px]">
        
      
        <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
                <p className="w-8 md:w-12 h-[2px] bg-black"></p>
                <p className="font-bold text-xs tracking-[0.3em] text-black uppercase">Drop Location</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-black">
                Delivery <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200">Info</span>
            </h2>
        </div>

        
        <div className="flex gap-4">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border-2 border-black bg-[#FAFAFA] py-3 px-4 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border-2 border-black bg-[#FAFAFA] py-3 px-4 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all"
            type="text"
            placeholder="Last Name"
          />
        </div>
        
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border-2 border-black bg-[#FAFAFA] py-3 px-4 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all"
          type="email"
          placeholder="Email Address"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border-2 border-black bg-[#FAFAFA] py-3 px-4 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all"
          type="text"
          placeholder="Street Address"
        />
        
        <div className="flex gap-4">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border-2 border-black bg-[#FAFAFA] py-3 px-4 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all"
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border-2 border-black bg-[#FAFAFA] py-3 px-4 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all"
            type="text"
            placeholder="State / Province"
          />
        </div>
        
        <div className="flex gap-4">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border-2 border-black bg-[#FAFAFA] py-3 px-4 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all"
            type="number"
            placeholder="Zip / Postal Code"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border-2 border-black bg-[#FAFAFA] py-3 px-4 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all"
            type="text"
            placeholder="Country"
          />
        </div>
        
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border-2 border-black bg-[#FAFAFA] py-3 px-4 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all"
          type="number"
          placeholder="Phone Number"
        />
      </div>

      
      <div className="w-full lg:max-w-[450px]">
        
        
        <div className="border-2 border-black p-6 bg-[#FAFAFA] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <CartTotal />
        </div>
        
        
        <div>
          <h2 className="text-xl font-black uppercase tracking-[0.1em] text-black mb-6 border-b-2 border-black pb-2">
            Payment Method
          </h2>
          
          <div className="flex gap-4 flex-col sm:flex-row">
            
          
            <div
              onClick={() => setMethod("stripe")}
              className={`flex-1 flex items-center justify-center gap-3 border-2 border-black p-4 cursor-pointer transition-all duration-300 ${method === "stripe" ? "bg-black text-white shadow-none translate-x-1 translate-y-1" : "bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50"}`}
            >
              <div className={`w-4 h-4 border-2 flex shrink-0 ${method === "stripe" ? "border-white bg-white" : "border-black bg-transparent"}`}></div>
              <img src={assets.stripe_logo} alt="stripe" className={`h-5 ${method === "stripe" ? "invert opacity-90" : ""}`} />
            </div>
            
            
            <div
              onClick={() => setMethod("cod")}
              className={`flex-1 flex items-center justify-center gap-3 border-2 border-black p-4 cursor-pointer transition-all duration-300 ${method === "cod" ? "bg-black text-white shadow-none translate-x-1 translate-y-1" : "bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50"}`}
            >
              <div className={`w-4 h-4 border-2 flex shrink-0 ${method === "cod" ? "border-white bg-white" : "border-black bg-transparent"}`}></div>
              <p className={`text-xs font-black uppercase tracking-widest ${method === "cod" ? "text-white" : "text-black"}`}>
                Cash On Delivery
              </p>
            </div>
          </div>

          
          <div className="w-full mt-12">
            <button
              type="submit"
              className="w-full bg-black text-white border-2 border-black font-black uppercase tracking-[0.2em] px-8 py-5 text-sm sm:text-base transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(200,200,200,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-white hover:text-black"
            >
              Confirm Order
            </button>
          </div>
          
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;