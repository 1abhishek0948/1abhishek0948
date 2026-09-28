import { Svg, Particles, C } from './lib.jsx';

// Hero: the image fills the whole panel edge to edge (zero margin). The panel takes the image's own
// aspect ratio, so nothing is cropped or padded. Motion: blur->sharp reveal, slow zoom, scan light,
// border beam, drifting glow and particles. Nothing translates, so no edges ever show.
export function Hero({ img, ratio = 0.5625 }) {
  const W = 1200, H = Math.min(900, Math.round(W * ratio)), r = 24;
  // Bottom link row: flush with the bottom edge (zero margin), centered, clipped by #hc.
  const btns = [
    { label: 'Portfolio', href: 'https://abhishek-thakur.com.np', w: 150 },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishek-thakur', w: 140 },
    { label: 'Instagram', href: 'https://instagram.com/1abhishek0948', w: 155 },
  ];
  const gap = 16, bh = 52, by = H - bh;
  const totalW = btns.reduce((s, b) => s + b.w, 0) + gap * (btns.length - 1);
  let bx = (W - totalW) / 2;
  const placed = btns.map((b) => { const x = bx; bx += b.w + gap; return { ...b, x }; });
  const css = `
.hin{animation:hin 14s cubic-bezier(.2,.7,.2,1) infinite backwards;transform-box:fill-box;transform-origin:center}
@keyframes hin{0%{opacity:0;transform:scale(1.1)}10%{opacity:1;transform:scale(1)}92%{opacity:1;transform:scale(1)}98%,100%{opacity:0;transform:scale(1)}}
.hzoom{animation:hzoom 16s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:center}
@keyframes hzoom{from{transform:scale(1)}to{transform:scale(1.05)}}
.hglow{animation:hglow 6s ease-in-out infinite alternate}
@keyframes hglow{from{opacity:.03}to{opacity:.14}}
.social-link{cursor:pointer}
.social-link:hover{opacity:.85}}`;
  return (
    <Svg w={W} h={H} title="Hero image" css={css}>
      <defs>
        <clipPath id="hc"><rect width={W} height={H} rx={r} /></clipPath>
        <filter id="hblur" x="0" y="0" width="100%" height="100%">
          <feGaussianBlur stdDeviation="0">
            <animate attributeName="stdDeviation" values="20;0;0;20" keyTimes="0;.12;.92;1" dur="14s" repeatCount="indefinite" />
          </feGaussianBlur>
        </filter>
        <linearGradient id="vig" x1="0" y1="0" x2="0" y2="1"><stop offset=".7" stopColor={C.bg} stopOpacity="0" /><stop offset="1" stopColor={C.bg} stopOpacity=".45" /></linearGradient>
        <linearGradient id="scan" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#F8F3EE" stopOpacity="0" /><stop offset=".5" stopColor="#F8F3EE" stopOpacity=".2" /><stop offset="1" stopColor="#F8F3EE" stopOpacity="0" /></linearGradient>
        <linearGradient id="beam" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2={H}><stop offset="0" stopColor={C.violet} /><stop offset=".5" stopColor="#F8F3EE" /><stop offset="1" stopColor={C.aqua} /></linearGradient>
      </defs>
      <rect width={W} height={H} rx={r} fill={C.bg} />
      <g clipPath="url(#hc)">
        <g className="hin"><g className="hzoom">
          <image href={img} x="0" y="0" width={W} height={H} preserveAspectRatio="xMidYMid slice" filter="url(#hblur)" />
        </g></g>
        <rect width={W} height={H} fill="url(#gv)" opacity=".08" className="hglow" pointerEvents="none" />
        <rect width={W} height={H} fill="url(#vig)" pointerEvents="none" />
        <rect x="-260" width="240" height={H} fill="url(#scan)" pointerEvents="none">
          <animate attributeName="x" values={`-260;${W + 20};${W + 20}`} keyTimes="0;.55;1" dur="6s" repeatCount="indefinite" />
        </rect>
        <g pointerEvents="none"><Particles w={W} h={H} n={22} seed={11} /></g>
      </g>
      <rect x="1" y="1" width={W - 2} height={H - 2} rx={r} fill="none" stroke="#F8F3EE" strokeOpacity=".14" pointerEvents="none" />
      <rect className="beam" x="1.5" y="1.5" width={W - 3} height={H - 3} rx={r} fill="none" stroke="url(#beam)" strokeWidth="2.5" pathLength="1000" strokeDasharray="90 910" filter="url(#glow)" pointerEvents="none" />
      <g clipPath="url(#hc)">
        <g>
          {placed.map((b) => (
            <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer">
              <g className="social-link" style={{ cursor: 'pointer' }}>
              <rect x={b.x} y={by} width={b.w} height={bh} rx={bh / 2} fill={C.panel} opacity=".9" stroke="url(#gv)" strokeWidth="1.5" />
              <text x={b.x + b.w / 2} y={by + 33} textAnchor="middle" fontSize="17" fontWeight="700" fill={C.text} letterSpacing=".2">{b.label}</text>
              </g>
            </a>
          ))}
        </g>
      </g>
    </Svg>
  );
}
