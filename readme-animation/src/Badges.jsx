import { Svg, Backdrop, delay, C } from './lib.jsx';

const ITEMS = ['Python', 'Django', 'Flask', 'React', 'JavaScript', 'PostgreSQL', 'Docker', 'REST APIs', 'SEO'];

export function Badges() {
  const W = 1200, H = 120, gap = 14, h = 42;
  const widths = ITEMS.map((t) => Math.round(t.length * 9 + 50));
  const total = widths.reduce((a, b) => a + b, 0) + gap * (ITEMS.length - 1);
  let x = (W - total) / 2;
  return (
    <Svg w={W} h={H} title="Python, Django, Flask, React, JavaScript, PostgreSQL, Docker, REST APIs, SEO">
      <Backdrop w={W} h={H} seed={13} stars={16} blobs={false} />
      {ITEMS.map((t, i) => {
        const w = widths[i], px = x; x += w + gap;
        const col = i % 3 === 0 ? C.violet : i % 3 === 1 ? C.aqua : C.rose;
        return (
          <g key={t} transform={`translate(${px} 39)`}>
            <clipPath id={`bc${i}`}><rect width={w} height={h} rx={h / 2} /></clipPath>
            <g className="enter" style={delay(i * 0.18)}>
              <g className="float" style={{ animationDuration: `${4.5 + (i % 4) * 0.7}s`, animationDelay: `${-i * 0.6}s` }}>
                <rect width={w} height={h} rx={h / 2} fill={col} opacity=".14" filter="url(#blur14)" />
                <rect width={w} height={h} rx={h / 2} fill="#fff" fillOpacity=".05" stroke={col} strokeOpacity=".55" />
                <circle cx="20" cy={h / 2} r="4" fill={col} filter="url(#glow)"><animate attributeName="opacity" values=".5;1;.5" dur={`${2 + (i % 3) * .5}s`} repeatCount="indefinite" /></circle>
                <text x={w / 2 + 8} y="27" textAnchor="middle" fontSize="15" fontWeight="600" fill={C.text}>{t}</text>
                <g clipPath={`url(#bc${i})`}>
                  <rect y="0" width="40" height={h} fill="#fff" opacity=".12" transform="skewX(-20)">
                    <animate attributeName="x" values={`-80;${w + 60};${w + 60}`} keyTimes="0;.4;1" dur="6s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                  </rect>
                </g>
              </g>
            </g>
          </g>
        );
      })}
    </Svg>
  );
}
