import React, { MouseEventHandler } from "react";

import styles from "./index.module.scss";

interface SquareParamsType {
  ClickEven: MouseEventHandler<HTMLButtonElement>;
  squareState: string;
}

const Square = (params: SquareParamsType) => {
  const { ClickEven, squareState } = params;
  return (
    <button className={styles.square} onClick={ClickEven}>
      {squareState}
    </button>
  );
};

export default Square;
