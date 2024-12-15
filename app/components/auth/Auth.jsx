import { login, register } from "@/app/services/api";
import { setUserToken } from "@/app/store/authSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Auth() {
  const router = useRouter();
  const [state, setState] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (state !== "forgot" && !formData.password) {
      newErrors.password = "Password is required.";
    } else if (state !== "forgot" && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (state === "register" && !formData.name) {
      newErrors.name = "Full name is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        if (state === "login") {
          const data = await login({
            identifier: formData.email,
            password: formData.password,
          });
          dispatch(setUserToken({ token: data.jwt, user: data.user }));
          router.push("/");
        } else if (state === "register") {
          const data = await register({
            username: formData.name,
            password: formData.password,
            email: formData.email,
          });
          dispatch(setUserToken({ token: data.jwt, user: data.user }));
          router.push("/");
        }
      } catch (err) {
        console.log(err);
      }

      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="section-login py-[10px] max-[1199px]:py-[5px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="section-title mb-[20px] pb-[20px] relative flex flex-col items-center text-center max-[991px]:pb-[0]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="section-detail max-[991px]:mb-[12px]">
                {state === "login" && (
                  <h2 className="bb-title flex items-center font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative justify-center capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                    Sign
                    <a className="bg-transparent h-[36px] m-[5px] flex items-center bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1">
                      {" In"}
                    </a>
                  </h2>
                )}
                {state === "register" && (
                  <h2 className="bb-title flex items-center font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative justify-center capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                    Sign
                    <a className="bg-transparent h-[36px] m-[5px] flex items-center bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1">
                      {" Up"}
                    </a>
                  </h2>
                )}
                {state === "forgot" && (
                  <h2 className="bb-title flex items-center font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative justify-center capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                    Forgot
                    <a className="bg-transparent h-[36px] m-[5px] flex items-center bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1">
                      {" Password"}
                    </a>
                  </h2>
                )}
                <p className="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]">
                  Best place to buy and sell digital products
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-[12px]">
            <div
              className="bb-login-contact max-w-[500px] m-[auto] border-[1px] border-solid shadow3 bg-white border-[#eee] p-[30px] rounded-[20px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <form onSubmit={handleSubmit}>
                {state === "register" && (
                  <div className="bb-login-wrap mb-[24px]">
                    <label className="inline-block font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Full Name"
                      className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                )}
                <div className="bb-login-wrap mb-[24px]">
                  <label className="inline-block font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                {state !== "forgot" && (
                  <div className="bb-login-wrap mb-[1px]">
                    <label className="inline-block font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]">
                      Password*
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    )}
                  </div>
                )}
                {state === "login" && (
                  <a
                    onClick={() => setState("forgot")}
                    className="bg-transparent h-[36px] m-[5px] mt-3 flex items-center font-Poppins text-[15px] bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 cursor-pointer"
                  >
                    Forgot Password
                  </a>
                )}
                <div className="bb-login-button m-[-5px] flex justify-between mt-3">
                  <button
                    type="submit"
                    className="select-none py-[4px] px-[25px] shadow3 w-auto cursor-pointer font-Poppins text-center align-top border-[1px] border-solid border-[#eee] bg-gradient-to-br from-indigo-200 to-pink-200 via-blue-200 text-white inline-flex items-center justify-center check-btn transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-normal rounded-[10px]"
                  >
                    {state === "login"
                      ? "Sign In"
                      : state === "register"
                      ? "Sign Up"
                      : "Reset Password"}
                  </button>
                  {state === "login" && (
                    <a
                      onClick={() => setState("register")}
                      className="bg-transparent h-[36px] m-[5px] flex items-center font-Poppins text-[15px] bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 cursor-pointer"
                    >
                      Sign Up
                    </a>
                  )}
                  {state === "register" && (
                    <a
                      onClick={() => setState("login")}
                      className="bg-transparent h-[36px] m-[5px] flex items-center font-Poppins text-[15px] bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 cursor-pointer"
                    >
                      Sign In
                    </a>
                  )}

                  {state === "forgot" && (
                    <a
                      onClick={() => setState("login")}
                      className="bg-transparent h-[36px] m-[5px] flex items-center font-Poppins text-[15px] bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 cursor-pointer"
                    >
                      Back to Sign In
                    </a>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth;
