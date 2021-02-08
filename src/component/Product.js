//use state allows us to create the state
import React, { useState } from "react";
import products from "../json/data.json";
import ProductCards from "../component/ProductCards";
import Select from "react-select";
import "../styles/Product.css";

const options = [
  { value: "0", label: "Filter By" },
  { value: "1", label: "Lowest To Highest Price" },
  { value: "2", label: "Highest To Lowest Price" },
];


function Product() {
  //changing the filter value allowinf it to move back and forth from 0-2
  const [filterValue, setFilterValue] = useState("0");

  const handleChange = (selectOption) => {
    setFilterValue(selectOption.value);
  };

  let data = products.products.slice();
  if(filterValue === "0"){
    data = products.products.slice();
  }else if(filterValue ==="1"){
    data.sort( (a,b) => {
      return a.Price - b.Price
    })
  }else{
    data.sort( (a,b) =>{
      return b.Price - a.price
    })
  }

  return (
    <>
    <Select
    value={options.find(obj => obj.value === filterValue)}
    onChange={handleChange}
    options={options}
    />
      <options value={filterValue} onChange={handleChange}></options>

      <section className="grid">
        {data.map((prod) => (
          <ProductCards
            name={prod.productName}
            imgSrc={prod.imgSrc}
            price={prod.Price}
            description={prod.Description}
            imageAlt={`${prod.productName}`}
            key={prod.id}
          />
        ))}
      </section>
    </>
  );
}

export default Product;
