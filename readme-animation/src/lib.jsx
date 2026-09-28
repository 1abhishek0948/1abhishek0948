export const C = { bg:'#090708', panel:'#171012', line:'#2A1C20', text:'#F8F3EE', mute:'#A99C97', violet:'#C04A62', aqua:'#C6A46A', rose:'#7B1E2B', goldLight:'#E6CB94' };
export const FONT = "Inter, 'SF Pro Display', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";
export const MONO = "'SF Mono', 'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace";
export const CYCLE = 14; // seconds; every entrance replays each cycle so late scrollers still see it

export function rng(seed) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
export const delay = (s) => ({ animationDelay: `${s}s` });

const BASE_CSS = `
text{font-family:${FONT}}
.mono{font-family:${MONO}}
.enter{animation:enter ${CYCLE}s cubic-bezier(.2,.7,.2,1) infinite backwards}
@keyframes enter{0%{opacity:0;transform:translateY(18px)}6%{opacity:1;transform:translateY(0)}92%{opacity:1;transform:translateY(0)}98%,100%{opacity:0;transform:translateY(-8px)}}
.ch{animation:ch ${CYCLE}s ease infinite backwards}
@keyframes ch{0%{fill-opacity:0}6%{fill-opacity:1}92%{fill-opacity:1}98%,100%{fill-opacity:0}}
.float{animation:float 6s ease-in-out infinite alternate}
@keyframes float{from{transform:translateY(0)}to{transform:translateY(-7px)}}
.pulse{animation:pulse 5s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:center}
@keyframes pulse{from{transform:scale(1)}to{transform:scale(1.05)}}
.tw{animation:tw 4s ease-in-out infinite}
@keyframes tw{0%,100%{opacity:.12}50%{opacity:.85}}
.rise{animation:rise 10s linear infinite}
@keyframes rise{from{transform:translateY(0);opacity:0}12%{opacity:.8}to{transform:translateY(-240px);opacity:0}}
.b1{animation:d1 17s ease-in-out infinite alternate}
.b2{animation:d2 21s ease-in-out infinite alternate}
.b3{animation:d3 19s ease-in-out infinite alternate}
@keyframes d1{to{transform:translate(120px,60px)}}
@keyframes d2{to{transform:translate(-140px,-50px)}}
@keyframes d3{to{transform:translate(-80px,90px)}}
.beam{animation:beam 7s linear infinite}
@keyframes beam{from{stroke-dashoffset:0}to{stroke-dashoffset:-1000}}
.flow{animation:flow 1.4s linear infinite}
@keyframes flow{to{stroke-dashoffset:-28}}
.ring{animation:ring 3.2s ease-out infinite;transform-box:fill-box;transform-origin:center}
@keyframes ring{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.35);opacity:0}}
.blink{animation:blink 1s steps(2) infinite}
@keyframes blink{50%{opacity:0}}
@media (prefers-reduced-motion:reduce){*{animation:none!important}}
`;

export function Svg({ w, h, title, css = '', children }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${w} ${h}`} width={w} height={h} role="img" aria-label={title}>
      <title>{title}</title>
      <defs>
        <linearGradient id="gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={C.violet} /><stop offset="1" stopColor={C.aqua} /></linearGradient>
        <linearGradient id="gh" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1200" y2="0"><stop offset="0" stopColor={C.violet} /><stop offset=".5" stopColor={C.aqua} /><stop offset="1" stopColor={C.rose} /></linearGradient>
        <linearGradient id="gtext" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="600" y2="0" spreadMethod="reflect">
          <stop offset="0" stopColor="#F8F3EE" /><stop offset=".3" stopColor={C.aqua} /><stop offset=".65" stopColor={C.goldLight} /><stop offset="1" stopColor="#F8F3EE" />
          <animateTransform attributeName="gradientTransform" type="translate" from="0 0" to="600 0" dur="9s" repeatCount="indefinite" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <filter id="blur14" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14" /></filter>
        <filter id="blur40" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="40" /></filter>
        <filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
      </defs>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + css }} />
      {children}
    </svg>
  );
}

// Dark panel: aurora blobs, moving grid, spotlight, twinkling stars, grain.
export function Backdrop({ w, h, seed = 1, stars = 40, r = 24, blobs = true }) {
  const rnd = rng(seed);
  const S = Array.from({ length: stars }, () => ({ x: rnd() * w, y: rnd() * h, r: 0.5 + rnd() * 1.1, d: rnd() * 5, t: 3 + rnd() * 3 }));
  return (
    <g>
      <defs>
        <clipPath id="bdc"><rect width={w} height={h} rx={r} /></clipPath>
        <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M56 0H0V56" fill="none" stroke="#F8F3EE" strokeOpacity=".05" />
          <animateTransform attributeName="patternTransform" type="translate" from="0 0" to="56 56" dur="14s" repeatCount="indefinite" />
        </pattern>
        <radialGradient id="spot"><stop offset="0" stopColor="#F8F3EE" stopOpacity=".14" /><stop offset="1" stopColor="#F8F3EE" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width={w} height={h} rx={r} fill={C.bg} />
      <g clipPath="url(#bdc)">
        {blobs && (
          <g filter="url(#blur40)" opacity=".5">
            <circle className="b1" cx={w * 0.18} cy={h * 0.3} r={h * 0.45} fill={C.rose} />
            <circle className="b2" cx={w * 0.82} cy={h * 0.72} r={h * 0.4} fill={C.aqua} opacity=".6" />
            <circle className="b3" cx={w * 0.55} cy={h * 0.15} r={h * 0.26} fill={C.violet} opacity=".45" />
          </g>
        )}
        <rect width={w} height={h} fill="url(#grid)" />
        <ellipse cy={h * 0.4} rx={w * 0.32} ry={h * 0.7} fill="url(#spot)">
          <animate attributeName="cx" values={`${w * 0.2};${w * 0.8};${w * 0.2}`} dur="20s" repeatCount="indefinite" />
        </ellipse>
        {S.map((s, i) => <circle key={i} className="tw" cx={s.x} cy={s.y} r={s.r} fill="#F8F3EE" style={{ animationDelay: `${s.d}s`, animationDuration: `${s.t}s` }} />)}
        <rect width={w} height={h} filter="url(#grain)" opacity=".06" />
      </g>
      <rect x=".5" y=".5" width={w - 1} height={h - 1} rx={r} fill="none" stroke="#F8F3EE" strokeOpacity=".1" />
    </g>
  );
}

// Slowly rising particles.
export function Particles({ w, h, n = 18, seed = 7 }) {
  const rnd = rng(seed);
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <circle key={i} className="rise" cx={rnd() * w} cy={h * (0.5 + rnd() * 0.5)} r={0.8 + rnd() * 1.6} fill={i % 3 ? C.aqua : C.violet} style={{ animationDelay: `${-rnd() * 10}s`, animationDuration: `${8 + rnd() * 6}s` }} />
      ))}
    </g>
  );
}

// Text split into characters that reveal one by one (tspans animate fill-opacity).
export function Chars({ text, step = 0.05, start = 0 }) {
  const out = []; let gap = false;
  [...text].forEach((c, i) => {
    if (c === ' ') { gap = true; return; }
    out.push(<tspan key={i} className="ch" dx={gap ? '0.3em' : undefined} style={delay(start + i * step)}>{c}</tspan>);
    gap = false;
  });
  return out;
}
