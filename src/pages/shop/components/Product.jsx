import {Link} from "react-router-dom";


export default function Product({badges,thumbnail_url, slug, name, price,real_price,rating_average}){
    return(
        <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                  {/* Badge */}
                  <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    {badges?.text}
                  </div>
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    <Link className="card-img-hover" to={`/shop/${slug}`}>
                      <img
                        className="card-img-top card-img-back"
                        src={thumbnail_url}
                        alt="..."
                      />
                      <img
                        className="card-img-top card-img-front"
                        src={thumbnail_url}
                        alt="..."
                      />
                    </Link>
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
                    {/* <div className="font-size-xs">
                      <a className="text-muted" href="shop.html">
                        Shoes
                      </a>
                    </div> */}
                    <div className="font-size-xs product-rating" >
                        <span>{rating_average} ⭐</span>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                      <Link className="text-body" to={`/shop/${slug}`}>
                        {name}
                      </Link>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold">
                        <span className="font-size-xs text-gray-350 text-decoration-line-through">{price}</span>
                        <span className="text-primary">{real_price}</span>
                    </div>
                    {/* <div className="font-weight-bold text-muted">$129.00</div> */}
                  </div>
                </div>
              </div>


    )
}