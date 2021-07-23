import React from "react";
import {useTranslate} from "../core/Translate";

export default function ModalCartItem() {
  let { t } = useTranslate();
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-3">
          {/* Image */}
          <a href="product.html">
            <img
              src="/img/products/product-10.jpg"
              alt="..."
              className="img-fluid"
            />
          </a>
        </div>
        <div className="col">
          {/* Title */}
          <div className="d-flex mb-2 font-weight-bold">
            <a className="text-body" href="product.html">
              name
            </a>{" "}
            <span className="ml-auto">price</span>
          </div>
          {/* Text */}
          <p className="mb-7 font-size-sm text-muted">{t("Color: Brown")} </p>
          {/*Footer */}
          <div className="d-flex align-items-center">
            {/* Select */}
            <input
              value='1'
              className="custom-select custom-select-xxs w-auto"
            />
            {/* Remove */}
            <a className="font-size-xs text-gray-400 ml-auto" href="#!">
              <i className="fe fe-x" /> {t("Remove")}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
