import React from "react";
import { useTranslate } from "../../../core/Translate";
import { NavLink } from "react-router-dom";

function BestPicks() {
  let { t } = useTranslate();
  return (
    <section className="pt-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
            {/* Preheading */}
            <h6 className="heading-xxs mb-3 text-gray-400">
              {t("New Collection")}
            </h6>
            {/* Heading */}
            <h2 className="mb-4">{t("Best Picks 2019")}</h2>
            {/* Subheading */}
            <p className="mb-10 text-gray-500">
              {t(`Appear, dry there darkness they're seas, dry waters thing fly
              midst. Beast, above fly brought Very green.`)}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
            {/* Card */}
            <div
              className="card mb-7 text-white"
              style={{
                minHeight: "400px",
                backgroundImage: "url(/img/products/product-1.jpg)",
              }}
            >
              {/* Background */}
              <div className="card-bg">
                <div
                  className="card-bg-img bg-cover"
                  style={{
                    backgroundImage: "url(/img/products/product-1.jpg)",
                  }}
                />
              </div>
              {/* Body */}
              <div className="card-body my-auto text-center">
                {/* Heading */}
                <h4 className="mb-0">{t("Bags Collection")}</h4>
                {/* Link */}
                <NavLink
                  className="btn btn-link stretched-link text-reset"
                  to="/shop"
                >
                  {t("Shop Now")}
                  <i className="fe fe-arrow-right ml-2" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
            {/* Card */}
            <div className="card mb-7 text-body" style={{ minHeight: "400px" }}>
              {/* Background */}
              <div className="card-bg">
                <div
                  className="card-bg-img bg-cover"
                  style={{
                    backgroundImage: "url(/img/products/product-2.jpg)",
                  }}
                />
              </div>
              {/* Body */}
              <div className="card-body my-auto px-md-10 text-center text-md-left">
                {/* Circle */}
                <div className="card-circle card-circle-lg card-circle-right">
                  <strong>{t("save")}</strong>
                  <span className="font-size-h4 font-weight-bold">30%</span>
                </div>
                {/* Heading */}
                <h4 className="mb-0">{t("Printed men’s Shirts")}</h4>
                {/* Link */}
                <NavLink
                  className="btn btn-link stretched-link px-0 text-reset"
                  to="/shop"
                >
                  {t("Shop Now")}
                  <i className="fe fe-arrow-right ml-2" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
            {/* Card */}
            <div
              className="card mb-7 mb-md-0 text-body"
              style={{ minHeight: "400px" }}
            >
              {/* Background */}
              <div className="card-bg">
                <div
                  className="card-bg-img bg-cover"
                  style={{
                    backgroundImage: "url(/img/products/product-3.jpg)",
                  }}
                />
              </div>
              {/* Body */}
              <div className="card-body my-auto px-md-10 text-center text-md-left">
                {/* Heading */}
                <h4 className="mb-0">{t("Basic women’s Dresses")}</h4>
                {/* Link */}
                <NavLink
                  className="btn btn-link stretched-link px-0 text-reset"
                  to="/shop"
                >
                  {t("Shop Now")} <i className="fe fe-arrow-right ml-2" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
            {/* Card */}
            <div className="card text-white" style={{ minHeight: "400px" }}>
              {/* Background */}
              <div className="card-bg">
                <div
                  className="card-bg-img bg-cover"
                  style={{
                    backgroundImage: "url(/img/products/product-4.jpg)",
                  }}
                />
              </div>
              {/* Body */}
              <div className="card-body my-auto text-center">
                {/* Heading */}
                <h4 className="mb-0">{t("Sweatshirts")}</h4>
                {/* Link */}
                <NavLink
                  className="btn btn-link stretched-link text-reset"
                  to="/shop"
                >
                  {t("Shop Now")}
                  <i className="fe fe-arrow-right ml-2" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestPicks;
