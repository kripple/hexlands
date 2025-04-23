import { Hex } from '@/components/Hex';

import '@/components/GameBoard.css';

export function GameBoard() {
  const spacer = { id: 'full' } as const;
  const halfSpacer = { id: 'half' } as const;
  const rows = [
    [spacer, { id: 1 }, { id: 2 }, { id: 3 }, spacer],
    [halfSpacer, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, halfSpacer],
    [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
    [halfSpacer, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, halfSpacer],
    [spacer, { id: 18 }, { id: 19 }, { id: 20 }, spacer],
  ] as const;

  return (
    <div className="game-board">
      {rows.map((columns, rowIndex) => (
        <div className="game-board-row" key={rowIndex}>
          {columns.map(({ id }, columnIndex) => (
            <Hex hexId={id} key={columnIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}
