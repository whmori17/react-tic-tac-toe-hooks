const alloewdWinningCombinationNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

type WinningCombinationNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type WinningCombination = WinningCombinationNumber[];
type WinningCombinations = WinningCombination[];

function isWinningCombinationNumber(
  winningCombinationNumber: WinningCombinationNumber,
): winningCombinationNumber is WinningCombinationNumber {
  return alloewdWinningCombinationNumbers.includes(winningCombinationNumber);
}
function isWinningCombination(winningCombination: WinningCombination): winningCombination is WinningCombination {
  let outcome = winningCombination.length === 3;

  winningCombination.forEach(wC => {
    outcome = isWinningCombinationNumber(wC) ? outcome : false;
  });

  return outcome;
}
function isWinningCombinations(winningCombinations: WinningCombinations): winningCombinations is WinningCombinations {
  let outcome = true;

  winningCombinations.forEach(wCs => {
    outcome = isWinningCombination(wCs) ? outcome : false;
  });

  return outcome;
}

export {
  WinningCombination,
  WinningCombinationNumber,
  WinningCombinations,
  alloewdWinningCombinationNumbers,
  isWinningCombinationNumber,
  isWinningCombination,
  isWinningCombinations,
};
