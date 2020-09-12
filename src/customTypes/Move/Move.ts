type Move = '' | 'X' | 'O';
type Moves = Move[];

function isMove(move: string): move is Move {
  return move === '' || move === 'X' || move === 'O';
}

export { Move, Moves, isMove };
