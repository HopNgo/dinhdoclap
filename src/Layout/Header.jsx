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
          to={"/lienhe"}
          className={`items-center  text-white text-[20px] ${
            keyMenu === "lienhe" ? " font-bold" : " font-medium"
          }`}
        >
          Liên hệ
        </Link>
      ),
      key: "lienhe",
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
        <div>
          {email ? (
            <div>
              <h3 className="items-center space-x-1 text-white font-bold text-[20px] cursor-pointer min-w-[224px]">
                <div className="flex gap-5 items-center">
                  <div className="w-[50px]">
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1920px-Flag_of_Vietnam.svg.png" />
                  </div>
                  <p>{email}</p>
                  <div
                    className="bg-blue-800 py-3 px-5 rounded-[10px] text-base"
                    onClick={() => logout.cb()}
                  >
                    Đăng xuất
                  </div>
                </div>
              </h3>
            </div>
          ) : (
            <Link
              to={"/dangnhap"}
              className="items-center space-x-1 text-Whtie font-bold text-[20px] cursor-pointer"
            >
              <Button
                type="primary"
                className="bg-[#1063B8] text-[20px] h-10  px-3 rounded text-white hover:opacity-80"
              >
                Đăng nhập
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Layout.Header>
  );
};
