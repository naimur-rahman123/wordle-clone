const randomWords = require('random-words');

const getFiveLetterWord = () => {
  const wordsArray = randomWords({ exactly: 10, maxLength: 5 }).filter(
    word => word.length === 5
  );
  return wordsArray[0];
};

export default getFiveLetterWord;
