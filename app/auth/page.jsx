"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import ProductSlider from "../components/Swiper/ProductSlider";
import done from "../image/icons/done.png";
import star from "../image/icons/star.png";
import starhalf from "../image/icons/halfstar.png";
import Image from "next/image";
import Auth from "../components/auth/Auth";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [totals, setTotals] = useState(0);

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
    if (!formValues.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Proceed with form submission
      alert("Form submitted successfully!");
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
      <Breadcrumb title="Auth" />
      <Auth />
    </>
  );
}
