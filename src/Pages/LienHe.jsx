import React from "react";
import { Layout } from "../Layout/Layout";
import bgImage from "../asset/images/bg-image.png";
import lienHeImage from "../asset/images/lienhe.png";
import { Space, notification } from "antd";
import { PhoneFilled } from "@ant-design/icons";

export const LienHe = () => {
  return (
    <Layout>
      <div className="w-[60%] flex justify-center">
        <form
          name="lienhe"
          onSubmit={(e) => {
            e.preventDefault();
            document.lienhe.reset();
            notification["success"]({ message: "Liên hệ thành công!" });
          }}
          className="z-50 mt-[100px]"
        >
          <Space
            direction="vertical"
            size={23}
            align="center"
            className="my-10 p-10 rounded bg-[#E4E5D6] py-10 shadow-2xl"
          >
            <Space align="center">
              <h3 className="text-[34px] font-bold ">Liên hệ với chúng tôi</h3>
              <PhoneFilled className="text-[34px]" />
            </Space>

            <div className="mb-5 mt-5">
              <p className="text-[18px] rounded">Họ và tên</p>
              <input
                className="w-[556px] h-[44px] border border-[#CED0C2] p-2"
                placeholder="Vui lòng nhập họ tên..."
                type="text"
                required
              />
            </div>
            <div className="mb-5">
              <p className="text-[18px]">Email</p>
              <input
                className="w-[556px] h-[44px] rounded border border-[#CED0C2] p-2"
                placeholder="Vui lòng nhập số email..."
                type="email"
                required
              />
            </div>
            <div className="mb-5">
              <p className="text-[18px]">Số điện thoại</p>
              <input
                className="w-[556px] h-[44px] rounded border border-[#CED0C2] p-2"
                placeholder="Vui lòng nhập số điện thoại..."
                type="tel"
                required
              />
            </div>
            <div className="mb-5">
              <p className="text-[18px]">Nội dung</p>
              <textarea
                className="w-[556px]  rounded border border-[#CED0C2] p-2"
                placeholder="Vui lòng nhập nội dung..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-[556px] h-[44px] rounded bg-black text-white font-bold text-[22px]"
            >
              Gửi
            </button>
          </Space>
        </form>
        <img
          className="w-[860px] absolute right-0 top-[280px]"
          src={bgImage}
          alt=""
        />
        <img
          className="w-[960px] absolute top-[80px] right-0 m-auto"
          src={lienHeImage}
          alt=""
        />
      </div>
    </Layout>
  );
};
