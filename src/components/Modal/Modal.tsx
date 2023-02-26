import { useState } from "react";
import { closeModal } from "../../store/store";
import { Close, LoadingCircle } from "../../assets";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useMutation, useQueryClient } from "react-query";

type Inputs = {
  name: string;
  description: string;
  status: string;
};

const schema: Record<TModalType, unknown> = {
  groups: yup.object({
    name: yup.string().min(3).max(150).required(),
  }),
  tasks: yup.object({
    name: yup.string().min(3).max(100).required(),
    description: yup.string().when(([value]) => {
      if (value.length > 0) {
        return yup.string().min(3).max(500).required();
      } else {
        return yup.string();
      }
    }),
    status: yup.string().required(),
  }),
};

interface Props {
  modalType: TModalType;
  groupId: string;
}

const Modal = ({ modalType, groupId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { status: taskStatus }: any = useSelector<TStore>((state) => state);

  const submitModalData = useMutation({
    mutationFn: (data: any) =>
      axios.post(modalType, {
        ...data,
        group_id: groupId,
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: yupResolver(schema[modalType]),
  });

  const statusValue = watch("status");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    await submitModalData.mutateAsync(data);
    setIsLoading(false);
    toast.success(
      `${modalType === "groups" ? "Group" : "Task"} added successfully!`
    );
    if (modalType === "groups") {
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    }
    dispatch(closeModal());
  };

  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full bg-[#0000006B] backdrop-blur-[1px] flex items-center justify-center">
      <div className="max-w-[570px] w-full bg-white rounded-lg overflow-hidden">
        {/* Head */}
        <div className="flex justify-between h-[65px] bg-[#00587A33] p-[17px_25px] mb-6">
          <h2 className="capitalize font-bold text-[#1A242A] text-2xl">
            Add {modalType}
          </h2>
          <button onClick={() => dispatch(closeModal())}>
            <Close />
          </button>
        </div>
        {/* Head */}

        {/* Modal Body */}
        <form className="p-[0_36px_0_22px]" onSubmit={handleSubmit(onSubmit)}>
          {modalType === "groups" ? (
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
              <ErrorMessage message={errors?.name?.message} />
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
                <ErrorMessage message={errors?.name?.message} />
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
                <ErrorMessage message={errors?.description?.message} />
              </label>
              <div className="flex gap-[40px]">
                {/* Radio */}
                <div>
                  <input
                    id="default-checkbox1"
                    type="radio"
                    className="hidden group default-checkbox1"
                    value="todo"
                    {...register("status")}
                    checked={statusValue === "todo" || taskStatus === "todo"}
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
                    value="progress"
                    {...register("status")}
                    checked={
                      statusValue === "progress" || taskStatus === "progress"
                    }
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
                    value="done"
                    {...register("status")}
                    checked={statusValue === "done" || taskStatus === "done"}
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
          <button
            type="submit"
            className="flex items-center justify-center rounded-full w-[260px] h-[44px] bg-[#00587A] font-nunito font-semibold text-white text-lg mx-auto m-[33px_0_40px_0]"
          >
            {isLoading ? <LoadingCircle /> : `Add ${modalType}`}
          </button>
        </form>

        {/* Modal Body */}
      </div>
    </div>
  );
};

export default Modal;
