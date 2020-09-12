import { GameDirector } from './GameDirector';

describe('GameDirectorDirector', () => {
  const { calculateWinner } = GameDirector;

  it('should return null with empty moves', () => {
    expect(calculateWinner([])).toBe(null);
  });
});
