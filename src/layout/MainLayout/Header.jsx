import React from "react";
import useTranslate from "../../core/useTranslate";
import { NavLink } from "react-router-dom";

function Header() {
  let { t } = useTranslate();
  return (
    <>
      {/* NAVBAR */}
      <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
          {/* Promo */}
          <div className="mr-xl-8">
            <i className="fe fe-truck mr-2" />{" "}
            <span className="heading-xxxs">{t("Free shipping worldwide")}</span>
          </div>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#topbarCollapse"
            aria-controls="topbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="topbarCollapse">
            {/* Nav */}
            <ul className="nav nav-divided navbar-nav mr-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  <img
                    className="mb-1 mr-1"
                    src="/img/flags/usa.svg"
                    alt="..."
                  />{" "}
                  {t("United States")}
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/usa.svg"
                      alt="USA"
                    />
                    {t("United States")}
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/canada.svg"
                      alt="Canada"
                    />
                    {t("Canada")}
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/germany.svg"
                      alt="Germany"
                    />
                    {t("Germany")}
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  {t("USD")}
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    {t("USD")}
                  </a>
                  <a className="dropdown-item" href="#!">
                    {t("EUR")}
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  {t("English")}
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#">
                    {t("English")}
                  </a>
                  <a className="dropdown-item" href="#">
                    {t("French")}
                  </a>
                  <a className="dropdown-item" href="#">
                    {t("German")}
                  </a>
                </div>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav mr-8">
              <li className="nav-item">
                <a className="nav-link" href="./shipping-and-returns.html">
                  {t("Shipping")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./faq.html">
                  {t("FAQ")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./contact-us.html">
                  {t("Contact")}
                </a>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Brand */}
          <NavLink className="navbar-brand" to="/">
            {t("Shopper.")}
          </NavLink>
          {/* <NavLink to={`${path}/course`}>Khóa học của bạn</NavLink> */}
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink className="nav-link" data-toggle="dropdown" to="/">
                  {t("Home")}
                </NavLink>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown position-static">
                {/* Toggle */}
                <NavLink
                  className="nav-link"
                  data-toggle="dropdown"
                  to="/page-404"
                >
                  {t("Catalog")}
                </NavLink>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink className="nav-link" data-toggle="dropdown" to="/shop">
                  {t("Shop")}
                </NavLink>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink
                  className="nav-link"
                  data-toggle="dropdown"
                  to="/about"
                >
                  {t("Pages")}
                </NavLink>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink className="nav-link" data-toggle="dropdown" to="/blog">
                  {t("Blog")}
                </NavLink>
                {/* Menu */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/page-404">
                  {t("Docs")}
                </NavLink>
              </li>
            </ul>
            {/* Nav */}
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                  <i className="fe fe-search" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" href="./account-orders.html">
                  <i className="fe fe-user" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" href="./account-wishlist.html">
                  <i className="fe fe-heart" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a
                  className="nav-link"
                  data-toggle="modal"
                  href="#modalShoppingCart"
                >
                  <span data-cart-items={2}>
                    <i className="fe fe-shopping-cart" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
