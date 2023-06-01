import { useContext } from "react";
import { ThemeContext } from "./../context/themeContext";
import { FaDiscord, FaTwitter, FaMoon, FaSun } from "react-icons/fa";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import LogoImage from "../assets/images/logo2.png";
import GifFlip from "../assets/images/7mx23h.gif";

import { useWallet, useConnection } from "@solana/wallet-adapter-react";

const Header = ({ setConnected }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const wallet = useWallet();
  const { connection } = useConnection();

  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className=" py-6 text-xl grid grid-flow-col justify-start items-center gap-4">
            {/* <FaDiscord />
            <FaTwitter />
            <button
              className=""
              onClick={() =>
                setTheme(() => setTheme(theme === "dark" ? "light" : "dark"))
              }
            >
              {theme === "dark" ? <FaMoon /> : <FaSun />}
            </button> */}
            {wallet?.connected ? <img src={LogoImage} alt="" className="w-64" /> : <img src={GifFlip} alt="" className="w-24" />}
            {/* <img src={LogoImage} alt="" className="" /> */}
            {/* <img src={GifFlip} alt="" className="w-24" /> */}
          </div>
          <div>

            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <WalletMultiButton>
                {wallet?.connected ? "" : "Enter here to Flip?"}
              </WalletMultiButton>
            </div>

            {/* <button
              className="bg-blue-600 py-2 px-5 rounded-lg  text-lg font-medium  text-white"
              onClick={() => setConnected((prev) => !prev)}
            >
              Select Wallet
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
