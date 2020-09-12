import { Moves, isMove } from '@customTypes/Move';

export class GameDirector {
  private static readonly WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  public static calculateWinner(squares: Moves): string | null {
    for (let i = 0; i < GameDirector.WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = GameDirector.WINNING_COMBINATIONS[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  public squaresInCombinationAreIdentical(squares: Moves, combinationIndex: number): boolean {
    const [a, b, c] = GameDirector.WINNING_COMBINATIONS[combinationIndex];

    return isMove(squares[a]) && squares[a] === squares[b] && squares[a] === squares[c];
  }
}
