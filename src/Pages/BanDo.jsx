import React from "react";
import { Layout } from "../Layout/Layout";
// import dinhDocLapImg15 from "../asset/images/dinhdoclap15.   png";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const BanDo = () => {
  return (
    <Layout>
      <div className="">
        <div className="relative m-0">
          <iframe
            className="w-screen h-screen m-0 border-0"
            title="Bản đồ"
            src="https://hv-hung.github.io/gis3d-dinhdoclap"
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        </div>
      </div>
    </Layout>
  );
};
