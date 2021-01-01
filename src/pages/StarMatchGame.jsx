import { useEffect, useState } from 'react';
import './StarMatchGame.css';

const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNumbers.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
    console.log('Rendering');
    return () => {
      console.log('Destroying');
    };
  });

  const setGameState = (newCandidateNumbers) => {
    if (utils.sum(newCandidateNumbers) !== stars) {
      setCandidateNumbers(newCandidateNumbers);
    } else {
      const newAvailableNumbers = availableNumbers.filter(
        (number) => !newCandidateNumbers.includes(number)
      );
      setAvailableNumbers(newAvailableNumbers);
      setCandidateNumbers([]);
      setStars(utils.randomSumIn(newAvailableNumbers, 9));
    }
  };

  return {
    stars,
    availableNumbers,
    candidateNumbers,
    secondsLeft,
    setGameState,
  };
};

const Game = (props) => {  
  const {
    stars,
    availableNumbers,
    candidateNumbers,
    secondsLeft,
    setGameState,
  } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNumbers) > stars;
  const gameStatus =
    availableNumbers.length === 0
      ? 'won'
      : secondsLeft === 0
      ? 'lost'
      : 'active';

  const numberStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return 'used';
    }
    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }

    const newCandidateNumbers =
      currentStatus === 'available'
        ? candidateNumbers.concat(number)
        : candidateNumbers.filter((num) => num !== number);

    setGameState(newCandidateNumbers);
  };

  return (
    <div className="game">
      <h1>Star Match Game</h1>
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== 'active' ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <StarsDisplay count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <NumberButton
              key={number}
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

const PlayAgain = ({ onClick, gameStatus }) => {
  return (
    <div className="game-done">
      <div
        className="message"
        style={{ color: gameStatus === 'won' ? 'green' : 'red' }}
      >
        {gameStatus === 'won' ? 'Nice' : 'Game Over'}
      </div>
      <button onClick={() => onClick()}>Play again</button>
    </div>
  );
};

const NumberButton = ({ number, onClick, status }) => {
  return (
    <button
      className="number"
      style={{ backgroundColor: colors[status] }}
      onClick={() => onClick(number, status)}
    >
      {number}
    </button>
  );
};

const StarsDisplay = ({ count }) => {
  return (
    <>
      {utils.range(1, count).map((starId) => (
        <div className="star" key={starId} />
      ))}
    </>
  );
};

const StarMatchGame = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default StarMatchGame;

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};
