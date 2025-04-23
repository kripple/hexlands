import '@/components/Hex.css';

export function Hex({ hexId }: { hexId: 'half' | 'full' | number }) {
  if (hexId === 'half') return <div className="hex-spacer-half"></div>;
  if (hexId === 'full') return <div className="hex-spacer"></div>;

  // <g fill="#fff" id="a" stroke="#000">
  //   <circle cx="135" cy="40" r="2" />
  //   <circle cx="74" cy="5" r="2" />
  //   <circle cx="13" cy="40" r="2" />
  // </g>
  // <use transform="matrix(1 0 0-1 0 152)" xlinkHref="#a" />

  return (
    <div className="hex">
      <div className="hex-number">
        <div className="hex-number-tile">{hexId}</div>
      </div>
      <svg className="hex-svg" viewBox="13 5 122 142">
        <path
          className="hex-path"
          d="m135 40v72l-61 35-61-35v-72l61-35z"
        ></path>
      </svg>
    </div>
  );
}
