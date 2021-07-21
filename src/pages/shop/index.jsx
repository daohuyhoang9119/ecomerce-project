import React,{useEffect} from "react";
import CategoryLeft from './components/CategoryLeft';
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { useHistory, useRouteMatch } from 'react-router';
import { productAction } from "../../redux/action/productAction";
import {convertQueryToObj, convertObjToQuery} from "../.././utils";
import Product from "./components/Product";
import { Slider } from "./components/Slider";
import { LOADING } from "../../redux/type";
import Pagination from './../../components/Pagination';

function Shop() {
  const dispatch = useDispatch();
  let { product,category_name, loading, paginate } = useSelector((store) => store.productReducer);

  
  let url = convertQueryToObj();
  let pageParam = convertObjToQuery(url);


  let history = useHistory();
	let { path } = useRouteMatch();

	let obj = convertQueryToObj();

  function handleSort(e){
    obj.sort = e.target.value;
		let url = convertObjToQuery(obj);
		history.push(`${path}?${url}`);
  }

  
  useEffect( () => {  
    //category 
    // dispatch(categoryAction());
    
    //loading\
    dispatch({
      type: LOADING
    })
    //product
    dispatch(productAction(pageParam));
  },[pageParam])

  return (
    <section className="py-11">
      <div className="container">
        <div className="row">
          <CategoryLeft />
          <div className="col-12 col-md-8 col-lg-9">
            {/* Slider */}
            <Slider />
            {/* Header */}
            <div className="row align-items-center mb-7">
              <div className="col-12 col-md">
                {/* Heading */}
                {
                  category_name? <h3 className="mb-1">{category_name}</h3> : <h3 className="mb-1">Sản phẩm</h3>
                }
                {/* <h3 className="mb-1">{category_name}</h3> */}
                {/* Breadcrumb */}
                <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                  <li className="breadcrumb-item">
                    <Link className="text-gray-400" to="/">
                      Home
                    </Link>
                  </li>
                  {
                    category_name ? <li className="breadcrumb-item active">{category_name}</li> : <li className="breadcrumb-item active">Tất cả sản phẩm</li>
                  }
                  {/* <li className="breadcrumb-item active">{category_name}</li> */}
                </ol>
              </div>
              <div className="col-12 col-md-auto">
                {/* Select */}
                <select className="custom-select custom-select-xs" onChange={handleSort}>
                  <option value="">--Sắp xếp--</option>
                  <option value="real_price.-1">Giá cao</option>
                  <option value="real_price.1">Giá thấp</option>
                  <option value="rating_average.-1">Đánh giá cao</option>
                </select>
              </div>
            </div>
            {/* Tags */}
            <div className="row mb-7">
              <div className="col-12">
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  Shift dresses{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  Summer{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  M{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  White{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  Red{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  Adidas{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  $10.00 - $49.00{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  $50.00 - $99.00{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
              </div>
            </div>
            {/* Products */}
            <div className="row">
              {loading
                ? [...Array(15)].map((item,index) => <Product {...item} key={index} loading={true}/> )
                : product.map((item) => 
                  <Product {...item} key={item._id}/>
                )
              }
            </div>
            {/* Pagination */}
            <Pagination {...paginate}/> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
