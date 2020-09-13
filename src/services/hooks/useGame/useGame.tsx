import * as React from 'react';
import { GameMove, GameMoveProps } from '@components/GameMove';
import { Moves, Move } from '@customTypes/Move';
import { GameDirector } from '@services/GameDirector';
import { useState, useEffect } from 'react';

interface GameState {
  stepNumber: number;
  history: Moves[];
  moves: JSX.Element[];
  status: string;
  handleClick: (i: number) => void;
}

const useGame = (): GameState => {
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<Moves[]>([Array<Move>(9).fill('')]);
  const [moves, setMoves] = useState<JSX.Element[]>([]);
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

  /**
   * TODO: Check if it is possible to semplify
   */
  useEffect(() => {
    const winner = GameDirector.calculateWinner(history[stepNumber]);

    setStatus(winner ? 'Winner is: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O'));
    setMoves(
      history.map((_, step) => {
        const props: GameMoveProps = { step, onClick: step => jumpTo(step) };

        return <GameMove {...props} key={step} />;
      }),
    );
  }, [xIsNext, stepNumber, history]);

  return {
    stepNumber,
    history,
    moves,
    status,
    handleClick,
  };
};

export { useGame, GameState };
