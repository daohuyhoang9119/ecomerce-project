import React from "react";
import { NavLink } from "react-router-dom";

function TopSellers() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            {/* Heading */}
            <h2 className="mb-4 text-center">Top month Sellers</h2>
            {/* Nav */}
            <div className="nav justify-content-center mb-10">
              <a
                className="nav-link active"
                href="#topSellersTab"
                data-toggle="tab"
              >
                Women
              </a>
              <a className="nav-link" href="#topSellersTab" data-toggle="tab">
                Men
              </a>
              <a className="nav-link" href="#topSellersTab" data-toggle="tab">
                Kids
              </a>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="topSellersTab">
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3">
                {/* Card */}
                <div className="card mb-7">
                  {/* Badge */}
                  <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                  </div>
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    <NavLink className="card-img-hover" to="/product">
                      <img
                        className="card-img-top card-img-back"
                        src="/img/products/product-120.jpg"
                        alt="..."
                      />
                      <img
                        className="card-img-top card-img-front"
                        src="/img/products/product-5.jpg"
                        alt="..."
                      />
                    </NavLink>
                    {/* Actions */}
                    <div className="card-actions">
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="modal"
                          data-target="#modalProduct"
                        >
                          <i className="fe fe-eye" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-shopping-cart" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-heart" />
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                      <a className="text-muted" href="shop.html">
                        Shoes
                      </a>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                      <a className="text-body" href="product.html">
                        Leather mid-heel Sandals
                      </a>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">$129.00</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                {/* Card */}
                <div className="card mb-7">
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    <NavLink className="card-img-hover" to="/product">
                      <img
                        className="card-img-top card-img-back"
                        src="/img/products/product-121.jpg"
                        alt="..."
                      />
                      <img
                        className="card-img-top card-img-front"
                        src="/img/products/product-6.jpg"
                        alt="..."
                      />
                    </NavLink>
                    {/* Actions */}
                    <div className="card-actions">
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="modal"
                          data-target="#modalProduct"
                        >
                          <i className="fe fe-eye" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-shopping-cart" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-heart" />
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                      <NavLink className="text-muted" to="/product">
                        Dresses
                      </NavLink>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                      <NavLink className="text-body" to="/product">
                        Cotton floral print Dress
                      </NavLink>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">$40.00</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                {/* Card */}
                <div className="card mb-7">
                  {/* Badge */}
                  <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                    Sale
                  </div>
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    <NavLink className="card-img-hover" to="/product">
                      <img
                        className="card-img-top card-img-back"
                        src="/img/products/product-122.jpg"
                        alt="..."
                      />
                      <img
                        className="card-img-top card-img-front"
                        src="/img/products/product-7.jpg"
                        alt="..."
                      />
                    </NavLink>
                    {/* Actions */}
                    <div className="card-actions">
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="modal"
                          data-target="#modalProduct"
                        >
                          <i className="fe fe-eye" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-shopping-cart" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-heart" />
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                      <NavLink className="text-muted" to="/product">
                        Shoes
                      </NavLink>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                      <NavLink className="text-body" to="/product">
                        Leather Sneakers
                      </NavLink>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold">
                      <span className="font-size-xs text-gray-350 text-decoration-line-through">
                        $85.00
                      </span>
                      <span className="text-primary">$85.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                {/* Card */}
                <div className="card mb-7">
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    <NavLink to="/product">
                      <img
                        className="card-img-top card-img-front"
                        src="/img/products/product-8.jpg"
                        alt="..."
                      />
                    </NavLink>
                    {/* Actions */}
                    <div className="card-actions">
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="modal"
                          data-target="#modalProduct"
                        >
                          <i className="fe fe-eye" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-shopping-cart" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-heart" />
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                      <NavLink className="text-muted" to="/product">
                        Tops
                      </NavLink>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                      <NavLink className="text-body" to="/product">
                        Cropped cotton Top
                      </NavLink>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">$29.00</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                {/* Card */}
                <div className="card mb-7">
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    <NavLink to="/product">
                      <img
                        className="card-img-top card-img-front"
                        src="/img/products/product-9.jpg"
                        alt="..."
                      />
                    </NavLink>
                    {/* Actions */}
                    <div className="card-actions">
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="modal"
                          data-target="#modalProduct"
                        >
                          <i className="fe fe-eye" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-shopping-cart" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-heart" />
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                      <NavLink className="text-muted" to="/product">
                        Dresses
                      </NavLink>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                      <NavLink className="text-body" to="/product">
                        Floral print midi Dress
                      </NavLink>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">$50.00</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                {/* Card */}
                <div className="card mb-7">
                  {/* Badge */}
                  <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                    Sale
                  </div>
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    <NavLink className="card-img-hover" to="/product">
                      <img
                        className="card-img-top card-img-back"
                        src="/img/products/product-123.jpg"
                        alt="..."
                      />
                      <img
                        className="card-img-top card-img-front"
                        src="/img/products/product-10.jpg"
                        alt="..."
                      />
                    </NavLink>
                    {/* Actions */}
                    <div className="card-actions">
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="modal"
                          data-target="#modalProduct"
                        >
                          <i className="fe fe-eye" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-shopping-cart" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-heart" />
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                      <NavLink className="text-muted" to="/product">
                        Bags
                      </NavLink>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                      <NavLink className="text-body" to="/product">
                        Suede cross body Bag
                      </NavLink>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold">
                      <span className="font-size-xs text-gray-350 text-decoration-line-through">
                        $79.00
                      </span>
                      <span className="text-primary">$49.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                {/* Card */}
                <div className="card mb-7">
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    <NavLink className="card-img-hover" to="/product">
                      <img
                        className="card-img-top card-img-back"
                        src="/img/products/product-124.jpg"
                        alt="..."
                      />
                      <img
                        className="card-img-top card-img-front"
                        src="/img/products/product-11.jpg"
                        alt="..."
                      />
                    </NavLink>
                    {/* Actions */}
                    <div className="card-actions">
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="modal"
                          data-target="#modalProduct"
                        >
                          <i className="fe fe-eye" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-shopping-cart" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-heart" />
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                      <NavLink className="text-muted" to="/shop">
                        Skirts
                      </NavLink>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                      <NavLink className="text-body" to="/product">
                        Printed A-line Skirt
                      </NavLink>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">$79.00</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                {/* Card */}
                <div className="card mb-7">
                  {/* Badge */}
                  <div className="badge badge-white card-badge card-badge text-uppercase">
                    New
                  </div>
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    <NavLink to="/product">
                      <img
                        className="card-img-top card-img-front"
                        src="/img/products/product-12.jpg"
                        alt="..."
                      />
                    </NavLink>
                    {/* Actions */}
                    <div className="card-actions">
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="modal"
                          data-target="#modalProduct"
                        >
                          <i className="fe fe-eye" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-shopping-cart" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-heart" />
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                      <NavLink className="text-muted" to="/product">
                        Shoes
                      </NavLink>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                      <NavLink className="text-body" to="/product">
                        Heel strappy Sandals
                      </NavLink>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">$90.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Link  */}
            <div className="mt-7 text-center">
              <NavLink className="link-underline" to="/product">
                Discover more
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSellers;
