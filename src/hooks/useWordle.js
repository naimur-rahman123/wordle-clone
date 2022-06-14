import { useState } from 'react';

const useWordle = solution => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    const solutionArray = [...solution];
    const formattedGuess = [...currentGuess].map(letter => ({
      key: letter,
      color: 'grey',
    }));

    // find any letters that are in correct position (green letters)
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formattedGuess[i].color = 'green';
        solutionArray[i] = null;
      }
    });

    // find any letters that are in thw word but not in correct position (yellow letters)
    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== 'green') {
        formattedGuess[i].color = 'yellow';
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  };

  // add a new guess to the guesses state
  const addNewGuess = formattedGuess => {
    // update the isCorrect state if the guess is correct
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses(prevGuesses => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory(prevHistory => [...prevHistory, currentGuess]);

    // add one to the turn state
    setTurn(prevTurn => prevTurn + 1);

    setUsedKeys(prevUsedKeys => {
      const newKeys = { ...prevUsedKeys };

      formattedGuess.forEach(l => {
        const currentColor = newKeys[l.key];

        if (l.color === 'green') {
          newKeys[l.key] = 'green';
          return;
        }
        if (l.color === 'yellow' && currentColor !== 'green') {
          newKeys[l.key] = 'yellow';
          return;
        }
        if (
          l.color === 'grey' &&
          currentColor !== 'green' &&
          currentColor !== 'yellow'
        ) {
          newKeys[l.key] = 'grey';
          return;
        }
      });

      return newKeys;
    });

    setCurrentGuess('');
  };

  // handle keyup event & track current guess
  // if the user presses enter, add the new guess
  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
      // only add guess if turn is less than five
      if (turn > 5) {
        return;
      }
      // don't allow duplicate word
      if (history.includes(currentGuess)) {
        return;
      }
      // word must be five characters long
      if (currentGuess.length !== 5) {
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }

    if (key === 'Backspace') {
      setCurrentGuess(prevState => prevState.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prevState => prevState + key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp, usedKeys };
};

export default useWordle;
