import React from 'react';
import Row from './Row';

const Board = ({ currentGuess, guesses, turn }) => {
  return (
    <div id="board-container">
      <div id="board">
        {guesses.map((guess, index) => {
          if (turn === index) {
            return <Row key={index} currentGuess={currentGuess} />;
          }

          return <Row key={index} guess={guess} />;
        })}
      </div>
    </div>
  );
};

export default Board;
