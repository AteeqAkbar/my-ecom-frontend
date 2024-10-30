"use client";
import { useState } from "react";
import ProductList from "./components/Cards/ProductList";
import Carousel from "./components/Carousel/Carousel";
import Modal from "./components/CustomModal";
import ExploreCategories from "./components/ExploreCategories";
import ModalCard from "./components/Cards/ModalCard";
import Services from "./components/Services";
import CartSidebar from "./components/Cart/CartSidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <Carousel />
      <ExploreCategories />

      <ProductList />
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      <Modal state={isOpen} close={closeModal}>
        <ModalCard />
      </Modal>
      <Services />
      <CartSidebar />
    </>
  );
}
