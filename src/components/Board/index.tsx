import React, { useState } from "react";
import styles from "./index.module.scss";

const Board = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));

  const [xIsnext, setNextX] = useState(true);

  const RenderSquare = (i: number) => {
    const handleClick = (i: number) => {
      let fillIcon = xIsnext ? "X" : "O";

      boardState[i - 1] = fillIcon;

      //这里如果不使用...运算符的话组件就不会自动的判断组件更新
      setBoardState([...boardState]);

      setNextX(!xIsnext);
    };

    return (
      <button
        className={styles.square}
        onClick={() => {
          handleClick(i);
        }}
      >
        {boardState[i - 1]}
      </button>
    );
  };

  return (
    <div className={styles.board}>
      <div className={styles.row}>
        {RenderSquare(1)}
        {RenderSquare(2)}
        {RenderSquare(3)}
      </div>
      <div className={styles.row}>
        {RenderSquare(4)}
        {RenderSquare(5)}
        {RenderSquare(6)}
      </div>
      <div className={styles.row}>
        {RenderSquare(7)}
        {RenderSquare(8)}
        {RenderSquare(9)}
      </div>
    </div>
  );
};

export default Board;
