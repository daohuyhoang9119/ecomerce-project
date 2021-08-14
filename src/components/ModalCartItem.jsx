import React from "react";
import {useTranslate} from "../core/Translate";
import { useDispatch } from 'react-redux';

import {removeCart,decrease,increase} from "../redux/action/cartAction"
import {FormatCurrency} from "../utils/FormatCurrency";

export default function ModalCartItem(props) {
  let { t } = useTranslate();
  const dispatch = useDispatch();

  function handleRemoveCart(e){
    console.log('vao phan xoa');
    e.preventDefault();
    dispatch(removeCart(props._id))
  } 

  console.log(props.numCart);


  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-3">
          {/* Image */}
          <a href="product.html">
            <img
              src={props.thumbnail_url}
              alt="..."
              className="img-fluid"
            />
          </a>
        </div>
        <div className="col">
          {/* Title */}
          <div className="d-flex mb-2 font-weight-bold cart-item-scss">
            <a className="text-body" href="product.html">
              {props.name}
            </a>{" "}
            <span className="text-muted">{FormatCurrency(props.real_price)} VND</span>
          </div>
          {/* Text */}
          {/* <p className="mb-7 font-size-sm text-muted">{t("Color: Brown")} </p> */}
          {/*Footer */}
          <div className="d-flex align-items-center count_remove_scss">
            {/* Select */}
            <div className="add">
              <button
                  className="plus"
                  onClick={() => {
                    dispatch(decrease(props._id));
                  }}
                >
                  -
              </button>
              <input
                value={props.numCart}
                type='text'
                className="custom-select custom-select-xxs w-auto"
              />
              <button
                className="minus"
                onClick={() => {
                  dispatch(increase(props._id));
                }}
              >
                +
              </button>
            </div>
            {/* Remove */}
            <a className="font-size-xs text-gray-400 ml-auto" href="#!" onClick={handleRemoveCart}>
              <i className="fe fe-x" /> {t("Remove")}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

//dispatch(removeCart(props._id))