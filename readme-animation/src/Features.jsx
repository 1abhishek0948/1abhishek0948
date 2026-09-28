import { Svg, Backdrop, delay, C, MONO } from './lib.jsx';

const CARDS = [
  { t: 'LAHAN Hub', k: 'pin', lines: ['Community platform for Lahan, Nepal:', 'news, events, jobs, hotels, chat,', 'and buy & sell in one place.'], tag: 'Django · PostgreSQL · JavaScript' },
  { t: 'NepTown', k: 'hex', lines: ['Django community platform, formerly', 'called NepCity. Authentication and', 'community features, in production.'], tag: 'Django · PostgreSQL · Redis' },
  { t: 'Neptwone', k: 'plate', lines: ['Luxury redesign for Neptwone', 'Restaurant-Pizzeria: menu, reservations,', 'map, French/English, mobile-first, SEO.'], tag: 'Live demo on Render' },
  { t: 'AI Web Doctor', k: 'scan', lines: ['AI-assisted website analysis for', 'responsiveness, accessibility, layout,', 'typography, UX and performance.'], tag: 'Django · Playwright · Chromium' },
  { t: 'Lafzloom', k: 'lines', lines: ['Poetry and shayari platform with', 'authentication, moderation and', 'translation.'], tag: 'Django · PostgreSQL · Tailwind' },
  { t: 'Websites and SEO', k: 'bars', lines: ['Website management with SEO,', 'Google Analytics and Search Console,', 'plus IT support and networking.'], tag: 'Focus area' },
];

function Icon({ k }) {
  const s = { fill: 'none', stroke: 'url(#gv)', strokeWidth: 2, strokeLinecap: 'round' };
  if (k === 'pin') return (<g><circle cx="24" cy="24" r="5" fill="url(#gv)" filter="url(#glow)" />{[0, 1].map((i) => <circle key={i} cx="24" cy="24" r="8" {...s} opacity="0"><animate attributeName="r" values="8;22" dur="2.8s" begin={`${i * 1.4}s`} repeatCount="indefinite" /><animate attributeName="opacity" values=".9;0" dur="2.8s" begin={`${i * 1.4}s`} repeatCount="indefinite" /></circle>)}</g>);
  if (k === 'hex') return (<g><polygon points="24,4 41,14 41,34 24,44 7,34 7,14" {...s}><animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="14s" repeatCount="indefinite" /></polygon><circle cx="24" cy="24" r="4" fill="url(#gv)" filter="url(#glow)" /></g>);
  if (k === 'plate') return (<g><circle cx="24" cy="24" r="18" {...s} strokeDasharray="6 8"><animate attributeName="stroke-dashoffset" values="0;-56" dur="6s" repeatCount="indefinite" /></circle><circle cx="24" cy="24" r="9" {...s} /></g>);
  if (k === 'scan') return (<g><path d="M6 16V6H16M32 6H42V16M42 32V42H32M16 42H6V32" {...s} /><rect x="10" y="22" width="28" height="2" rx="1" fill="url(#gv)" filter="url(#glow)"><animate attributeName="y" values="10;36;10" dur="3.2s" repeatCount="indefinite" /></rect></g>);
  if (k === 'lines') return (<g>{[0, 1, 2].map((i) => <rect key={i} x="8" y={12 + i * 11} width={14 + i * 4} height="4" rx="2" fill="url(#gv)"><animate attributeName="width" values={`${14 + i * 4};${32 - i * 4};${14 + i * 4}`} dur={`${3 + i * 0.6}s`} repeatCount="indefinite" /></rect>)}</g>);
  return (<g>{[0, 1, 2].map((i) => <rect key={i} x={8 + i * 12} y={40 - (10 + i * 8)} height={10 + i * 8} width="8" rx="2" fill="url(#gv)"><animate attributeName="height" values={`${10 + i * 8};${30 - i * 6};${10 + i * 8}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" /><animate attributeName="y" values={`${40 - (10 + i * 8)};${40 - (30 - i * 6)};${40 - (10 + i * 8)}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" /></rect>)}</g>);
}

export function Features() {
  const W = 1200, cw = 360, ch = 210, H = 2 * ch + 30 + 60;
  return (
    <Svg w={W} h={H} title="Featured projects: LAHAN Hub, NepTown, Neptwone, AI Web Doctor, Lafzloom, websites and SEO">
      <Backdrop w={W} h={H} seed={21} stars={34} />
      {CARDS.map((c, i) => {
        const x = 30 + (i % 3) * (cw + 30), y = 30 + Math.floor(i / 3) * (ch + 30);
        const d = i * 0.45, dur = 5 + (i % 3) * 0.8;
        return (
          <g key={c.t} transform={`translate(${x} ${y})`}>
            <clipPath id={`cc${i}`}><rect width={cw} height={ch} rx="20" /></clipPath>
            <g className="enter" style={delay(d)}>
              <g className="float" style={{ animationDuration: `${dur}s`, animationDelay: `${-i}s` }}>
                <rect width={cw} height={ch} rx="20" fill="#fff" fillOpacity=".04" />
                <g clipPath={`url(#cc${i})`}>
                  <rect y="-20" width="90" height={ch + 40} fill="#fff" opacity=".07" transform="skewX(-20)">
                    <animate attributeName="x" values={`-160;${cw + 120};${cw + 120}`} keyTimes="0;.35;1" dur={`${7 + i * 0.6}s`} begin={`${i * 0.8}s`} repeatCount="indefinite" />
                  </rect>
                </g>
                <rect width={cw} height={ch} rx="20" fill="none" stroke="#fff" strokeOpacity=".1" />
                <rect className="beam" width={cw} height={ch} rx="20" fill="none" stroke="url(#gv)" strokeWidth="2" pathLength="1000" strokeDasharray="110 890" filter="url(#glow)" style={{ animationDuration: `${6 + i * 0.7}s` }} />
                <g transform="translate(28 26)"><Icon k={c.k} /></g>
                <text x="90" y="58" fontSize="22" fontWeight="650" fill={C.text}>{c.t}</text>
                {c.lines.map((l, j) => <text key={j} x="30" y={102 + j * 24} fontSize="15" fill={C.mute}>{l}</text>)}
                <text className="mono" x="30" y="188" fontSize="13" fill={C.aqua}>{c.tag}</text>
              </g>
            </g>
          </g>
        );
      })}
    </Svg>
  );
}
