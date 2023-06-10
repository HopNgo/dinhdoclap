import React from "react";
import { Layout, Menu, Avatar, Dropdown, Space, Button } from "antd";
import { useLocation, useNavigate, Link } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const keyMenu = location.pathname.split("/")[1];
  const navigate = useNavigate();
  const items = [
    {
      label: (
        <Link
          to={"/"}
          className={`items-center  text-white text-[20px] ${
            keyMenu === "" ? " font-bold" : " font-medium"
          }`}
        >
          Trang chủ
        </Link>
      ),
      key: "trangchu",
    },
    {
      label: (
        <Link
          to={"/bando"}
          className={`items-center  text-white text-[20px] ${
            keyMenu === "bando" ? " font-bold" : " font-medium"
          }`}
        >
          Bản đồ 3D
        </Link>
      ),
      key: "bando",
    },
    {
      label: (
        <Link
          to={"/lichsu"}
          className={`items-center  text-white text-[20px] ${
            keyMenu === "lichsu" ? " font-bold" : " font-medium"
          }`}
        >
          Lịch Sử
        </Link>
      ),
      key: "lichsu",
    },
    {
      label: (
        <Link
          to={"/thamquan"}
          className={`items-center  text-white text-[20px] ${
            keyMenu === "thamquan" ? " font-bold" : " font-medium"
          }`}
        >
          Tham quan
        </Link>
      ),
      key: "thamquan",
    },
    {
      label: (
        <Link
          to={"/lienhe"}
          className={`items-center  text-white text-[20px] ${
            keyMenu === "lienhe" ? " font-bold " : " font-medium"
          }`}
        >
          Liên hệ
        </Link>
      ),
      key: "lienhe",
    },
  ];
  const email = localStorage.getItem("email");
  const logout = {
    title: "Logout",
    cb: () => {
      window.localStorage.removeItem("email");

      navigate("/dangnhap");
    },
  };
  const ProfileMenu = () => {
    return (
      <Menu>
        <Menu.Item onClick={logout.cb}>{logout.title}</Menu.Item>
      </Menu>
    );
  };
  return (
    <Layout.Header
      style={{
        backgroundColor: keyMenu === "" ? "transparent" : "rgba(0, 0, 0, 0.7)",
        position: "absolute",
        height: "55px",
        color: "black",
        zIndex: "10",
        width: "100vw",
      }}
    >
      <div className="flex items-center w-full h-full  justify-between px-10">
        <Link to={"/"}>
          <div className="text-[32px] font-playfair text-white font-bold">
            Dinh Độc Lập
          </div>
        </Link>
        <Space className="flex" align="center" size={30}>
          {items.map((item) => {
            return (
              <div
                key={item.key}
                className={`${keyMenu === item.key ? "border-b-[4px]" : ""}`}
              >
                {item.label}
              </div>
            );
          })}
        </Space>
      </div>
    </Layout.Header>
  );
};
