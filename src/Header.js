import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "@material-ui/core/Link";
import { ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import "./Header.css";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link href="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link href={!user && "/login"} color="inherit" underline="none">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>

            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link href={user && "/orders"} color="inherit" underline="none">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link href="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
