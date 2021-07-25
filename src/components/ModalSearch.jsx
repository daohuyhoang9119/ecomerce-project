import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { useTranslate } from "../core/Translate";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ModalSearchInput from "./ModalSearchInput";


export default function ModalSearch() {
  let { t } = useTranslate();


  function handleSearch(newSearchValue){
    console.log(`New search value : ${newSearchValue}`);
  }


  return ReactDOM.createPortal(
    <div
      className="modal fixed-right fade"
      id="modalSearch"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-vertical" role="document">
        <div className="modal-content">
          {/* Close */}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">{t("Search Products")}</strong>
          </div>
          {/* Body: Form */}
          <div className="modal-body">
            <ModalSearchInput onSubmit={handleSearch} />
          </div>
          {/* Body: Results (add `.d-none` to disable it) */}
          <div className="modal-body border-top font-size-sm">
            {/* Heading */}
            <p>{t("Search Results:")}</p>
            {/* Items */}
            <div className="row align-items-center position-relative mb-5">
              <div className="col-4 col-md-3">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="/img/products/product-5.jpg"
                  alt="..."
                />
              </div>
              <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                  <a className="stretched-link text-body" href="./product.html">
                    {t("Leather mid-heel Sandals")}
                  </a>{" "}
                  <br />
                  <span className="text-muted">$129.00</span>
                </p>
              </div>
            </div>
            <div className="row align-items-center position-relative mb-5">
              <div className="col-4 col-md-3">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="/img/products/product-6.jpg"
                  alt="..."
                />
              </div>
              <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                  <a className="stretched-link text-body" href="./product.html">
                    {t("Cotton floral print Dress")}
                  </a>{" "}
                  <br />
                  <span className="text-muted">$40.00</span>
                </p>
              </div>
            </div>
            <div className="row align-items-center position-relative mb-5">
              <div className="col-4 col-md-3">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="/img/products/product-7.jpg"
                  alt="..."
                />
              </div>
              <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                  <a className="stretched-link text-body" href="./product.html">
                    {t("Leather Sneakers")}
                  </a>{" "}
                  <br />
                  <span className="text-primary">$85.00</span>
                </p>
              </div>
            </div>
            <div className="row align-items-center position-relative mb-5">
              <div className="col-4 col-md-3">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="/img/products/product-8.jpg"
                  alt="..."
                />
              </div>
              <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                  <a className="stretched-link text-body" href="./product.html">
                    {t("Cropped cotton Top")}
                  </a>{" "}
                  <br />
                  <span className="text-muted">$29.00</span>
                </p>
              </div>
            </div>
            <div className="row align-items-center position-relative mb-5">
              <div className="col-4 col-md-3">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="/img/products/product-9.jpg"
                  alt="..."
                />
              </div>
              <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                  <a className="stretched-link text-body" href="./product.html">
                    {t("Floral print midi Dress")}
                  </a>{" "}
                  <br />
                  <span className="text-muted">$50.00</span>
                </p>
              </div>
            </div>
            {/* Button */}
            <Link className="btn btn-link px-0 text-reset" to="/shop">
              View All <i className="fe fe-arrow-right ml-2" />
            </Link>
          </div>
          {/* Body: Empty (remove `.d-none` to disable it) */}
          <div className="d-none modal-body">
            {/* Text */}
            <p className="mb-3 font-size-sm text-center">
              {t("Nothing matches your search")}
            </p>
            <p className="mb-0 font-size-sm text-center">😞</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
