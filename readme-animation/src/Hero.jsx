import { Svg, Backdrop, Particles, C } from './lib.jsx';

// Hero panel: the supplied image, revealed with blur->sharp, float, tilt, border beam and scan light.
export function Hero({ img }) {
  const W = 1200, H = 640, x = 150, y = 67, iw = 900, ih = 506, r = 22;
  const css = `
.hin{animation:hin 14s cubic-bezier(.2,.7,.2,1) infinite backwards;transform-box:fill-box;transform-origin:center}
@keyframes hin{0%{opacity:0;transform:scale(1.08)}9%{opacity:1;transform:scale(1)}92%{opacity:1;transform:scale(1)}98%,100%{opacity:0;transform:scale(.99)}}
.htilt{animation:htilt 9s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:center}
@keyframes htilt{from{transform:translateY(0) skewY(-.5deg)}to{transform:translateY(-9px) skewY(.5deg)}}
.hglow{animation:hglow 5s ease-in-out infinite alternate}
@keyframes hglow{from{opacity:.25}to{opacity:.6}}`;
  return (
    <Svg w={W} h={H} title="Hero image" css={css}>
      <defs>
        <clipPath id="hc"><rect x={x} y={y} width={iw} height={ih} rx={r} /></clipPath>
        <filter id="hblur" x="0" y="0" width="100%" height="100%">
          <feGaussianBlur stdDeviation="0">
            <animate attributeName="stdDeviation" values="20;0;0;20" keyTimes="0;.12;.92;1" dur="14s" repeatCount="indefinite" />
          </feGaussianBlur>
        </filter>
        <linearGradient id="vig" x1="0" y1="0" x2="0" y2="1"><stop offset=".55" stopColor={C.bg} stopOpacity="0" /><stop offset="1" stopColor={C.bg} stopOpacity=".7" /></linearGradient>
        <linearGradient id="scan" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".5" stopColor="#fff" stopOpacity=".2" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <linearGradient id="beam" gradientUnits="userSpaceOnUse" x1={x} y1={y} x2={x + iw} y2={y + ih}><stop offset="0" stopColor={C.violet} /><stop offset=".5" stopColor="#fff" /><stop offset="1" stopColor={C.aqua} /></linearGradient>
      </defs>
      <Backdrop w={W} h={H} seed={3} stars={70} />
      <Particles w={W} h={H} n={22} seed={11} />
      <rect className="hglow" x={x - 10} y={y - 10} width={iw + 20} height={ih + 20} rx={r + 8} fill="url(#gv)" filter="url(#blur40)" />
      <g className="hin"><g className="htilt">
        <rect x={x} y={y} width={iw} height={ih} rx={r} fill={C.panel} />
        <image href={img} x={x} y={y} width={iw} height={ih} preserveAspectRatio="xMidYMid slice" clipPath="url(#hc)" filter="url(#hblur)" />
        <rect x={x} y={y} width={iw} height={ih} rx={r} fill="url(#vig)" />
        <g clipPath="url(#hc)">
          <rect x={x - 240} y={y} width="220" height={ih} fill="url(#scan)">
            <animate attributeName="x" values={`${x - 240};${x + iw + 20};${x + iw + 20}`} keyTimes="0;.55;1" dur="6s" repeatCount="indefinite" />
          </rect>
        </g>
        <rect x={x} y={y} width={iw} height={ih} rx={r} fill="none" stroke="#fff" strokeOpacity=".16" />
        <rect className="beam" x={x} y={y} width={iw} height={ih} rx={r} fill="none" stroke="url(#beam)" strokeWidth="2.5" pathLength="1000" strokeDasharray="90 910" filter="url(#glow)" />
      </g></g>
    </Svg>
  );
}
