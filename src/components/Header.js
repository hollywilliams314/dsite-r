import Menu from "./Menu";
import Popup from "reactjs-popup";
import Modal from "react-modal";
import logo from "./../img/Logo.jpg";
import "./../index.css";
import "./styleSheet.css";

const Header = ({ showMenu }) => {
  const onClick = () => {};
  return (
    <header className="header">
      <div style={{ display: "flex" }}>
        <div className="nameAndLogo">
          <img
            className="headerLogo"
            src={logo}
            alt="logo"
            s
            style={{
              width: "225px",
            }}
          />
        </div>
        <Popup
          trigger={(open) => (
            <button open={open} className="menuButton" closeOnDocumentClick>
              {" "}
              Menu{" "}
            </button>
          )}
        >
          <Menu />
        </Popup>
      </div>
      <h1 className="nameAndLogo">Danielle Williams</h1>
    </header>
  );
};

export default Header;
