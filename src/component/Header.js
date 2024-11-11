import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
