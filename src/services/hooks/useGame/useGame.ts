import { Moves, Move } from '@customTypes/Move';
import { GameDirector } from '@services/GameDirector';
import { useState, useEffect } from 'react';

interface GameState {
  stepNumber: number;
  history: Moves[];
  status: string;
  handleClick: (i: number) => void;
  jumpTo: (i: number) => void;
}

const useGame = (): GameState => {
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<Moves[]>([Array<Move>(9).fill('')]);
  const [status, setStatus] = useState('');

  const jumpTo = (step: number): void => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    setHistory(prevHistory => prevHistory.filter((move, i) => i <= step));
  };

  const handleClick = (i: number): void => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const moves = currentHistory[currentHistory.length - 1];
    const squares = moves.slice();

    if (GameDirector.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    setXIsNext(!xIsNext);
    setStepNumber(history.length);
    setHistory(prevHistory => [...prevHistory, squares]);
  };

  useEffect(() => {
    const winner = GameDirector.calculateWinner(history[stepNumber]);

    setStatus(winner ? 'Winner is: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O'));
  }, [xIsNext, stepNumber, history]);

  return {
    stepNumber,
    history,
    status,
    jumpTo,
    handleClick,
  };
};

export { useGame, GameState };
