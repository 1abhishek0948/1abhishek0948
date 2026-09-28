import fs from 'node:fs';
import path from 'node:path';
import { renderToStaticMarkup } from 'react-dom/server';
import sharp from 'sharp';
import { Hero } from '../src/Hero.jsx';
import { Title } from '../src/Title.jsx';
import { Intro } from '../src/Intro.jsx';
import { Badges } from '../src/Badges.jsx';
import { Button } from '../src/Buttons.jsx';
import { Heading } from '../src/Heading.jsx';
import { Features } from '../src/Features.jsx';
import { TechStack } from '../src/TechStack.jsx';
import { Architecture } from '../src/Architecture.jsx';
import { Quickstart } from '../src/Quickstart.jsx';
import { Footer } from '../src/Footer.jsx';

const root = path.resolve(__dirname, '..', '..');
const out = path.join(root, 'assets', 'readme');
const IMAGE = process.env.HERO_IMAGE || path.join(root, 'image copy.png');
let FMT = process.env.HERO_FORMAT; // 'webp' | 'jpeg'; default: webp only if the image has transparency
fs.mkdirSync(out, { recursive: true });

async function heroDataUri() {
  if (fs.existsSync(IMAGE)) {
    if (!FMT) FMT = (await sharp(IMAGE).metadata()).hasAlpha ? 'webp' : 'jpeg';
    const buf = await sharp(IMAGE).resize({ width: 1600, withoutEnlargement: true })[FMT === 'jpeg' ? 'jpeg' : 'webp']({ quality: 82 }).toBuffer();
    console.log(`hero image: ${path.basename(IMAGE)} embedded (${(buf.length / 1024).toFixed(0)} KB)`);
    return `data:image/${FMT === 'jpeg' ? 'jpeg' : 'webp'};base64,${buf.toString('base64')}`;
  }
  console.warn(`\n!! "${IMAGE}" not found. Building a PLACEHOLDER hero.\n!! Put "image copy.png" in the repo root and run "npm run build" again.\n`);
  const ph = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a1440"/><stop offset="1" stop-color="#0b2a33"/></linearGradient></defs><rect width="1600" height="900" fill="url(#g)"/><text x="800" y="470" text-anchor="middle" font-family="sans-serif" font-size="44" fill="#8A90A8">image copy.png goes here</text></svg>`;
  const buf = await sharp(Buffer.from(ph)).jpeg({ quality: 70 }).toBuffer();
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
}

const write = (name, el) => {
  const svg = '<?xml version="1.0" encoding="UTF-8"?>\n' + renderToStaticMarkup(el).replace(/\n\s*/g, '');
  fs.writeFileSync(path.join(out, name), svg);
  console.log(name.padEnd(28), `${(Buffer.byteLength(svg) / 1024).toFixed(1)} KB`);
};

(async () => {
  write('hero.svg', <Hero img={await heroDataUri()} />);
  write('title.svg', <Title />);
  write('intro.svg', <Intro />);
  write('badges.svg', <Badges />);
  write('btn-portfolio.svg', <Button label="Portfolio" w={200} i={0} />);
  write('btn-developer.svg', <Button label="Developer portfolio" w={250} primary={false} i={1} />);
  write('btn-github.svg', <Button label="GitHub" w={200} primary={false} i={2} />);
  write('btn-neptwone.svg', <Button label="Neptwone demo" w={210} primary={false} i={0} />);
  write('btn-aiwebdoctor.svg', <Button label="AI Web Doctor" w={210} primary={false} i={1} />);
  write('btn-lafzloom.svg', <Button label="Lafzloom" w={190} primary={false} i={2} />);
  write('heading-projects.svg', <Heading text="What I build" />);
  write('features.svg', <Features />);
  write('heading-stack.svg', <Heading text="Tech stack" />);
  write('tech-stack.svg', <TechStack />);
  write('heading-architecture.svg', <Heading text="How my projects fit together" />);
  write('architecture.svg', <Architecture />);
  write('heading-start.svg', <Heading text="Get in touch" />);
  write('quickstart.svg', <Quickstart />);
  write('footer.svg', <Footer />);
})();
