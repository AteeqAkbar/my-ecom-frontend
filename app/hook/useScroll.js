import { useEffect } from "react";

const useScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("topnav");
      if (navbar) {
        if (window.scrollY >= 200) {
          console.log("scrollY", window.scrollY);
          navbar.classList.add("shadow1");
        } else {
          console.log("scrollY else", window.scrollY);
          navbar.classList.remove("shadow1");
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
