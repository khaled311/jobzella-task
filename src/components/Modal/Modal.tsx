import { useDispatch } from "react-redux";
import { closeModal } from "../../store/store";
import { Close } from "../../assets";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

type Inputs = {
  name: string;
  description: string;
};

const schema = yup
  .object({
    name: yup.string().min(3).max(150).required(),
    // description: yup.string().min(3).max(150).required(),
    // description: yup.number().positive().integer().required(),
  })
  .required();

type Props = {
  modalName: string;
};

const Modal = ({ modalName }: Props) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await axios.post("https://todo-api.jbz.la/api/groups", data);

    console.log("Sent");
  };
  console.log("errors", errors);
  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full bg-[#0000006B] backdrop-blur-[1px] flex items-center justify-center">
      <div className="max-w-[570px] w-full bg-white rounded-lg overflow-hidden">
        {/* Head */}
        <div className="flex justify-between h-[65px] bg-[#00587A33] p-[17px_25px] mb-[24px]">
          <h2 className="capitalize font-bold text-[#1A242A] text-2xl">
            Add {modalName}
          </h2>
          <button onClick={() => dispatch(closeModal())}>
            <Close />
          </button>
        </div>
        {/* Head */}

        {/* Modal Body */}
        <form className="p-[0_36px_0_22px]" onSubmit={handleSubmit(onSubmit)}>
          {modalName === "group" ? (
            <label htmlFor="name">
              <p className="font-nunito text-[#373F51] font-semibold text-base mb-[8px]">
                Name <span className="text-[#EF2206]">*</span>
              </p>
              <input
                type="text"
                placeholder="Name"
                id="name"
                {...register("name")}
                className={`w-full rounded-md p-[12px_16px] bg-[#F5F6F6] border hover:border-[#00587A] focus:border-[#00587A] focus:outline-none transition-colors text-sm font-nunito font-normal text-[#A3A3A3] ${
                  errors?.name ? "border-red-600" : ""
                }`}
              />
              <p className="text-xs text-red-500 font-nunito capitalize">
                {errors?.name?.message ? errors?.name?.message : ""}
              </p>
            </label>
          ) : (
            <>
              <label htmlFor="name">
                <p className="font-nunito text-[#373F51] font-semibold text-base mb-[8px]">
                  Name <span className="text-[#EF2206]">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  {...register("name")}
                  className="w-full rounded-md p-[12px_16px] bg-[#F5F6F6] border hover:border-[#00587A] focus:border-[#00587A] focus:outline-none transition-colors text-sm font-nunito font-normal text-[#A3A3A3]"
                />
                <p className="text-xs text-red-500 font-nunito capitalize">
                  {errors?.name?.message ? errors?.name?.message : ""}
                </p>
              </label>
              <label htmlFor="desc" className="my-[16px] block">
                <p className="font-nunito text-[#373F51] font-semibold text-base mb-[8px]">
                  Description
                </p>
                <textarea
                  placeholder="Write here...."
                  id="desc"
                  {...register("description")}
                  className="w-full rounded-md p-[12px_16px] bg-[#F5F6F6] border hover:border-[#00587A] focus:border-[#00587A] focus:outline-none transition-colors text-sm font-nunito font-normal text-[#A3A3A3] min-h-[100px]"
                />
                <p className="text-xs text-red-500 font-nunito capitalize">
                  {errors?.description?.message
                    ? errors?.description?.message
                    : ""}
                </p>
              </label>
              <div className="flex gap-[40px]">
                {/* Radio */}
                <div>
                  <input
                    id="default-checkbox1"
                    type="radio"
                    className="hidden group default-checkbox1"
                    name="status"
                  />
                  <label
                    htmlFor="default-checkbox1"
                    className="text-sm text-[#909598] cursor-pointer flex items-center gap-[13px]"
                  >
                    <div className="w-[24px] h-[24px] rounded-full border-2 border-[#7697AB] flex items-center justify-center">
                      <span className="w-[70%] h-[70%] bg-[#044C7F] opacity-0 transition-opacity rounded-full"></span>
                    </div>
                    To do
                  </label>
                </div>
                {/* Radio */}
                {/* Radio */}
                <div>
                  <input
                    id="default-checkbox2"
                    type="radio"
                    className="hidden group default-checkbox1"
                    name="status"
                  />
                  <label
                    htmlFor="default-checkbox2"
                    className="text-sm text-[#909598] cursor-pointer flex items-center gap-[13px]"
                  >
                    <div className="w-[24px] h-[24px] rounded-full border-2 border-[#7697AB] flex items-center justify-center">
                      <span className="w-[70%] h-[70%] bg-[#044C7F] opacity-0 transition-opacity rounded-full"></span>
                    </div>
                    In progress
                  </label>
                </div>
                {/* Radio */}
                {/* Radio */}
                <div>
                  <input
                    id="default-checkbox3"
                    type="radio"
                    className="hidden group default-checkbox1"
                    name="status"
                  />
                  <label
                    htmlFor="default-checkbox3"
                    className="text-sm text-[#909598] cursor-pointer flex items-center gap-[13px]"
                  >
                    <div className="w-[24px] h-[24px] rounded-full border-2 border-[#7697AB] flex items-center justify-center">
                      <span className="w-[70%] h-[70%] bg-[#044C7F] opacity-0 transition-opacity rounded-full"></span>
                    </div>
                    Done
                  </label>
                </div>
                {/* Radio */}
              </div>
            </>
          )}
          <button className="flex items-center justify-center rounded-full w-[260px] h-[44px] bg-[#00587A] font-nunito font-semibold text-white text-lg mx-auto m-[33px_0_40px_0]">
            Add {modalName}
          </button>
        </form>

        {/* Modal Body */}
      </div>
    </div>
  );
};

export default Modal;
