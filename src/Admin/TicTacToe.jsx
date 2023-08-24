import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [leftTop, setLeftTop] = useState("");
  const [leftMid, setLeftMid] = useState("");
  const [leftBottom, setLeftBottom] = useState("");
  const [centerTop, setCenterTop] = useState("");
  const [centerMid, setCenterMid] = useState("");
  const [centerBottom, setCenterBottom] = useState("");
  const [rightTop, setRightTop] = useState("");
  const [rightMid, setRightMid] = useState("");
  const [rightBottom, setRightBottom] = useState("");
  const [check, setCheck] = useState(false);
  const [squares,setSquares] = useState(Array(9).fill(""));
  const checkWinner = () =>{
    const combos=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]    
    ];
    for(let combo of combos){
     
    console.log(combo);
     
    }
  }

  const lT = () => {
    if (leftTop === "") {
      if (check === false) {
        setLeftTop("X");
        setSquares(0);
        setCheck(true);
      } else {
        setLeftTop("O");
        setSquares(0);
        setCheck(false);
      }
      checkWinner();
    }
  };
  const lM = () => {
    if (leftMid === "") {
      if (check === false) {
        setLeftMid("X");
        setSquares(1);
        setCheck(true);
      } else {
        setLeftMid("O");
        setSquares(1);
        setCheck(false);
      }
      checkWinner();
    }
  };

  const lB = () => {
    if (leftBottom === "") {
      if (check === false) {
        setLeftBottom("X");
        setSquares(2);
        setCheck(true);
      } else {
        setLeftBottom("O");
        setSquares(2);
        setCheck(false);
      }
      checkWinner();
    }
  };
  const cT = () => {
    if (centerTop === "") {
      if (check === false) {
        setCenterTop("X");
        setSquares(3);
        setCheck(true);
      } else {
        setCenterTop("O");
        setSquares(3);
        setCheck(false);
      }
      checkWinner();

    }
  };
 
  const cM = () => {
    if (centerMid === "") {
      if (check === false) {
        setCenterMid("X");
        setSquares(4);
        setCheck(true);
      } else {
        setCenterMid("O");
        setSquares(4);
        setCheck(false);
      }
    }
  };
  const cB = () => {
    if (centerBottom === "") {
      if (check === false) {
        setCenterBottom("X");
        setSquares(5);
        setCheck(true);
      } else {
        setCenterBottom("O");
        setSquares(5);
        setCheck(false);
      }
    }
  };
  const rT = () => {
    if (rightTop === "") {
      if (check === false) {
        setRightTop("X");
        setSquares(6);
        setCheck(true);
      } else {
        setRightTop("O");
        setSquares(6);
        setCheck(false);
      }
    }
  };
  const rM = () => {
    if (rightMid === "") {
      if (check === false) {
        setRightMid("X");
        setSquares(7);
        setCheck(true);
      } else {
        setRightMid("O");
        setSquares(7);
        setCheck(false);
      }
    }
  };
  const rB = () => {
    if (rightBottom === "") {
      if (check === false) {
        setRightBottom("X");
        setSquares(8);
        setCheck(true);
      } else {
        setRightBottom("O");
        setSquares(8);
        setCheck(false);
      }
    }
  };
  
 
  return (
    <div className="mainbox">
      <h1>{squares}</h1>
      <div className="subox">
        <div className="left">
          <div className="L1" onClick={() => lT()}>
            {leftTop}
          </div>
          <div className="L2" onClick={() => lM()}>
            {leftMid}
          </div>
          <div className="L3" onClick={() => lB()}>
            {leftBottom}
          </div>
        </div>
        <div className="center">
          <div className="C1"onClick={() => cT()}>
            {centerTop}</div>
          <div className="C2"onClick={() => cM()}>
            {centerMid}</div>
          <div className="C3"onClick={() => cB()}>
            {centerBottom}</div>
        </div>
        <div className="right">
          <div className="R1"onClick={() => rT()}>
            {rightTop}</div>
          <div className="R2"onClick={() => rM()}>
            {rightMid}</div>
          <div className="R3"onClick={() => rB()}>
            {rightBottom}</div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
