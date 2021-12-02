import React from "react";
import style from "./App.module.scss";

import Board from "./components/Board";

const App = () => {
  return (
    <>
      <div className={style.app}>this is app</div>
      <Board />
    </>
  );
};

export default App;
