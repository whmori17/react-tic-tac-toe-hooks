import { act, renderHook } from '@testing-library/react-hooks';
import { useGame } from './useGame';

describe('useGame', () => {
  it('should returns GameState', () => {
    const { result } = renderHook(() => useGame());

    expect(typeof result.current.status).toBe('string');
    expect(typeof result.current.history).toBe('object');
    expect(typeof result.current.stepNumber).toBe('number');
    expect(typeof result.current.jumpTo).toBe('function');
    expect(typeof result.current.handleClick).toBe('function');
  });

  it('should increment step number on every new move', () => {
    const moves = [
      [0, 1],
      [1, 2],
      [1, 2],
      [2, 3],
      [3, 4],
      [3, 4],
    ];
    const { result } = renderHook(() => useGame());

    moves.forEach(move => {
      const [squarePosition, expectedStepNumber] = move;

      act(() => {
        result.current.handleClick(squarePosition);
      });

      expect(result.current.stepNumber).toBe(expectedStepNumber);
    });
  });

  test.each`
    moves                    | expectedWinner
    ${[0, 3, 1, 4, 2, 5]}    | ${'X'}
    ${[6, 0, 3, 1, 4, 2, 5]} | ${'O'}
  `('should win X', ({ moves, expectedWinner }) => {
    const { result } = renderHook(() => useGame());

    moves.forEach((move: number) => {
      act(() => {
        result.current.handleClick(move);
      });
    });

    expect(result.current.status).toBe(`Winner is: ${expectedWinner}`);
  });

  test.each`
    moves                 | step
    ${[0, 3, 1, 4, 2]}    | ${0}
    ${[0, 3, 1, 4, 2]}    | ${1}
    ${[0, 3, 1, 4, 2]}    | ${2}
    ${[0, 3, 1, 4, 2]}    | ${3}
    ${[0, 3, 1, 4, 2]}    | ${4}
    ${[0, 3, 1, 4, 2]}    | ${5}
    ${[6, 0, 3, 1, 4, 2]} | ${0}
    ${[6, 0, 3, 1, 4, 2]} | ${1}
    ${[6, 0, 3, 1, 4, 2]} | ${2}
    ${[6, 0, 3, 1, 4, 2]} | ${3}
    ${[6, 0, 3, 1, 4, 2]} | ${4}
    ${[6, 0, 3, 1, 4, 2]} | ${5}
    ${[6, 0, 3, 1, 4, 2]} | ${6}
  `('should jump to step $step', ({ moves, step }) => {
    const { result } = renderHook(() => useGame());

    moves.forEach((move: number) => {
      act(() => {
        result.current.handleClick(move);
      });
    });

    act(() => {
      result.current.jumpTo(step);
    });

    expect(result.current.stepNumber).toBe(step);
  });
});
