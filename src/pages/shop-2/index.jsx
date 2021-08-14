import React, {useEffect} from "react";

import ContentShop from "./components/Content";

import { useDispatch, useSelector } from 'react-redux';
import { convertQueryToObj,convertObjToQuery } from "../../utils";
import { categoryAction } from './../../redux/action/productAction';


export default function Shop2() {
    let dispatch = useDispatch();
    let { product, categories } = useSelector(store => store.productReducer)
    let url = convertQueryToObj();
    let str =  convertObjToQuery(url);

    useEffect(()=>{
        dispatch(categoryAction());


    },[str])



  return (
    <ContentShop product={product} categories={categories}/>    
  );
}
