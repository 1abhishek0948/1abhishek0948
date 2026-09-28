import { renderToStaticMarkup } from 'react-dom/server';
import StackIcon from 'tech-stack-icons';
import { Svg, Backdrop, delay, C } from './lib.jsx';

// Icons come from https://www.tech-stack-icons.com (npm: tech-stack-icons).
// variant: 'dark' (made for dark backgrounds) | 'light' | 'grayscale'
const VARIANT = 'dark';

// [icon name in tech-stack-icons, label]
const T = [
  ['html5', 'HTML'], ['css3', 'CSS'], ['js', 'JavaScript'], ['react', 'React'],
  ['python', 'Python'], ['django', 'Django'], ['flask', 'Flask'],
  ['postgresql', 'PostgreSQL'], ['docker', 'Docker'], ['git', 'Git'], ['github', 'GitHub'],
];
const GROUPS = [['Frontend', 0, 3], ['Backend', 4, 6], ['Data and tools', 7, 10]];

// GitHub shows README SVGs through <img>, which cannot load outside files.
// So each icon is rendered here and its paths are inlined into the SVG, with unique ids.
function Icon({ name, uid, size }) {
  const html = renderToStaticMarkup(<StackIcon name={name} variant={VARIANT} />);
  const m = html.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  if (!m) throw new Error(`tech-stack-icons has no icon called "${name}"`);
  const inner = m[1].split(':R0:').join(`ic${uid}`);
  return <svg x={-size / 2} y={-size / 2 - 1} width={size} height={size} viewBox="0 0 100 100" fill="none" dangerouslySetInnerHTML={{ __html: inner }} />;
}

export function TechStack() {
  const W = 1200, H = 310, cy = 120, x0 = 100, step = 100, last = T.length - 1;
  const px = (i) => x0 + i * step;
  const hex = (r) => [0, 1, 2, 3, 4, 5].map((k) => { const a = Math.PI / 3 * k - Math.PI / 2; return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`; }).join(' ');
  return (
    <Svg w={W} h={H} title="Tech stack: HTML, CSS, JavaScript, React, Python, Django, Flask, PostgreSQL, Docker, Git and GitHub">
      <Backdrop w={W} h={H} seed={31} stars={34} />
      <path d={`M${px(0)} ${cy}H${px(last)}`} stroke="url(#gh)" strokeWidth="2" strokeDasharray="4 10" opacity=".55" className="flow" />
      {T.map(([icon, label], i) => (
        <g key={label} transform={`translate(${px(i)} ${cy})`}>
          <g className="enter" style={delay(i * 0.35)}>
            <g className="float" style={{ animationDuration: `${4.5 + (i % 4) * 0.8}s`, animationDelay: `${-i * 0.7}s` }}>
              <circle r="50" fill="none" stroke="url(#gv)" strokeWidth="1.5" strokeDasharray="12 30" opacity=".55">
                <animateTransform attributeName="transform" type="rotate" from="0" to={i % 2 ? '-360' : '360'} dur={`${12 + (i % 3) * 3}s`} repeatCount="indefinite" />
              </circle>
              <g className="pulse" style={{ animationDelay: `${-i * 0.5}s` }}>
                <polygon points={hex(40)} fill="url(#gv)" opacity=".2" filter="url(#blur14)" />
                <polygon points={hex(38)} fill={C.panel} stroke="url(#gv)" strokeWidth="1.6" />
                <Icon name={icon} uid={i} size={44} />
              </g>
              <text y="84" textAnchor="middle" fontSize="14" fill={C.mute}>{label}</text>
            </g>
          </g>
        </g>
      ))}
      {GROUPS.map(([g, a, b]) => (
        <g key={g}>
          <path d={`M${px(a) - 36} 250H${px(b) + 36}`} stroke="#F8F3EE" strokeOpacity=".18" strokeWidth="1.5" />
          <text x={(px(a) + px(b)) / 2} y="278" textAnchor="middle" fontSize="14" fill={C.text} fillOpacity=".7">{g}</text>
        </g>
      ))}
    </Svg>
  );
}
