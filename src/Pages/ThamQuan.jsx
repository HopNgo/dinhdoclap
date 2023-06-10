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

export const ThamQuan = () => {
  const slider = React.useRef();

  return (
    <Layout>
      <div className="pt-20  mx-[50px] flex flex-wrap justify-center">
        <img
          className="w-[560px] h-[342px] p-5 object-cover"
          src={
            "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/2-8.jpg"
          }
          alt="dinhDocLapImg2"
        />
        <div className=" p-5  w-[560px]">
          <h3 className="text-[18px]  font-bold ">
            Hình ảnh Dinh Độc Lập Sài Gòn
          </h3>
          <p className="mt-5 text-[18px] text-justify">
            Dinh Độc Lập khởi công ngày 23/2/1868 và hoàn tất vào năm 1871 do
            viên thống đốc Pháp tại miền Nam Việt Nam là Lagradìere đặt viên đá
            đầu tiên.
          </p>
        </div>
      </div>
      <hr className="w-[90vw] mx-auto" />
      <div className=" my-10 mx-[50px] flex flex-wrap justify-center">
        <div className=" p-5 w-[560px]">
          <h3 className="text-[18px] font-bold ">
            Dinh Độc Lập thời Pháp thuộc
          </h3>
          <p className="mt-5 text-[18px] text-justify">
            Từ 1887 – 1945, nhiều đời toàn quyền Pháp đã sử dụng dinh thự này
            làm nơi ở và làm việc trong suốt thời kỳ xâm lược Ðông Dương.
          </p>
        </div>
        <img
          className="w-[560px] p-5 h-[362px] object-cover"
          src={
            "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/4-8.jpg"
          }
          alt="dinhDocLapImg2"
        />
      </div>
      <hr className="w-[90vw] mx-auto" />
      <div className=" my-10  mx-[50px] flex flex-wrap justify-center">
        <img
          className="w-[560px] h-[342px] p-5 object-cover"
          src={
            "https://media2.gody.vn/public/mytravelmap/images/2019/11/11/mynameisvietkm468344/32660e48fa0367b962917de147b7ab74.jpg"
          }
          alt="dinhDocLapImg2"
        />
        <div className=" p-5 w-[560px]">
          <h3 className="text-[18px]  font-bold ">
            Phòng tiếp khách của tổng thống
          </h3>
          <p className="mt-5 text-[18px] text-justify">
            Phòng tiếp khách của Tổng thống gồm 2 phòng thông nhau. Trong phòng
            đầu tiên, ghế của Tổng thống được đặt cao hơn các ghế khác. Phía sau
            là tấm gỗ lớn tượng trung cho quốc kỳ Việt Nam Cộng hòa.
          </p>
        </div>
      </div>
      <hr className="w-[90vw] mx-auto" />
      <div className=" my-10 mx-[50px] flex flex-wrap justify-center">
        <div className=" p-5 w-[560px]">
          <h3 className="text-[18px] font-bold ">Phòng Khánh tiết</h3>
          <p className="mt-5 text-[18px] text-justify">
            Phòng Khánh Tiết là căn phòng có diện tích lớn nhất của cả Dinh Độc
            Lập nằm ngay dưới tầng trệt của Dinh. Với sức chứa có thể lên đến
            500 người .
          </p>
        </div>
        <img
          className="w-[560px] p-5 h-[362px] object-cover"
          src={
            "https://media2.gody.vn/public/mytravelmap/images/2019/11/11/mynameisvietkm468344/9514b9bc23c103d70bc3ac16fcc36f11.jpg"
          }
          alt="dinhDocLapImg2"
        />
      </div>
      <hr className="w-[90vw] mx-auto" />
      <div className=" my-10  mx-[50px] flex flex-wrap justify-center">
        <img
          className="w-[560px] h-[342px] p-5 object-cover"
          src={
            "https://media2.gody.vn/public/mytravelmap/images/2019/11/11/mynameisvietkm468344/e5c2eade390c6f82e94186d8552e899d.jpg"
          }
          alt="dinhDocLapImg2"
        />
        <div className=" p-5 w-[560px]">
          <h3 className="text-[18px]  font-bold ">
            Khu ở của gia đình Tổng thống
          </h3>
          <p className="mt-5 text-[18px] text-justify">
            Khu ở của gia đình Tổng thống: Người có thời gian sống lâu nhất là
            Nguyễn Văn Thiệu (từ tháng 10/1967 đến 21/4/1975).
          </p>
        </div>
      </div>
      <hr className="w-[90vw] mx-auto" />
      <div className=" my-10 mx-[50px] flex flex-wrap justify-center">
        <div className=" p-5 w-[560px]">
          <h3 className="text-[18px] font-bold ">
            Không gian bên trong khu vực cố định.
          </h3>
          <p className="mt-5 text-[18px] text-justify">
            Khu vực cố định bao gồm 100 căn phòng với phong cách trang trí riêng
            biệt, trong đó có phòng nội các, phòng đại yên, phòng trình quốc
            thư, phòng làm việc, phòng ngủ của gia đình tổng thống,... Đây chính
            là nơi làm việc và sinh hoạt của chính quyền Việt Nam Cộng Hòa xưa.
            Khi đến tham quan khu vực này, bạn sẽ thấy những di tích lịch sử tái
            hiện một cách sống động cuộc chiến khốc liệt của dân tộc ta.
          </p>
        </div>
        <img
          className="w-[560px] p-5 h-[362px] object-cover"
          src={
            "https://ik.imagekit.io/tvlk/blog/2023/01/dinh-doc-lap-9.jpg?tr=dpr-2,w-675"
          }
          alt="dinhDocLapImg2"
        />
      </div>
      <hr className="w-[90vw] mx-auto" />
      <div className=" my-10  mx-[50px] flex flex-wrap justify-center">
        <img
          className="w-[560px] h-[342px] p-5 object-cover"
          src={
            "https://ik.imagekit.io/tvlk/blog/2023/01/dinh-doc-lap-10.jpg?tr=dpr-2,w-675"
          }
          alt="dinhDocLapImg2"
        />
        <div className=" p-5 w-[560px]">
          <h3 className="text-[18px]  font-bold ">Khu chuyên đề</h3>
          <p className="mt-5 text-[18px] text-justify">
            Khu chuyên đề là nơi diễn ra các cuộc triển lãm lớn, giúp du khách
            nhìn lại những khoảnh khắc lịch sử sống động của thời kỳ trước. Tại
            đây trưng bày nhiều chuyên đề lịch sử nổi tiếng như chiến dịch Hồ
            Chí Minh, hiệp định Paris, Đường Hồ Chí Minh,... Để hiểu rõ những sự
            kiện lịch sử và ý sâu xa ẩn trong các chi tiết đó, bạn nên thuê
            hướng dẫn viên du lịch đi cùng. Chắc chắn những kiến thức thú vị này
            sẽ rất khó có thể tìm thấy trên sách báo thông thường.
          </p>
        </div>
      </div>
    </Layout>
  );
};
