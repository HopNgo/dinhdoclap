import { Space, Input } from "antd";
import React from "react";
import dinhDocLapImg16 from "../asset/images/dinhdoclap16.jpg";
import { useNavigate } from "react-router-dom";
export const DangNhap = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    values.preventDefault();
    window.localStorage.setItem("email", values.target.email.value);
    console.log("Success:", values.target.email.value);
    navigate("/");
  };

  return (
    <div className="relative text-gray-900 h-[100vh] flex items-center justify-center">
      <div className="dangky h-[100vh]">
        <img
          className="w-full h-full object-cover object-center opacity-50"
          src={dinhDocLapImg16}
          alt="dinhDocLapImg2"
        />
      </div>
      <Space
        className=" w-screen h-screen justify-center items-center absolute left-0 top-0 flex items"
        align="center"
      >
        <form
          onSubmit={handleSubmit}
          className="z-50 text-center flex items-center"
        >
          <Space
            direction="vertical"
            size={23}
            align="center"
            className="my-10 px-10 py-[80px] rounded bg-[#E4E5D6] shadow-2xl text-start"
          >
            <Space align="center">
              <h3 className="text-[50px] font-bold text-blue-500 text-center">
                Đăng nhập
              </h3>
            </Space>

            <div className="mb-5">
              <p className="text-[18px] rounded mb-2">Tên tài khoản</p>
              <Input
                name="email"
                className="w-[556px] h-[44px] border border-[#CED0C2] p-2"
                placeholder="Nhập email"
                type="email"
                required
              />
            </div>
            <div>
              <p className="text-[18px] mb-3">Mật khẩu</p>
              <Input.Password
                className="w-[556px] h-[44px] rounded border border-[#CED0C2] p-2 !bg-white"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>

            <button
              type="submit"
              className="w-[556px] mt-6 h-[44px] rounded bg-blue-500 text-white font-bold text-[22px] hover:opacity-70"
            >
              Đăng nhập
            </button>
            <div className="flex justify-between w-[556px] mt-5">
              <p
                onClick={() => navigate("/")}
                className="cursor-pointer text-[22px] hover:underline"
              >
                Trang chủ
              </p>
              <p
                onClick={() => navigate("/dangky")}
                className="cursor-pointer text-[22px] hover:underline"
              >
                Đăng ký
              </p>
            </div>
          </Space>
        </form>
      </Space>
    </div>
  );
};
