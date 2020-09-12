import React, { useEffect, useState } from 'react';
import { GameDirector } from '@services/GameDirector';
import { GameMoveProps, GameMove, Board } from '..';
import { Move, Moves } from '@customTypes/Move';
import { GameInfo } from '@components/GameInfo';

export interface GameProps {
  history?: Moves[];
}

export const Game: React.FC<GameProps> = ({ history: initialHistory = [Array<Move>(9).fill('')] }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<Moves[]>(initialHistory);
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
   * TODO: gestire meglio le var sottostanti, winner in particolare legge move troppo presto
   * rispetto all'aggiornamento dello stato, dopo la gestione di handleClick
   */
  useEffect(() => {
    const winner = GameDirector.calculateWinner(history[stepNumber]);
    setStatus(winner ? 'Winner is: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O'));
    setMoves(
      history.map((move, step) => {
        const props: GameMoveProps = { step, onClick: step => jumpTo(step) };

        return <GameMove {...props} key={step} />;
      }),
    );
  }, [xIsNext, stepNumber, history]);

  return (
    <div className="game">
      <Board squares={history[stepNumber]} onClick={(position: number) => handleClick(position)} />
      <GameInfo {...{ status, moves }} />
    </div>
  );
};

Game.displayName = 'Game';
