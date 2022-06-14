const Modal = ({ isCorrect, solution, turn, setIsOpen }) => {

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <game-icon icon="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={prev => setIsOpen(!prev)}
              height="24"
              viewBox="0 0 24 24"
              width="24"
              style={{
                position: 'absolute',
                top: 15,
                right: 15,
                userSelect: 'none',
                cursor: 'pointer',
              }}
            >
              <path
                fill="#ffffff"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
            </svg>
          </game-icon>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <game-icon icon="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={prev => setIsOpen(!prev)}
              height="24"
              viewBox="0 0 24 24"
              width="24"
              style={{
                position: 'absolute',
                top: 15,
                right: 15,
                userSelect: 'none',
                cursor: 'pointer',
              }}
            >
              <path
                fill="#ffffff"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
            </svg>
          </game-icon>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
