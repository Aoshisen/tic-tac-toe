import React, { useState } from "react";
import style from "./App.module.scss";

import Board from "./components/Board";

const App = () => {
  //需要明确的一点，在最外层的地方 需要有borderState 和点击函数 并且点击函数需要调用caculateWinner函数
  // 创建长度为9 所有值都为空的数组来保存棋盘的状态
  const [boardState, setBoardState] = useState(Array(9).fill(null));

  //下一个落子
  const [xIsnext, setNextX] = useState(true);

  //传入一个数组,并根据数组的数值返回赢家
  const caculateWinner = (boardState: Array<"O" | "X" | null>) => {
    //赢的几种情况
    const winState = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    for (let i = 0; i < winState.length; i++) {
      const [a, b, c] = winState[i];

      //第一个数存在(不等于null),并且等于第二个数，并且第一个数等于第三个数

      if (
        boardState[a - 1] &&
        boardState[a - 1] === boardState[b - 1] &&
        boardState[b - 1] === boardState[c - 1]
      ) {
        return boardState[a - 1];
      }

      //不能在这里写return null,这里写的话就会强制跳出循环，for 循环只能执行一次
    }

    return null;
  };

  //每一个格子点击的函数
  const handleClick = (i: number) => {
    //如果已经有赢家了，或者当前位置已经填充了东西那么直接返回
    if (caculateWinner(boardState) || boardState[i - 1]) {
      return;
    }
    let fillIcon = xIsnext ? "X" : "O";

    boardState[i - 1] = fillIcon;

    //这里如果不使用...运算符的话组件就不会自动的判断组件更新
    setBoardState([...boardState]);

    setNextX(!xIsnext);
  };

  return (
    <>
      <div className={style.app}>this is app</div>
      <Board handleClick={handleClick} boardState={boardState} />
    </>
  );
};

export default App;
