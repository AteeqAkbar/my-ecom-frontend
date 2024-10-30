import { useEffect } from "react";

const useScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("topnav");
      const mobnav = document.getElementById("mobnav");
      if (navbar) {
        if (window.scrollY >= 200) {
          navbar.classList.add("shadow");
          navbar.classList.add("bg-white");
          navbar.classList.add("bg-opacity-30");
          navbar.classList.add("backdrop-blur-lg");
          mobnav.classList.add("shadow");
          mobnav.classList.add("bg-white");
          mobnav.classList.add("bg-opacity-30");
          mobnav.classList.add("backdrop-blur-lg");
        } else {
          navbar.classList.remove("shadow");
          navbar.classList.remove("bg-white");
          navbar.classList.remove("bg-opacity-30");
          navbar.classList.remove("backdrop-blur-lg");
          mobnav.classList.remove("shadow");
          mobnav.classList.remove("bg-white");
          mobnav.classList.remove("bg-opacity-30");
          mobnav.classList.remove("backdrop-blur-lg");
        }
      }

      const mybutton = document.getElementById("back-to-top");
      if (mybutton) {
        if (window.scrollY > 500) {
          mybutton.classList.add("flex");
          mybutton.classList.remove("hidden");
        } else {
          mybutton.classList.add("hidden");
          mybutton.classList.remove("flex");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScroll;
