import { useEffect, useCallback } from 'react';

const Help = ({ setHelpBarOpen }) => {
  const handleHelpBar = useCallback(
    ({ key }) => {
      if (key === 'Escape') {
        setHelpBarOpen(false);
      }
    },
    [setHelpBarOpen]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleHelpBar);
    return () => window.removeEventListener('keyup', handleHelpBar);
  }, [handleHelpBar]);

  return (
    <div className="help">
      <div className="demo">
        <header>
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            <slot>HOW TO PLAY</slot>
          </h3>
          <game-icon icon="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              onClick={() => setHelpBarOpen(false)}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
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
        </header>
        <section>
          <div className="instructions">
            <p>
              Guess the <strong>WORDLE</strong> in six tries.
            </p>
            <p>
              Each guess must be a valid five-letter word. Hit the enter button
              to submit.
            </p>
            <p>
              After each guess, the color of the tiles will change to show how
              close your guess was to the word.
            </p>
            <div className="examples">
              <p>
                <strong>Examples</strong>
              </p>
              <div className="example">
                <div className="row">
                  <div className="tile" data-state="correct">
                    w
                  </div>
                  <div className="tile" data-state="tbd">
                    e
                  </div>
                  <div className="tile" data-state="tbd">
                    a
                  </div>
                  <div className="tile" data-state="tbd">
                    r
                  </div>
                  <div className="tile" data-state="tbd">
                    y
                  </div>
                </div>
                <p>
                  The letter <strong>W</strong> is in the word and in the
                  correct spot.
                </p>
              </div>
              <div className="example">
                <div className="row">
                  <div className="tile" data-state="tbd">
                    p
                  </div>
                  <div className="tile" data-state="present">
                    i
                  </div>
                  <div className="tile" data-state="tbd">
                    l
                  </div>
                  <div className="tile" data-state="tbd">
                    l
                  </div>
                  <div className="tile" data-state="tbd">
                    s
                  </div>
                </div>
                <p>
                  The letter <strong>I</strong> is in the word but in the wrong
                  spot.
                </p>
              </div>
              <div className="example">
                <div className="row">
                  <div className="tile" data-state="tbd">
                    v
                  </div>
                  <div className="tile" data-state="tbd">
                    a
                  </div>
                  <div className="tile" data-state="tbd">
                    g
                  </div>
                  <div className="tile" data-state="absent">
                    u
                  </div>
                  <div className="tile" data-state="tbd">
                    e
                  </div>
                </div>
                <p>
                  The letter <strong>U</strong> is not in the word in any spot.
                </p>
              </div>
            </div>
            <p>
              <strong>
                A new WORDLE will be available each reload!<strong></strong>
              </strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help;
