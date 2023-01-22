import Menu from "./Menu";
import Popup from "reactjs-popup";
import Modal from "react-modal";
import logo from "./../img/Logo.jpg";
import "./../index.css";
import "./styleSheet.css";

const Header = ({ showMenu }) => {
  const onClick = () => {};
  return (
    <div>
      <header className="header">
        <div className="header">
          <div className="nameAndLogo">
            <img
              className="headerLogo"
              src={logo}
              alt="logo"
              s
              style={{
                width: "20%",
              }}
            />
            <h1 className="headerLogo">Danielle Williams</h1>
          </div>
        </div>
      </header>
      <div>
        {/* <Modal trigger={<button className="menuButton"> Menu </button>}>
          <Menu />
        </Modal> */}
        <Popup trigger={<button className="menuButton"> Menu </button>}>
          <Menu />
        </Popup>
      </div>
    </div>
  );
};

export default Header;
