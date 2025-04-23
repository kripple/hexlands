import { GameBoard } from '@/components/GameBoard';

import '@/components/App.css';

export function App() {
  const title = 'Pioneers of the Hexlands';

  return (
    <>
      <header className="header">{title}</header>
      <main className="main">
        <GameBoard />
      </main>
    </>
  );
}
