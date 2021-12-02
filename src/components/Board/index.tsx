import React from "react";
import styles from "./index.module.scss";
import Square from "../Square";

interface BoardParamsType {
  handleClick: Function;
  boardState: Array<"O" | "X" | null>;
}

const Board = (params: BoardParamsType) => {
  const { handleClick, boardState } = params;

  //传递一个数字参数生成一个小格子
  const renderSquare = (i: number) => {
    return (
      <Square
        ClickEven={() => {
          handleClick(i);
        }}
        squareState={boardState[i - 1]}
      />
    );
  };

  return (
    <div className={styles.board}>
      <div className={styles.row}>
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className={styles.row}>
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className={styles.row}>
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
    </div>
  );
};

export default Board;
