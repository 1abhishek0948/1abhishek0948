import { Svg, Backdrop, Particles, delay, C } from './lib.jsx';

function wave(amp, y, period, phase) {
  let d = `M0 ${y}`;
  for (let x = 0; x <= 2400; x += 20) d += `L${x} ${(y + amp * Math.sin((x / period) * Math.PI * 2 + phase)).toFixed(1)}`;
  return d + 'V260H0Z';
}

export function Footer() {
  const W = 1200, H = 270;
  return (
    <Svg w={W} h={H} title="Abhishek Sharma, Full Stack Developer, Nepal">
      <Backdrop w={W} h={H} seed={61} stars={44} />
      <defs>
        <clipPath id="fc"><rect width={W} height={H} rx="24" /></clipPath>
        <linearGradient id="wv" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={C.violet} /><stop offset=".5" stopColor={C.aqua} /><stop offset="1" stopColor={C.violet} /></linearGradient>
      </defs>
      <Particles w={W} h={H} n={24} seed={23} />
      <g clipPath="url(#fc)">
        {[[14, 210, 600, 0, 0.22, 26], [10, 224, 400, 1.6, 0.16, 18], [8, 236, 300, 3.1, 0.3, 12]].map(([a, y, p, ph, o, dur], i) => (
          <path key={i} d={wave(a, y, p, ph)} fill="url(#wv)" opacity={o}>
            <animateTransform attributeName="transform" type="translate" from="0 0" to={`${-p} 0`} dur={`${dur}s`} repeatCount="indefinite" />
          </path>
        ))}
      </g>
      <g className="float" style={{ animationDuration: '8s' }}>
        <text x="600" y="102" textAnchor="middle" fontSize="50" fontWeight="700" fill="url(#gv)" opacity=".4" filter="url(#blur14)">Abhishek Sharma</text>
        <text x="600" y="102" textAnchor="middle" fontSize="50" fontWeight="700" fill="url(#gtext)">Abhishek Sharma</text>
        <g className="enter" style={delay(0.6)}>
          <text x="600" y="142" textAnchor="middle" fontSize="18" fill={C.text} fillOpacity=".75">Full Stack Developer from Nepal</text>
          <text x="600" y="172" textAnchor="middle" fontSize="14" fill={C.mute}>Animations in this page are React, CSS and SVG, exported as static assets.</text>
        </g>
      </g>
    </Svg>
  );
}
