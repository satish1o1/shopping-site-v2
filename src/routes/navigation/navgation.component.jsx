import { Fragment } from "react";
import { ReactComponent as CrownSvg } from "../../assests/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart-context";
import { signOutUser } from "../../utilities/firebase.utility";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";
const Navigation = () => {
   const { currentUser } = useContext(UserContext);
   const {isCartOpen}  = useContext(CartContext)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownSvg />
        </Link>

        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGNOUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGNIN
            </Link>
              )}
         <CartIcon />
           </div>
           {
              isCartOpen && <CartDropdown />
              
          }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
