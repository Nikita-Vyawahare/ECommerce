import React, { Fragment, useEffect } from "react";
import { CiDesktopMouse2 } from "react-icons/ci";
import "./Home.css";
import ProductCard from "./ProductCard.js";
//import MetaData from "../layout/MetaData";
//import { clearErrors, getProduct } from "../../actions/productAction";
//import { useSelector, useDispatch } from "react-redux";
//import Loader from "../layout/Loader/Loader";
//import { useAlert } from "react-alert";

const Home = () => {
 // const { loading, error, products } = useSelector((state) => state.products);

const product={
    name:"Blue Tshirt",
    images:[{url:"data:image/jpeg;base64,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"}],
    price:"3000",
    _id:"idtest"
}
  return (
    <Fragment>
        <Fragment>
          <div class="banner" title="ECOMMERCE" >
            <p>Welcome to</p>
            <h1>ECommerce</h1>
          </div>

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CiDesktopMouse2 />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
           
                <ProductCard key={product._id} product={product} />
          </div>
        </Fragment>
      
    </Fragment>
  );
};

export default Home;