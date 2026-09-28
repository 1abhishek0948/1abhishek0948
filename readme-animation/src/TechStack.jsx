import { Svg, Backdrop, delay, C } from './lib.jsx';

const T = [
  ['<>', 'HTML'], ['{}', 'CSS'], ['JS', 'JavaScript'], ['Re', 'React'],
  ['Py', 'Python'], ['Dj', 'Django'], ['Fl', 'Flask'],
  ['PG', 'PostgreSQL'], ['Dk', 'Docker'], ['Gi', 'Git & GitHub'],
];
const GROUPS = [['Frontend', 0, 3], ['Backend', 4, 6], ['Data and tools', 7, 9]];

export function TechStack() {
  const W = 1200, H = 310, cy = 120, x0 = 105, step = 110;
  const px = (i) => x0 + i * step;
  const hex = (r) => [0, 1, 2, 3, 4, 5].map((k) => { const a = Math.PI / 3 * k - Math.PI / 2; return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`; }).join(' ');
  return (
    <Svg w={W} h={H} title="Tech stack: HTML, CSS, JavaScript, React, Python, Django, Flask, PostgreSQL, Docker, Git and GitHub">
      <Backdrop w={W} h={H} seed={31} stars={34} />
      <path d={`M${px(0)} ${cy}H${px(9)}`} stroke="url(#gh)" strokeWidth="2" strokeDasharray="4 10" opacity=".55" className="flow" />
      {T.map(([m, label], i) => (
        <g key={label} transform={`translate(${px(i)} ${cy})`}>
          <g className="enter" style={delay(i * 0.35)}>
            <g className="float" style={{ animationDuration: `${4.5 + (i % 4) * 0.8}s`, animationDelay: `${-i * 0.7}s` }}>
              <circle r="56" fill="none" stroke="url(#gv)" strokeWidth="1.5" strokeDasharray="14 34" opacity=".55">
                <animateTransform attributeName="transform" type="rotate" from="0" to={i % 2 ? '-360' : '360'} dur={`${12 + (i % 3) * 3}s`} repeatCount="indefinite" />
              </circle>
              <g className="pulse" style={{ animationDelay: `${-i * 0.5}s` }}>
                <polygon points={hex(42)} fill="url(#gv)" opacity=".2" filter="url(#blur14)" />
                <polygon points={hex(40)} fill={C.panel} stroke="url(#gv)" strokeWidth="1.6" />
                <text y="7" textAnchor="middle" fontSize="20" fontWeight="700" fill="url(#gtext)">{m}</text>
              </g>
              <text y="88" textAnchor="middle" fontSize="14" fill={C.mute}>{label}</text>
            </g>
          </g>
        </g>
      ))}
      {GROUPS.map(([g, a, b]) => (
        <g key={g}>
          <path d={`M${px(a) - 38} 250H${px(b) + 38}`} stroke="#fff" strokeOpacity=".18" strokeWidth="1.5" />
          <text x={(px(a) + px(b)) / 2} y="278" textAnchor="middle" fontSize="14" fill={C.text} fillOpacity=".7">{g}</text>
        </g>
      ))}
    </Svg>
  );
}
