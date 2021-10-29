import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Shop from "./components/Shop";

function App() {
  const [state1, setState1] = useState(1);

  // let number=1;

  const icreaseNumber = () => {
    //   let counter=  document.getElementById("number-click").innerText;
    //   ++counter;
    //   document.getElementById("number-click").innerText=++counter;

    // number++;
    // console.log(number);

    setState1(state1 + 1);
  };

  return (
    <>
      <div id="number-click">{state1}</div>

      {/* <Header/>
            <Main/>
            <Footer/> */}
      <Shop number={5}></Shop>
    </>
  );
}

export default App;
