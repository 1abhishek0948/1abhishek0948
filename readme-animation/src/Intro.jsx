import { Svg, Backdrop, delay, C } from './lib.jsx';

function Words({ parts, y, size, weight = 500, start = 0 }) {
  let n = 0, first = true;
  return (
    <text x="600" y={y} textAnchor="middle" fontSize={size} fontWeight={weight} fill={C.text}>
      {parts.map(([t, fill], pi) => t.split(' ').filter(Boolean).map((wd) => (
        <tspan key={`${pi}-${wd}-${n}`} className="ch" dx={first ? undefined : '0.3em'} fill={fill || undefined} style={delay(start + 0.14 * (first = false, n++))}>{wd}</tspan>
      )))}
    </text>
  );
}

export function Intro() {
  const W = 1200, H = 270;
  return (
    <Svg w={W} h={H} title="Modern Full Stack Developer specializing in Python, Django, React, PostgreSQL and modern web development">
      <Backdrop w={W} h={H} seed={9} stars={26} />
      <g className="float">
        <Words y={78} size={38} weight={650} parts={[['Modern Full Stack Developer', '#F8F3EE']]} />
        <Words y={128} size={30} start={0.5} parts={[['specializing in '], ['Python,', C.aqua], ['Django,', C.aqua], ['React,', C.violet], ['PostgreSQL', C.violet]]} />
        <Words y={172} size={30} start={1.3} parts={[['and modern web development.']]} />
      </g>
      <g className="enter" style={delay(1.8)}>
        <text x="600" y="228" textAnchor="middle" fontSize="17" fill={C.mute}>B.Tech in Computer Science &amp; Engineering, Parul University, Vadodara (2022–2026). Based in Nepal.</text>
      </g>
    </Svg>
  );
}
