import { GameBoard } from '@/components/GameBoard';

import '@/components/App.css';

export function App() {
  return (
    <>
      <header className="header"></header>
      <main className="main">
        <GameBoard />
      </main>
    </>
  );
}
