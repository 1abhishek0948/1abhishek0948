import { Svg, Backdrop, Particles, C, MONO } from './lib.jsx';

const LINES = ['https://abhishek-thakur.com.np', 'https://devabhishek.onrender.com', 'https://github.com/1abhishek0948'];
const CW = 12.2;

export function Quickstart() {
  const W = 1200, H = 310, x = 150, y = 30, w = 900, h = 250;
  return (
    <Svg w={W} h={H} title="Get in touch: open the portfolio, developer portfolio and GitHub profile">
      <defs>
        <clipPath id="qc"><rect x={x} y={y} width={w} height={h} rx="18" /></clipPath>
        <linearGradient id="qtop" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={C.aqua} stopOpacity="0" /><stop offset=".5" stopColor="#fff" /><stop offset="1" stopColor={C.violet} stopOpacity="0" /></linearGradient>
        <linearGradient id="qscan" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={C.aqua} stopOpacity="0" /><stop offset="1" stopColor={C.aqua} stopOpacity=".12" /></linearGradient>
        {LINES.map((l, i) => {
          const s = 0.12 + i * 0.2, e = s + 0.12, tw = (l.length + 7) * CW;
          return <clipPath key={i} id={`ql${i}`}><rect x={x + 40} y={y + 78 + i * 50} height="34" width={tw}><animate attributeName="width" values={`0;0;${tw};${tw};0`} keyTimes={`0;${s};${e};.93;1`} dur="14s" repeatCount="indefinite" /></rect></clipPath>;
        })}
      </defs>
      <Backdrop w={W} h={H} seed={51} stars={26} />
      <Particles w={W} h={H} n={10} seed={19} />
      <rect x={x} y={y} width={w} height={h} rx="18" fill={C.panel} opacity=".92" />
      <rect x={x} y={y} width={w} height={h} rx="18" fill="none" stroke="url(#gv)" strokeWidth="1.5" opacity=".8" filter="url(#glow)" />
      <g clipPath="url(#qc)">
        <rect y={y} width="260" height="2.5" fill="url(#qtop)"><animate attributeName="x" values={`${x - 260};${x + w}`} dur="4.5s" repeatCount="indefinite" /></rect>
        <rect x={x} width={w} height="60" fill="url(#qscan)"><animate attributeName="y" values={`${y - 60};${y + h}`} dur="5.5s" repeatCount="indefinite" /></rect>
      </g>
      <path d={`M${x} ${y + 44}H${x + w}`} stroke="#fff" strokeOpacity=".08" />
      {[0, 1, 2].map((k) => <circle key={k} cx={x + 28 + k * 20} cy={y + 22} r="5" fill="#fff" opacity=".18" />)}
      <text className="mono" x={x + w / 2} y={y + 27} textAnchor="middle" fontSize="13" fill={C.mute}>get-in-touch</text>
      {LINES.map((l, i) => {
        const ty = y + 101 + i * 50, tx = x + 40;
        return (
          <g key={l} clipPath={`url(#ql${i})`} fontSize="20">
            <text className="mono" x={tx} y={ty} fill={C.aqua} textLength={CW}>$</text>
            <text className="mono" x={tx + 2 * CW} y={ty} fill={C.text} textLength={4 * CW}>open</text>
            <text className="mono" x={tx + 7 * CW} y={ty} fill={C.violet} textLength={l.length * CW}>{l}</text>
          </g>
        );
      })}
      <rect className="blink" x={x + 40 + 7 * CW} y={y + 101 + 3 * 50 - 22} width="11" height="24" fill={C.aqua} opacity=".9" />
    </Svg>
  );
}
