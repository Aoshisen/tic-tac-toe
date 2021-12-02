import React from "react";
import style from "./App.module.scss";

import Board from "./components/Board";

const App = () => {
  //需要明确的一点，在最外层的地方 需要有borderState 和点击函数 并且点击函数需要调用caculateWinner函数

  return (
    <>
      <div className={style.app}>this is app</div>
      <Board />
    </>
  );
};

export default App;
