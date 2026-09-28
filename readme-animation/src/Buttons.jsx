import { Svg, C, delay } from './lib.jsx';

// Animated CTA: moving gradient, shine sweep, glow, float.
export function Button({ label, w = 240, primary = true, i = 0 }) {
  const W = w + 60, H = 100, h = 56;
  return (
    <Svg w={W} h={H} title={label}>
      <defs>
        <linearGradient id="bg" gradientUnits="userSpaceOnUse" x1="30" y1="0" x2={30 + w} y2="0" spreadMethod="reflect">
          <stop offset="0" stopColor={primary ? C.aqua : C.violet} /><stop offset=".5" stopColor={primary ? C.goldLight : C.aqua} /><stop offset="1" stopColor={primary ? C.aqua : C.violet} />
          <animateTransform attributeName="gradientTransform" type="translate" from="0 0" to={`${w} 0`} dur="5s" repeatCount="indefinite" />
        </linearGradient>
        <clipPath id="bcp"><rect x="30" y="22" width={w} height={h} rx="28" /></clipPath>
      </defs>
      <g className="float" style={{ animationDuration: `${5 + i}s`, ...delay(-i) }}>
        <rect x="30" y="26" width={w} height={h} rx="28" fill="url(#bg)" filter="url(#blur14)">
          <animate attributeName="opacity" values=".25;.55;.25" dur="3.5s" repeatCount="indefinite" />
        </rect>
        {primary
          ? <rect x="30" y="22" width={w} height={h} rx="28" fill="url(#bg)" />
          : <rect x="30" y="22" width={w} height={h} rx="28" fill={C.panel} stroke="url(#bg)" strokeWidth="1.6" />}
        <g clipPath="url(#bcp)">
          <rect y="22" width="46" height={h} fill="#F8F3EE" opacity=".28" transform="skewX(-22)">
            <animate attributeName="x" values={`-40;${w + 120};${w + 120}`} keyTimes="0;.45;1" dur="4.5s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
          </rect>
        </g>
        <text x={30 + w / 2} y="57" textAnchor="middle" fontSize="18" fontWeight="700" fill={primary ? C.bg : C.text} letterSpacing=".2">{label}</text>
      </g>
    </Svg>
  );
}
