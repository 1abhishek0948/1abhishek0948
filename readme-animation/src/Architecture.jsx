import { Svg, Backdrop, delay, C } from './lib.jsx';

const N = [['User', 'Browser or phone'], ['Frontend', 'HTML · CSS · JS · React'], ['API', 'REST APIs'], ['Backend', 'Django · Flask'], ['Database', 'PostgreSQL']];

export function Architecture() {
  const W = 1200, H = 430, nw = 156, nh = 118, cy = 150, cx = (i) => 120 + i * 240;
  const ret = `M${cx(4)} ${cy + nh / 2}C${cx(4)} 370 ${cx(0)} 370 ${cx(0)} ${cy + nh / 2}`;
  return (
    <Svg w={W} h={H} title="Architecture: User to Frontend to API to Backend to Database, with responses flowing back">
      <Backdrop w={W} h={H} seed={41} stars={40} />
      <defs><path id="retp" d={ret} /></defs>
      {/* return path */}
      <use href="#retp" fill="none" stroke="url(#gh)" strokeWidth="1.6" strokeDasharray="4 10" opacity=".5" className="flow" />
      {[0, 1, 2, 3].map((k) => (
        <circle key={k} r="3.5" fill={C.rose} filter="url(#glow)">
          <animateMotion dur="7s" begin={`${k * 1.75}s`} repeatCount="indefinite"><mpath href="#retp" /></animateMotion>
        </circle>
      ))}
      <text x="600" y="405" textAnchor="middle" fontSize="14" fill={C.mute}>Requests travel right, responses flow back to the user</text>
      {/* links */}
      {[0, 1, 2, 3].map((i) => {
        const a = cx(i) + nw / 2, b = cx(i + 1) - nw / 2;
        return (
          <g key={i}>
            <path d={`M${a} ${cy}H${b}`} stroke="url(#gh)" strokeWidth="2" strokeDasharray="6 8" className="flow" />
            <path d={`M${b - 8} ${cy - 6}L${b} ${cy}L${b - 8} ${cy + 6}`} fill="none" stroke={C.aqua} strokeWidth="2" strokeLinecap="round" />
            {[0, 1, 2].map((k) => (
              <circle key={k} r="3.2" cy={cy} fill="#fff" filter="url(#glow)">
                <animate attributeName="cx" values={`${a};${b}`} dur="2.4s" begin={`${k * 0.8 + i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="2.4s" begin={`${k * 0.8 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>
        );
      })}
      {/* nodes */}
      {N.map(([t, s], i) => (
        <g key={t} transform={`translate(${cx(i) - nw / 2} ${cy - nh / 2})`}>
          <g className="enter" style={delay(i * 0.4)}>
            <rect className="ring" width={nw} height={nh} rx="22" fill="none" stroke="url(#gv)" strokeWidth="1.5" style={{ animationDelay: `${i * 0.6}s` }} />
            <rect width={nw} height={nh} rx="22" fill="url(#gv)" opacity=".22" filter="url(#blur14)" className="pulse" style={{ animationDelay: `${-i}s` }} />
            <rect width={nw} height={nh} rx="22" fill={C.panel} stroke="url(#gv)" strokeWidth="1.6" />
            <circle cx={nw / 2} cy="30" r="5" fill="url(#gv)" filter="url(#glow)"><animate attributeName="opacity" values=".5;1;.5" dur="2.6s" begin={`${i * .4}s`} repeatCount="indefinite" /></circle>
            <text x={nw / 2} y="68" textAnchor="middle" fontSize="20" fontWeight="650" fill={C.text}>{t}</text>
            <text x={nw / 2} y="92" textAnchor="middle" fontSize="12.5" fill={C.mute}>{s}</text>
          </g>
        </g>
      ))}
    </Svg>
  );
}
