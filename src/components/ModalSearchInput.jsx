import React,{useEffect, useState, useRef} from "react";
import { useTranslate } from "../core/Translate";
import { useSelector, useDispatch } from "react-redux";
import { categoryAction } from './../redux/action/productAction';



export default function ModalSearchInput(props){
    let { t } = useTranslate();
    const dispatch = useDispatch();
    
    //category
    let { categories } = useSelector((store) => store.productReducer);
  
    useEffect(()=>{
      dispatch(categoryAction())
    },[])


    //search
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimoutRef = useRef(null);

    function handleSearchTermChange(e){
        const value = e.target.value
        setSearchTerm(value);

        if(typingTimoutRef.current){
            clearTimeout(typingTimoutRef.current);
        }

        typingTimoutRef.current = setTimeout(()=>{
            onSubmit(searchTerm);  
        },1000)

        // const formValues = {
        //     searchTerm: searchTerm,
        // };
        
    }

    return (
        <form >
            <div className="form-group">
                <label className="sr-only" htmlFor="modalSearchCategories">
                    {t("Categories:")}
                </label>
                <select className="custom-select" id="modalSearchCategories">
                    <option selected>{t("All Categories")}</option>
                    {/* <option>{t("Women")}</option>
                    <option>{t("Men")}</option>
                    <option>{t("Kids")}</option> */}
                    {
                    categories.map((item) => (
                        <option>{item.title}</option>
                    ))
                    }
                </select>
            </div>
              <div className="input-group input-group-merge">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-border" type="submit">
                      <i className="fe fe-search" />
                    </button>
                  </div>
              </div>
        </form>
    )
}