import React from "react";
import Products from "../Products";

import './shop.css';

const Shop = ({number}) => {


  return(
    <div>
      <header>
        <div id="top-header">
          <div id="connect-header">
            <div id="email">
              <span>n.yazdani5051@gmail.com</span>
              <i className="icon-envelope-o icon-header"></i>
            </div>
            <div id="phone">
              <span>09137855944</span>
              <i className="icon-mobile icon-header"></i>
              <i className="icon-social-whatsapp-outline icon-header"></i>
            </div>
          </div>
          <div id="left-header">
            <div id="register">
              <a id="login" href="login.html">
                ورود
              </a>
              <a id="signup" href="signup.html">
                {" "}
                عضویت
              </a>
            </div>

            <a href="shop.html" id="basket">
              <i className="icon-shopping-cart-3"></i>
              <span id="number-basket" className="number-basket">
                0
              </span>
            </a>
          </div>
        </div>

        <div id="down-header">
          <img src="image/logo.png" id="logo" />

          <ul id="menu">
            <li className="super-menu">
              <a href="" className="title-menu">
                محصولات
              </a>
              <ul className="sub-list">
                <li className="sub-item">
                  <a href="">فیلم های آموزشی</a>
                </li>
                <li className="sub-item">
                  <a href="">کتاب های آموزشی</a>
                </li>
                <li className="sub-item">
                  <a href=""> مقالات</a>
                </li>
                <li className="sub-item">
                  <a href="">نرم افزارهای کمکی</a>
                </li>
                <li className="sub-item">
                  <a href="">نقشه های خام</a>
                </li>
              </ul>
            </li>
            <li className="super-menu">
              <a href="" className="title-menu">
                خدمات
              </a>
              <ul className="sub-list">
                <li className="sub-item">
                  <a href="">کلاس های آموزشی</a>
                </li>
                <li className="sub-item">
                  <a href="">کارگاه های آموزشی</a>
                </li>
                <li className="sub-item">
                  <a href="">معرفی نرم افزارها</a>
                </li>
                <li className="sub-item">
                  <a href="">مشاوره رایگان</a>
                </li>
              </ul>
            </li>

            <li className="super-menu">
              <a href="" className="title-menu">
                تماس با ما
              </a>
              <ul className="sub-list">
                <li className="sub-item">
                  <a href="">راه های ارتباطی</a>
                </li>
                <li className="sub-item">
                  <a href="">نمایندگان مجاز</a>
                </li>
              </ul>
            </li>
            <li className="super-menu">
              <a href="" className="title-menu">
                درباره ما
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <div className="top-slider">
          <img
            src="image/mechanical-engineering-software.jpg"
            className="slider1"
          />
        </div>
        <Products num={number}/>
       
      </main>

      <footer></footer>
    </div>
  );
};

export default Shop;
