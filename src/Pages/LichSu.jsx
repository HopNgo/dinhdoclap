import { Carousel, Button } from "antd";
import React from "react";
import { Layout } from "../Layout/Layout";
import dinhDocLapImg18 from "../asset/images/dinhdoclap18.webp";
import dinhDocLapImg19 from "../asset/images/dinhdoclap19.webp";
import dinhDocLapImg16 from "../asset/images/dinhdoclap16.jpg";
import dinhDocLapImg17 from "../asset/images/dinhdoclap17.jpg";
import dinhDocLapImg10 from "../asset/images/dinhdoclap10.png";
import dinhDocLapImg11 from "../asset/images/dinhdoclap11.png";
import dinhDocLapImg12 from "../asset/images/dinhdoclap12.png";
import dinhDocLapImg13 from "../asset/images/dinhdoclap13.png";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const LichSu = () => {
  const slider = React.useRef();

  return (
    <Layout>
      <div className="pt-20 mx-[50px] flex flex-wrap justify-center">
        <img
          className="w-[560px] h-[342px] p-5 object-cover"
          src={dinhDocLapImg10}
          alt="dinhDocLapImg2"
        />
        <div className=" p-5  w-[560px]">
          <h3 className="text-[18px]  font-bold ">Sơ lược lịch sử.</h3>
          <p className="mt-5 text-[18px] text-justify">
            Ngày 09/3/1945, phát xít Nhật đảo chính Pháp, độc chiếm Ðông Dương,
            Dinh Norodom là nơi làm việc của chính quyền Nhật ở Việt Nam. Tháng
            9/1945, Nhật thất bại trong chiến tranh thế giới thứ II, Pháp trở
            lại chiếm Nam Bộ, Dinh Norodom là trụ sở làm việc của bộ máy chiến
            tranh xâm lược của Pháp ở Việt Nam.
          </p>
        </div>
      </div>
      <div className=" my-10 mx-[50px] flex flex-wrap justify-center">
        <div className=" p-5 w-[560px]">
          <h3 className="text-[18px] font-bold ">Ngày 07/5/1954</h3>
          <p className="mt-5 text-[18px] text-justify">
            Thực dân Pháp thất bại nặng nề trong chiến dịch Ðiện Biên Phủ buộc
            phải ký Hiệp định Gienève và rút khỏi Việt Nam. Mỹ tìm cách nhảy vào
            thực hiện ý đồ xâm chiếm miền Nam, Việt Nam tạm thời bị chia cắt
            thành 2 miền, miền Bắc là Việt Nam Dân chủ Cộng hòa, còn miền Nam là
            Quốc gia Việt Nam.
          </p>
        </div>
        <img
          className="w-[560px] p-5 h-[362px] object-cover"
          src={dinhDocLapImg11}
          alt="dinhDocLapImg2"
        />
      </div>
      <div className=" my-10  mx-[50px] flex flex-wrap justify-center">
        <img
          className="w-[560px] h-[342px] p-5 object-cover"
          src={dinhDocLapImg12}
          alt="dinhDocLapImg2"
        />
        <div className=" p-5 w-[560px]">
          <h3 className="text-[18px]  font-bold ">Ngày 07/9/1954</h3>
          <p className="mt-5 text-[18px] text-justify">
            Dinh Norodom được bàn giao giữa đại diện chính phủ Pháp, Ðại tướng
            Paul Ely với đại diện chính quyền Sài Gòn Thủ tướng Ngô Ðình Diệm.
            Ngô Ðình Diệm đã quyết định đổi tên Dinh thành Dinh Ðộc Lập. Ngày
            26/10/1955, Thủ tướng Ngô Đình Diệm đã truất phế Quốc trưởng Bảo
            Đại, thành lập chính quyền Việt Nam Cộng hòa và lên làm Tổng thống.
            Từ đó Dinh Ðộc Lập trở thành nơi ở của gia đình Ngô Ðình Diệm và là
            nơi chứng kiến nhiều biến cố chính trị.
          </p>
        </div>
      </div>
      <div className=" my-10 mx-[50px] flex flex-wrap justify-center">
        <div className=" p-5 w-[560px]">
          <h3 className="text-[18px] font-bold ">Ngày 27/02/1962</h3>
          <p className="mt-5 text-[18px] text-justify">
            Phe đảo chính đã cử hai viên phi công quân đội Sài Gòn là Nguyễn Văn
            Cử và Phạm Phú Quốc lái 2 máy bay AD6 ném bom làm sập toàn bộ phần
            chính cánh trái của Dinh. Do không thể khôi phục lại, Ngô Ðình Diệm
            đã cho san bằng và xây một dinh thự mới ngay trên nền đất cũ theo đồ
            án thiết kế của Kiến trúc sư Ngô Viết Thụ – người Việt Nam đầu tiên
            đạt giải Khôi nguyên La Mã.
          </p>
        </div>
        <img
          className="w-[560px] p-5 h-[362px] object-cover"
          src={dinhDocLapImg13}
          alt="dinhDocLapImg2"
        />
      </div>
      <div className=" my-10  mx-[50px] flex flex-wrap justify-center">
        <Button className=" w-[500px] h-[70px] font-bold text-[30px] text-white bg-[#1063B8]">
          <Link to={"/bando"}>Xem bản đồ 3D</Link>
        </Button>
      </div>
    </Layout>
  );
};
