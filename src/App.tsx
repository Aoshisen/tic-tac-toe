import React, { useState } from "react";
import style from "./App.module.scss";

import Board from "./components/Board";

const App = () => {
  //需要明确的一点，在最外层的地方 需要有borderState 和点击函数 并且点击函数需要调用caculateWinner函数

  // 创建长度为9 所有值都为空的数组来保存棋盘的状态
  // const [boardState, setBoardState] = useState(Array(9).fill(null));

  //实现时间旅行,初始化一个初始状态是一个 长度为1的一个数组，唯一的一个值是存储的是board的初始状态数据，也就是一个长度为9，所有值为null 的一个数组
  const [gameData, setGameData] = useState([Array(9).fill(null)]);

  //下一个落子
  const [xIsnext, setNextX] = useState(true);

  const [stepNumber, setStepNumber] = useState(0);

  const current=gameData[stepNumber]

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

    const _gameData=gameData.slice(0,stepNumber+1)

    const _current= _gameData[_gameData.length-1]

    const _boardState=current.slice()

    //如果已经有赢家了，或者当前位置已经填充了东西那么直接返回
    if (caculateWinner(_current) || _current[i - 1]) {
      return;
    }

    _boardState[i-1]=xIsnext?"X":"O"
    
    //每一次点击盒子都会生成一个状态，我们把这个状态存储到gameData中
    setGameData([..._gameData,_boardState]);
    
    setStepNumber(_gameData.length);
    
    setNextX(!xIsnext);
  };
  
  
  

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setNextX(step % 2 === 0);
  };


  return (
    <>
      <div className={style.app}>this is app</div>
      <Board handleClick={handleClick} boardState={current} />
      {/** ol 自带一个数字的前缀 */}
      <ol>
        {gameData.map((_, move) => {
          //第一条数据是我们预先添加到里面的是一个初始状态，以后的数据则是新添加的数据
          const description = move ? "move to  " + move : "go to start";
          return (
            <li
              key={move}
              onClick={() => {
                jumpTo(move);
              }}
            >
              {description}
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default App;
