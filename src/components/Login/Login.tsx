import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Envelope, Eye, Lock } from "../../assets";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAccessTokenFromLocalStorage } from "../../utils/localStorage";

type Props = {};

type Inputs = {
  email: string;
  password: string;
};

const passwordRules =
  /^(?=.*\d)(?=.*[a-z])([~`!@#$%^&*()-_+=])(?=.*[A-Z]).{8,}$/;

const schema = yup
  .object({
    email: yup.string().email().max(320).required(),
    password: yup
      .string()
      .min(8)
      // .matches(passwordRules, {
      //   message:
      //     "password must have at least one [upper and lower letter, one special character and min length of 8]",
      // })
      .required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Login = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememmberMe, setRememmberMe] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    axios.post("login", data).then((res) => {
      if (rememmberMe) {
        localStorage.setItem("userData", JSON.stringify(res.data));
      } else {
        sessionStorage.setItem("userData", JSON.stringify(res.data));
      }
      navigate("/home/1");
    });
  };

  const token = getAccessTokenFromLocalStorage();
  if (token) {
    return <Navigate to="/home/1" replace />;
  }

  return (
    <div className="bg-[#044C7F] min-h-screen relative isolate">
      {/* Shape behind logo */}
      <div className="absolute top-0 left-0 -z-10">
        <img src="/assets/Ellipse1.png" alt="" />
      </div>
      {/* Shape behind logo */}
      {/* Shape next-top logo */}
      <div className="absolute top-0 left-[450px]">
        <img src="/assets/Ellipse3.png" alt="" />
      </div>
      {/* Shape next-top logo */}
      {/* Logo */}
      <div className="absolute top-12 left-[60px]">
        <img src="/assets/Group646.png" alt="" />
      </div>
      {/* Logo */}

      {/* Content */}
      <div className="container">
        <div className="flex gap-[117px] items-center xl:flex-wrap min-h-screen xl:px-12">
          <div className="hidden lg:block basis-[49.653%]">
            <img src="/assets/pana.png" alt="" />
          </div>
          <form
            className="pt-[40px] pb-[40px] xl:pt-[66px] xl:pb-[76px] px-[35px] rounded-2xl bg-white flex-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-black font-nunito font-bold text-[40px] leading-[48px] inline-block border-b border-black pb-[9px] mb-[40px]">
              Login
            </h1>

            <h3 className="font-bold text-2xl text-[#4C4E64DE]">
              Welcome to Jobzella! 👋🏻
            </h3>
            <p className="text-[#4C4E64AD] font-normal text-sm mb-6">
              Please sign-in to your account and start the adventure
            </p>

            <ErrorMessage message={errors?.email?.message} />
            <div className="relative mb-4">
              <span className="absolute top-1/2 left-4 -translate-y-1/2">
                <Envelope />
              </span>
              <input
                type="text"
                placeholder="Email"
                {...register("email")}
                className="p-[12px_38px] border border-[#4C4E6438] rounded-lg focus:outline-none w-full"
              />
            </div>
            <ErrorMessage message={errors?.password?.message} />
            <div className="relative mb-4">
              <span className="absolute top-1/2 left-4 -translate-y-1/2">
                <Lock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="p-[12px_38px] border border-[#4C4E6438] rounded-lg focus:outline-none w-full"
              />
              <span
                className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <Eye />
              </span>
            </div>
            <div className="flex justify-between">
              <input
                id="default-checkbox"
                type="checkbox"
                checked={rememmberMe}
                className="hidden group"
              />
              <label
                htmlFor="default-checkbox"
                className="text-sm text-[#909598] cursor-pointer flex items-center gap-[13px]"
                onClick={() => setRememmberMe((prev) => !prev)}
              >
                <div className="w-[18px] h-[18px] border-2 border-[#ABAEB0] flex items-center justify-center">
                  <span className="w-[70%] h-[70%] bg-sky-500 opacity-0 transition-opacity"></span>
                </div>
                Remember Me
              </label>
              <p className="font-semibold text-[#5397C5] text-sm underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <button className="mt-[78px] block rounded-2xl bg-[#00587A] w-full py-3 text-white font-bold">
              Login
            </button>
          </form>
        </div>
      </div>
      {/* Content */}
    </div>
  );
};

export default Login;
