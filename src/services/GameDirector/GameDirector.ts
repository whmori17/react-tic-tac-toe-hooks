import { WinningCombinations } from '@customTypes/WinningCombination';
import { Moves, isMove } from '@customTypes/Move';

export class GameDirector {
  private static readonly WINNING_COMBINATIONS: WinningCombinations = [
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
      const combination = GameDirector.WINNING_COMBINATIONS[i];

      if (GameDirector.squaresInCombinationAreIdentical(squares, combination)) {
        return squares[combination[0]];
      }
    }

    return null;
  }

  public static squaresInCombinationAreIdentical(squares: Moves, [a, b, c]: number[]): boolean {
    return isMove(squares[a]) && squares[a] === squares[b] && squares[a] === squares[c];
  }
}
