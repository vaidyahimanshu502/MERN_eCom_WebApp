import React from "react";
import { NavLink, Link } from "react-router-dom";
import { TbHexagonLetterH } from "react-icons/tb";
import { RxStitchesLogo } from "react-icons/rx";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/Cart";
import { FaOpencart } from "react-icons/fa";

function Header() {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();

  //state for cart
  const [cart] = useCart([]);

  //handling functionality of LogOut
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("User Logged-Out Successfuly!");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand fire">
              <TbHexagonLetterH className="brand-icon" /> Daily-Mart
              <br />
              <p className="slogan">
                <RxStitchesLogo /> A Beter Choice...
              </p>
            </Link>
            <SearchInput />
            {/* Shifting all links to the right -- by replacing 'me-auto' with 'ms-auto' class of bootstrap */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All-Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c._id}>
                      {/* {console.log(c.slug)} */}
                      <Link
                        to={`/category/${c.slug}`}
                        className="dropdown-item"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      SignUp
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      LogIn
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogOut}
                          to="/login"
                          className="dropdown-item"
                        >
                          LogOut
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item">
                        <NavLink
                          onClick={handleLogOut}
                          to="/login"
                          className="dropdown-item"
                        >
                          LogOut
                        </NavLink>
                      </li> */}
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link cart-link">
                  <FaOpencart className="cart-icon" /> <h4>{cart?.length}</h4>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
