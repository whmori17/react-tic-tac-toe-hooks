import {
  isWinningCombination,
  isWinningCombinationNumber,
  isWinningCombinations,
  WinningCombination,
  WinningCombinationNumber,
  WinningCombinations,
} from './WinningCombination';

describe('WinningCombinations', () => {
  it('should be valid WinningCombinations', () => {
    const testValues: WinningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    expect(isWinningCombinations(testValues)).toBe(true);
  });

  it('should not be valid WinningCombinations', () => {
    const testValues = [
      [0, 1, 2],
      [3, 4, 15],
      [6, 7, 18],
    ] as WinningCombinations;

    expect(isWinningCombinations(testValues)).toBe(false);
  });
});

describe('WinningCombination', () => {
  it('should be valid WinningCombination', () => {
    const testValues: WinningCombination = [0, 1, 2];

    expect(isWinningCombination(testValues)).toBe(true);
  });

  it('should not be valid WinningCombination', () => {
    const testValues = [6, 7, 18] as WinningCombination;

    expect(isWinningCombination(testValues)).toBe(false);
  });
});

describe('WinningCombinationNumber', () => {
  it('should be valid WinningCombinationNumber', () => {
    const testValues: WinningCombinationNumber = 0;

    expect(isWinningCombinationNumber(testValues)).toBe(true);
  });

  it('should not be valid WinningCombinationNumber', () => {
    const testValues = 11 as WinningCombinationNumber;

    expect(isWinningCombinationNumber(testValues)).toBe(false);
  });
});
