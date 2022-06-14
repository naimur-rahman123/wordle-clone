const KeyBoard = ({ usedKeys, handleKeyUp, showModal }) => {
  const lettersOne = [
    { key: 'q' },
    { key: 'w' },
    { key: 'e' },
    { key: 'r' },
    { key: 't' },
    { key: 'y' },
    { key: 'u' },
    { key: 'i' },
    { key: 'o' },
    { key: 'p' },
  ];

  const lettersTwo = [
    { key: 'a' },
    { key: 's' },
    { key: 'd' },
    { key: 'f' },
    { key: 'g' },
    { key: 'h' },
    { key: 'j' },
    { key: 'k' },
    { key: 'l' },
  ];

  const lettersThree = [
    { key: 'z' },
    { key: 'x' },
    { key: 'c' },
    { key: 'v' },
    { key: 'b' },
    { key: 'n' },
    { key: 'm' },
  ];

  return (
    <div id="keyboard">
      <div className="row">
        {lettersOne.map(l => {
          const color = usedKeys[l.key];
          return (
            <button
              key={l.key}
              className={color}
              onClick={() => handleKeyUp(l)}
              disabled={showModal}
            >
              {l.key}
            </button>
          );
        })}
      </div>
      <div className="row">
        <div className="spacer half"></div>
        {lettersTwo.map(l => {
          const color = usedKeys[l.key];
          return (
            <button
              key={l.key}
              className={color}
              onClick={() => handleKeyUp(l)}
              disabled={showModal}
            >
              {l.key}
            </button>
          );
        })}
        <div className="spacer half"></div>
      </div>
      <div className="row">
        <button
          data-key="↵"
          className="one-and-a-half"
          onClick={() => handleKeyUp({ key: 'Enter' })}
          disabled={showModal}
        >
          enter
        </button>
        {lettersThree.map(l => {
          const color = usedKeys[l.key];
          return (
            <button
              key={l.key}
              className={color}
              onClick={() => handleKeyUp(l)}
              disabled={showModal}
            >
              {l.key}
            </button>
          );
        })}
        <button
          data-key="←"
          className="one-and-a-half"
          onClick={() => handleKeyUp({ key: 'Backspace' })}
          disabled={showModal}
        >
          <game-icon icon="backspace">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                fill="#ffffff"
                d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
              ></path>
            </svg>
          </game-icon>
        </button>
      </div>
    </div>
  );
};

export default KeyBoard;
