import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { useWallet, useConnection } from "@solana/wallet-adapter-react";

const Layout = ({ children, setConnected }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  let connectState = wallet?.connected;

  return (
    <div className={`min-h-screen flex flex-col justify-between dark:bg-dark dark:text-dark-text layout ${connectState?"bg-main":"bg-first bg-no-repeat bg-center bg-contain bg-backcolor"}`}>
      <Header setConnected={setConnected} />
      <div className="flex-1 flex flex-col justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
