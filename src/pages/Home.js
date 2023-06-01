import React, { useState } from "react";
import Layout from "../components/Layout";
import Logo from "../assets/images/icon.png";
import LogoImage from "../assets/images/logo.png";
import GifFlip from "../assets/images/7mx23h.gif";
import AfterConnected from "../components/AfterConnected";

import { useWallet, useConnection } from "@solana/wallet-adapter-react";

import HeadImage from "../assets/images/head.png";
import TailImage from "../assets/images/tail.png";

const Home = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [connected, setConnected] = useState(false);

  return (
    <Layout setConnected={setConnected}>
      <div className="w-full">
        {wallet?.connected ? <AfterConnected /> : <BeforeConnected />}
      </div>
    </Layout>
  );
};


export default Home;

const BeforeConnected = () => {
  return (
    <div>
      {/* <div className="flex justify-center items-center"> */}
        {/* <h2 className="font-bold uppercase text-2xl md:text-4xl text-center ">
          MOST TRUSTED PLACE TO FLIP
        </h2> */}
        {/* <img src={Logo} alt="" className="w-48" /> */}
        {/* <img src={GifFlip} alt="" className="w-48" /> */}
      {/* </div> */}
      {/* <div className="flex flex-no-wrap z-10">
        <div className="w-1/2 float-none px-2 flex justify-center">
          <img src={HeadImage} />
        </div>
        <div className="w-1/2 float-none px-2 flex justify-center">
          <img src={TailImage} />
        </div>
      </div> */}
      <div className="">
        <img src={LogoImage} alt="" className="absolute bottom-12 right-1"/>
      </div>
    </div>
  );
};
