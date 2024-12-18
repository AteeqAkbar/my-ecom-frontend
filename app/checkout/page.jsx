"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../store/cartSlice";
import ProductSlider from "../components/Swiper/ProductSlider";
import done from "../image/icons/done.png";
import star from "../image/icons/star.png";
import starhalf from "../image/icons/halfstar.png";
import Image from "next/image";
import { generateImageUrl } from "../utils/helperFun";
import { postOrder, register } from "../services/api";
import { setUserToken } from "../store/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function ProductItem({ item }) {
  return (
    <div className="pro-items p-[15px] bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px] flex mb-[24px] max-[420px]:flex-col">
      <div className="image mr-[15px] max-[420px]:mr-[0] max-[420px]:mb-[15px]">
        <Image
          src={
            generateImageUrl(item?.images?.[0]?.url) ||
            "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg"
          }
          alt="new-product-1"
          width={100}
          height={100}
          className="max-w-max w-[100px] h-[100px] border-[1px] border-solid border-[#eee] rounded-[20px] max-[1399px]:h-[80px] max-[1399px]:w-[80px]"
        />
      </div>
      <div className="items-contact">
        <h4 className="text-[16px]">
          <a className="font-Poppins tracking-[0.03rem] text-[15px] font-medium leading-[18px] text-[#3d4750]">
            {item.name || " Ground Nuts Oil Pack"}
          </a>
        </h4>
        <div className="inner-price flex items-center justify-left mb-[4px]">
          <span className="new-price font-Poppins text-[#3d4750] font-normal leading-[26px] tracking-[0.02rem] text-[15px]">
            {item?.price || "0.00"}
          </span>
          <span className="old-price ml-[10px] font-Poppins text-[#777] font-normal leading-[26px] tracking-[0.02rem] text-[15px] ">
            {" x "} {item?.quantity}
          </span>
        </div>
        <span className="bb-pro-rating flex">
          {[...Array(4)].map((_, i) => (
            <Image
              key={i}
              src={star}
              height={24}
              width={24}
              alt={"star" + i}
              className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
            ></Image>
          ))}
          <Image
            key={Math.random() + 100}
            src={starhalf}
            alt={"star5"}
            height={24}
            width={24}
            className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
          ></Image>
        </span>
      </div>
    </div>
  );
}

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  console.log(auth, "auth");
  const dispatch = useDispatch();
  const [totals, setTotals] = useState(0);
  useEffect(() => {
    setFormValues((value) => {
      return {
        ...value,
        fullName: auth?.user?.username,
        email: auth?.user?.email,
      };
    });
  }, [auth]);
  const [formValues, setFormValues] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    comment: "",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setTotals(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  const validate = () => {
    const errors = {};
    if (!formValues.fullName) errors.fullName = "Full Name is required";
    if (!formValues.phone) errors.phone = "Phone Number is required";
    if (!formValues.address) errors.address = "Address is required";
    if (!formValues.email) {
      errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email Address is invalid";
    }
    if (auth?.token) {
      return errors;
    } else {
      if (!formValues.password) errors.password = "Password is required";
      return errors;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors);
    let prodcutIds = [];
    cartItems.forEach((item) => {
      prodcutIds.push(Number(item.id));
    });

    if (auth?.token) {
      if (Object.keys(errors).length === 0) {
        const data = {
          name: formValues.fullName,
          phone: formValues.phone,
          address: formValues.address,
          email: formValues.email,
          totalPrice: totals,
          comment: formValues.comment,
          orderProducts: cartItems,
          users_permissions_user: auth?.user?.id,
          products: prodcutIds,
        };

        try {
          const response = await postOrder(data);
          toast("Order received! We’re processing it now.");
          console.log("Order response:", response);
          // Reset the cart
          dispatch(clearCart());
          //   // Reset form
          setFormValues({
            fullName: "",
            phone: "",
            address: "",
            email: "",
            password: "",
            comment: "",
          });
          router.push("/");
        } catch (error) {
          toast.error(error.message);
          console.error("There was an error adding items to the cart!", error);
        }

        // Reset form
        setFormValues({
          fullName: "",
          phone: "",
          address: "",
          email: "",
          password: "",
          comment: "",
        });
      }
      // Add items to the cart using the API
    } else {
      try {
        const data = await register({
          username: formValues.fullName,
          password: formValues.password,
          email: formValues.email,
        });
        dispatch(setUserToken({ token: data.jwt, user: data.user }));
        const data1 = {
          name: formValues.fullName,
          phone: formValues.phone,
          address: formValues.address,
          email: formValues.email,
          totalPrice: totals,
          comment: formValues.comment,
          orderProducts: cartItems,
          users_permissions_user: data?.user?.id,
          products: prodcutIds,
        };

        const response = await postOrder(data1);
        console.log("Order response:", response);
        toast("Order received! We’re processing it now.");
        // Reset the cart
        dispatch(clearCart());
        //   // Reset form
        setFormValues({
          fullName: "",
          phone: "",
          address: "",
          email: "",
          password: "",
          comment: "",
        });
        router.push("/");
      } catch (error) {
        toast.error(error.message);
        console.error("There was an error adding items to the cart!", error);
      }
    }

    // const errors = validate();
    // setFormErrors(errors);
    // if (Object.keys(errors).length === 0) {
    //   // Proceed with form submission
    //   alert("Form submitted successfully!");

    //   // Reset form
    //   setFormValues({
    //     fullName: "",
    //     phone: "",
    //     address: "",
    //     email: "",
    //     password: "",
    //     comment: "",
    //   });
    // }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  return (
    <>
      <Breadcrumb title="Checkout" />
      <section className="section-checkout py-[50px] max-[1199px]:py-[35px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full mb-[-24px]">
            <div className="min-[992px]:w-[33.33%] w-full  px-[12px] mb-[24px]">
              <div className="bb-checkout-sidebar mb-[-24px]">
                <div className="checkout-items border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[20px] rounded-[20px] mb-[24px] aos-init aos-animate">
                  <div className="sub-title mb-[12px]">
                    <h4 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]">
                      Summary
                    </h4>
                  </div>
                  <div className="checkout-summary mb-[20px] border-b-[1px] border-solid border-[#eee]">
                    <ul className="mb-[20px]">
                      <li className="flex justify-between leading-[28px] mb-[8px]">
                        <span className="left-item font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">
                          Sub-total
                        </span>
                        <span className="font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">
                          {totals || "0.00"}
                        </span>
                      </li>
                      <li className="flex justify-between leading-[28px] mb-[8px]">
                        <span className="left-item font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">
                          Delivery Charges
                        </span>
                        <span className="font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">
                          {"250"}
                        </span>
                      </li>
                      <li className="flex justify-between leading-[28px] mb-[8px]">
                        <span className="left-item font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">
                          Total
                        </span>
                        <span className="font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">
                          {totals ? totals + 250 : "0.00"}
                        </span>
                      </li>
                      <li className="flex justify-between leading-[28px] mb-[8px]">
                        <span className="left-item font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">
                          Coupon Discount
                        </span>
                        <span className="font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">
                          <a
                            href="javascript:void(0)"
                            className="apply drop-coupon font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#ff0000]"
                          >
                            Apply Coupon
                          </a>
                        </span>
                      </li>
                      <li className="flex justify-between leading-[28px]">
                        <div className="coupon-down-box w-full">
                          <form className="relative">
                            <input
                              className="bb-coupon w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] rounded-[10px]"
                              type="text"
                              placeholder="Enter Your coupon Code"
                              name="bb-coupon"
                            />
                            <button className="bb-btn-2 transition-all duration-[0.3s] ease-in-out my-[8px] mr-[8px] flex justify-center items-center absolute right-[0] top-[0] bottom-[0] font-Poppins leading-[28px] tracking-[0.03rem] py-[2px] px-[12px] text-[13px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]">
                              Apply
                            </button>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bb-checkout-pro mb-[-24px]">
                    {cartItems?.length > 0 ? (
                      <>
                        {cartItems.map((item) => (
                          <ProductItem key={item.id} item={item} />
                        ))}
                      </>
                    ) : (
                      <div className="title font-medium text-[#777] p-[.5rem] pb-10">
                        Your Cart is empty!
                      </div>
                    )}
                  </div>
                </div>
                <div className="checkout-items border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[20px] rounded-[20px] mb-[24px] aos-init aos-animate">
                  <div className="sub-title mb-[12px]">
                    <h4 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]">
                      Payment Method
                    </h4>
                  </div>
                  <div className="checkout-method mb-[24px]">
                    <span className="details font-Poppins leading-[26px] tracking-[0.02rem] text-[15px] font-medium text-[#686e7d]">
                      Please select the preferred Payment method to use on this
                      order.
                    </span>
                    <div className="bb-del-option mt-[12px] flex max-[480px]:flex-col">
                      <div className="inner-del w-[50%] max-[480px]:w-full">
                        <div className="flex items-center gap-2">
                          <Image src={done} alt="done" className="w-8" />
                          <div className="text-[#686e7d]">Cash On Delivery</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-order">
                    <h5 className="font-quicksand tracking-[0.03rem] leading-[1.2] mb-[12px] text-[15px] font-medium text-[#686e7d]">
                      Add Comments About Your Order
                    </h5>
                    <textarea
                      name="comment"
                      value={formValues.comment}
                      onChange={handleInputChange}
                      placeholder="Comments"
                      className="w-full h-[100px] p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] rounded-[10px]"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-[992px]:w-[66.66%] w-full px-[12px] mb-[24px]">
              <div className="bb-checkout-contact border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[20px] rounded-[20px] aos-init aos-animate">
                <div className="main-title mb-[20px]">
                  <h4 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]">
                    Customer Details
                  </h4>
                </div>
                <p className="font-Poppins leading-[28px] tracking-[0.03rem] mb-[16px] text-[14px] font-light text-[#686e7d]">
                  By creating an account you will be able to shop faster, be up
                  to date on an order's status, and keep track of the orders you
                  have previously made.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap mx-[-12px]">
                    <div className="min-[992px]:w-[50%] w-full px-[12px]">
                      <div className="input-item mb-[24px]">
                        <label className="inline-block font-Poppins leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formValues.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your Full Name"
                          className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]"
                          // required
                        />
                        {formErrors?.fullName && (
                          <span className="text-red-500">
                            {formErrors?.fullName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="min-[992px]:w-[50%] w-full px-[12px]">
                      <div className="input-item mb-[24px]">
                        <label className="inline-block font-Poppins leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">
                          Phone Number *
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formValues.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your Phone Number"
                          className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]"
                          // required
                        />
                        {formErrors?.phone && (
                          <span className="text-red-500">
                            {formErrors?.phone}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="w-full px-[12px]">
                      <div className="input-item mb-[24px]">
                        <label className="inline-block font-Poppins leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">
                          Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formValues.address}
                          onChange={handleInputChange}
                          placeholder="Address"
                          className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]"
                          // required
                        />
                        {formErrors?.address && (
                          <span className="text-red-500">
                            {formErrors?.address}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="input-item mb-[24px]">
                    <label className="inline-block font-Poppins leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                      // required
                    />
                    {formErrors?.email && (
                      <span className="text-red-500">{formErrors?.email}</span>
                    )}
                  </div>
                  <div className="input-item mb-[24px]">
                    <label className="inline-block font-Poppins leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                      // required
                    />
                    {formErrors?.password && (
                      <span className="text-red-500">
                        {formErrors?.password}
                      </span>
                    )}
                  </div>
                  <div className="w-full px-[12px]">
                    {cartItems?.length > 0 && (
                      <button
                        type="submit"
                        className="select-none animate-bounce py-[4px] px-[25px] w-auto cursor-pointer text-[#777] bg-[#f8f8fb] font-Poppins text-center align-top border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow3 mt-[24px] inline-flex items-center justify-center check-btn transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-normal rounded-[10px]"
                      >
                        Place Order
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductSlider />
    </>
  );
}
