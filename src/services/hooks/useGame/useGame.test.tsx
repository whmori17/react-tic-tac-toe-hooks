import { renderHook } from '@testing-library/react-hooks';
import { useGame } from './useGame';

describe('useGame', () => {
  it('should returns GameState', () => {
    const { result } = renderHook(() => useGame());

    expect(typeof result.current.handleClick).toBe('function');
    expect(typeof result.current.history).toBe('object');
    expect(typeof result.current.moves).toBe('object');
    expect(typeof result.current.status).toBe('string');
    expect(typeof result.current.stepNumber).toBe('number');
  });
});
