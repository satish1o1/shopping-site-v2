import { Fragment } from "react";
import { ReactComponent as CrownSvg } from "../../assests/crown.svg";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownSvg />
        </Link>

        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            {" "}
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
