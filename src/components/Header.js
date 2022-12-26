import Menu from "./Menu";
import Popup from "reactjs-popup";
import logo from "./../img/Logo.jpg";
import "./../index.css";
import "./styleSheet.css";

const Header = ({ showMenu }) => {
  const onClick = () => {};
  return (
    <header className="header">
      <div className="header-container">
        {/* <div className="bsticky"> */}
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
          <h3 className="headerLogo">Danielle Williams</h3>
        </div>

        {/* <div className="btn"> */}
        <div>
          <Popup trigger={<button className="menuButton"> Menu </button>}>
            <Menu />
          </Popup>
          {/* <button className="menuButton">Menu</button> */}
          {/* <Menu onClick={onClick} /> */}
        </div>
        {/* <div>{showMenu && <Menu onClick={onClick} />}</div> */}
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
