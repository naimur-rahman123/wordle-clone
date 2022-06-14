import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Board from './Board';
import KeyBoard from './KeyBoard';
import Modal from './Modal';

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp, guesses, turn, isCorrect, usedKeys } =
    useWordle(solution);

  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyUp);
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyUp);
    }

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <div>
      <header>
        <div className="title">Wordle</div>
      </header>
      {/* <div>Solution : {solution}</div>
      <div>Current Guess: {currentGuess}</div> */}
      <Board currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <KeyBoard
        usedKeys={usedKeys}
        handleKeyUp={handleKeyUp}
        showModal={showModal}
      />
      {showModal && isOpen && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          solution={solution}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Wordle;
