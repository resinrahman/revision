import React, { useEffect, useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [check, setCheck] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(""));
  let winner = "";

  useEffect(() => {
    winner = checkWinner();
    if (winner) {
      setSquares(Array(9).fill(""));
      setCheck(false);
     
      alert(`Congratulations! Player ${winner} wins!`);
    }
  }, [squares]);

  const handleSquareClick = (index) => {
    if (squares[index] === "") {
      setSquares((prevSquares) => {
        const updatedSquares = [...prevSquares];
        updatedSquares[index] = check ? "O" : "X";
        return updatedSquares;
      });
      setCheck((prevCheck) => !prevCheck);
    }
  };

  const checkWinner = () => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of combos) {
      const [a, b, c] = combo;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    if (squares.every((square) => square !== "")) {
      return "draw";
    }

    return null;
  };

  return (
    <div className="mainbox">
      <div className="subox">
        <div className="left">
          <div className="L1" onClick={() => handleSquareClick(0)}>
            {squares[0]}
          </div>
          <div className="L2" onClick={() => handleSquareClick(1)}>
            {squares[1]}
          </div>
          <div className="L3" onClick={() => handleSquareClick(2)}>
            {squares[2]}
          </div>
        </div>
        <div className="center">
          <div className="C1" onClick={() => handleSquareClick(3)}>
            {squares[3]}
          </div>
          <div className="C2" onClick={() => handleSquareClick(4)}>
            {squares[4]}
          </div>
          <div className="C3" onClick={() => handleSquareClick(5)}>
            {squares[5]}
          </div>
        </div>
        <div className="right">
          <div className="R1" onClick={() => handleSquareClick(6)}>
            {squares[6]}
          </div>
          <div className="R2" onClick={() => handleSquareClick(7)}>
            {squares[7]}
          </div>
          <div className="R3" onClick={() => handleSquareClick(8)}>
            {squares[8]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
