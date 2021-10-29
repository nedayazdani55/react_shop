import { useState } from "react";
import "./product.css";

function Product({ n, title, oldPrice, price }) {
  const [state2, setState2] = useState(0);
  const icreaseNumber = () => {
    setState2(state2 + 1);
  };

  const [color, setColor] = useState("");

  return (
    <div className="item-pro">
      <div>{n}</div>
      <img src="image/autocad.jpg" className="aut-img" />
      <div className="properties">
        <div className="ti-pro">{title}</div>
        <div className="old-price">{oldPrice} تومان</div>
        <div className="pri-pro">{price} تومان</div>
      </div>

      <span className="number-prouduct">{state2}</span>
      <button onClick={() => setState2(state2 + 1)}>مشاهده</button>

      <span className={color}>text</span>
      <button onClick={() => setColor("yellow")}> هایلایت کن</button>
    </div>
  );
}

export default Product;
