import { Svg, Backdrop, Chars } from './lib.jsx';

export function Heading({ text }) {
  const W = 1200, H = 100;
  return (
    <Svg w={W} h={H} title={text}>
      <Backdrop w={W} h={H} seed={text.length} stars={14} blobs={false} />
      <text x="600" y="60" textAnchor="middle" fontSize="38" fontWeight="650" fill="url(#gtext)"><Chars text={text} step={0.04} /></text>
      <path d="M540 78H660" stroke="url(#gh)" strokeWidth="2" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="0" filter="url(#glow)">
        <animate attributeName="stroke-dashoffset" values="1;1;0;0;1" keyTimes="0;.06;.16;.92;1" dur="14s" repeatCount="indefinite" />
      </path>
    </Svg>
  );
}
