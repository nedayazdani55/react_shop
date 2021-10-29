import React from "react";
import Product from "./Product";

function Products({ num }) {
  const productsList = [
    { title: "اتوکد", price: "1800000", oldPrice: "20000000" },
    { title: "سالید ورک", price: "1800000", oldPrice: "20000000" },
    { title: "مکانیکال", price: "1800000", oldPrice: "20000000" },
    { title: "کتیاد", price: "1800000", oldPrice: "20000000" },
    { title: "آباکوس", price: "1800000", oldPrice: "20000000" },
    { title: "انسیس", price: "1800000", oldPrice: "20000000" },
    { title: "پاورمیل", price: "1800000", oldPrice: "20000000" },
  ];

  return (
    <section className="box">
      <div id="box-productions">
        <span className="productions-ti">محصولات</span>
        <div className="box1-pro">
          {productsList.map((item) => (
            <Product
              n={num}
              title={item.title}
              price={item.oldPrice}
              oldPrice={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
