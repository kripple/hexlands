import '@/components/Hex.css';

export function Hex({ placeholder }: { placeholder?: 'half' | 'full' }) {
  if (placeholder === 'half') return <div className="hex-svg-spacer-half"></div>;
  if (placeholder === 'full') return <div className="hex-svg-spacer"></div>;

  return (
    <svg className="hex-svg" viewBox="0 0 84 96">
      <path className="hex-path" d="M42 3 3 25v45l39 23 39-22V26z" />
    </svg>
  );
}
