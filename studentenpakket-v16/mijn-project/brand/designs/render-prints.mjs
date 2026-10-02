// Maakt de printbestanden opnieuw uit statement-designs.html (byte-identiek, vaste seed).
// Gebruik: node render-prints.mjs [van] [tot]   bv. node render-prints.mjs 1 500
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const from = Number(process.argv[2] || 1), to = Number(process.argv[3] || 500);
const out = path.join(here, 'prints');
fs.mkdirSync(out, { recursive: true });

const launch = process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {};
const browser = await chromium.launch(launch);
const page = await browser.newPage();
await page.goto('file://' + path.join(here, 'statement-designs.html'));
for (let n = from; n <= to; n++) {
  const url = await page.evaluate(i => print(i, 4), n - 1);
  const file = path.join(out, `visionair-design-${String(n).padStart(3, '0')}.png`);
  fs.writeFileSync(file, Buffer.from(url.split(',')[1], 'base64'));
  process.stdout.write(`\r${n}/${to}`);
}
await browser.close();
console.log(`\nKlaar: ${out}`);
