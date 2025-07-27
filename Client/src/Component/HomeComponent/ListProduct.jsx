import React, { useEffect, useState } from "react";
import { ProductCard } from "../ShopComponent/ProductCard";
import axiosFetch from "../../Helper/Axios";

export const ListProduct = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const [data, setData] = useState([]);
  const fatchData = async () => {

    const response = await axiosFetch({
      "url": "product/",
      "method": "GET",
    });
    setData(response.data);
    console.log(data);
  };



   useEffect(() => {
     fatchData();
   }, []);


  return (
    <>
      <section id="products" className="section product">
        <div className="container">
          <p className="section-subtitle"> -- Medicines --</p>
          <h2 className="h2 section-title">All Branded & Generic Medicines</h2>
          <ul className="filter-list">
            <li>
              <button className="filter-btn active">
                <img
                  src="./images/filter-1.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Medicines</p>
              </button>
            </li>
            <li>
              <button className="filter-btn">
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Generics</p>
              </button>
            </li>
            <li>
              <button className="filter-btn">
                <img
                  src="./images/filter-3.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-3-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Orthopaedics</p>
              </button>
            </li>
            <li>
              <button className="filter-btn">
                <img
                  src="./images/filter-1.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Wellness</p>
              </button>
            </li>
          </ul>
          <ul className="grid-list">
            {/* {data.map((item) =>

              <ProductCard key={item.productid} id={item.productid} name={item.productName} description={item.description} price={item.price} img={item.img} />

            )} */}
          </ul>
        </div>
      </section>
    </>
  );
};
