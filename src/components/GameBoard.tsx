import { Hex } from '@/components/Hex';

import '@/components/GameBoard.css';

export function GameBoard() {
  const columnsInRow = [
    ['full', 3, 'full'],
    ['half', 4, 'half'],
    [5],
    ['half', 4, 'half'],
    ['full', 3, 'full'],
  ] as const;
  type Columns = (typeof columnsInRow)[number];

  const row = (columns: Columns) => (
    <div className="game-board-row">
      {columns.map((hex, columnIndex) =>
        typeof hex === 'string' ? (
          <Hex key={`column-${columnIndex}`} placeholder={hex} />
        ) : (
          Array.from({ length: hex }, (_, rowIndex) => (
            <Hex key={`row-${rowIndex}`} />
          ))
        ),
      )}
    </div>
  );

  return (
    <div className="game-board">
      {columnsInRow.map((columns) => row(columns))}
    </div>
  );
}
