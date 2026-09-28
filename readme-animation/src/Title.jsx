import { Svg, Backdrop, Chars, C, MONO } from './lib.jsx';

export function Title() {
  const W = 1200, H = 250;
  const role = 'Code. Build. Refine. Repeat.';
  const rw = role.length * 14.4, rx = 600 - rw / 2;
  const css = `
.nm{animation:ls 14s ease infinite}
@keyframes ls{0%{letter-spacing:.32em}9%{letter-spacing:-.01em}92%{letter-spacing:-.01em}100%{letter-spacing:.32em}}
.gp{animation:gp 5s ease-in-out infinite alternate}
@keyframes gp{from{opacity:.18}to{opacity:.5}}`;
  return (
    <Svg w={W} h={H} title="Abhishek Thakur, Full Stack Developer" css={css}>
      <defs>
        <filter id="tblur" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="0"><animate attributeName="stdDeviation" values="18;0;0;18" keyTimes="0;.09;.92;1" dur="14s" repeatCount="indefinite" /></feGaussianBlur>
        </filter>
        <clipPath id="tc"><rect x={rx} y="172" width={rw} height="44"><animate attributeName="width" values={`0;0;${rw};${rw};0`} keyTimes="0;.1;.3;.92;1" dur="14s" repeatCount="indefinite" /></rect></clipPath>
      </defs>
      <Backdrop w={W} h={H} seed={5} stars={30} />
      <text className="nm gp" x="600" y="125" textAnchor="middle" fontSize="92" fontWeight="700" fill="#F8F3EE" filter="url(#blur14)">Abhishek Thakur</text>
      <g filter="url(#tblur)">
        <text className="nm" x="600" y="125" textAnchor="middle" fontSize="92" fontWeight="700" fill="#F8F3EE" filter="url(#glow)"><Chars text="Abhishek Thakur" step={0.06} /></text>
      </g>
      <path d="M420 152H780" stroke="url(#gh)" strokeWidth="2" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="0" filter="url(#glow)">
        <animate attributeName="stroke-dashoffset" values="1;1;0;0;1" keyTimes="0;.08;.2;.92;1" dur="14s" repeatCount="indefinite" />
      </path>
      <g clipPath="url(#tc)">
        <text className="mono" x={rx} y="197" fontSize="22" fill={C.mute} textLength={rw} lengthAdjust="spacing">{role}</text>
      </g>
      <rect y="174" width="2" height="30" fill={C.aqua} className="blink">
        <animate attributeName="x" values={`${rx};${rx};${rx + rw};${rx + rw};${rx}`} keyTimes="0;.1;.3;.92;1" dur="14s" repeatCount="indefinite" />
      </rect>
    </Svg>
  );
}
