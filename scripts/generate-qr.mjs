import QRCode from 'qrcode';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const urlFlag = process.argv.find((arg) => arg.startsWith('--url='));
const url = urlFlag?.slice('--url='.length) || process.argv[2];

if (!url) {
  console.error('Uso: npm run qr -- --url=https://usuario.github.io/repositorio/');
  process.exit(1);
}

const outputDir = resolve('public');
const outputFile = resolve(outputDir, 'koa-caffe-qr.png');

await mkdir(outputDir, { recursive: true });
await QRCode.toFile(outputFile, url, {
  width: 1400,
  margin: 2,
  color: {
    dark: '#42382f',
    light: '#fffaf1',
  },
});

console.log(`QR generado en ${outputFile}`);
