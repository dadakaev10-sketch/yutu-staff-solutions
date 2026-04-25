import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, extname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

// Folders to scan recursively for raster images.
const TARGET_DIRS = [
  resolve(root, 'public/branchen'),
  resolve(root, 'public/images'),
];

const SUPPORTED_EXT = new Set(['.jpg', '.jpeg', '.png']);
const WEBP_QUALITY = 82;

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return;
    throw err;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

async function shouldConvert(source, target) {
  try {
    const [src, dst] = await Promise.all([stat(source), stat(target)]);
    // Only re-generate if the source is newer than the existing webp.
    return src.mtimeMs > dst.mtimeMs;
  } catch {
    return true; // target missing
  }
}

let converted = 0;
let skipped = 0;
let savedBytes = 0;

for (const dir of TARGET_DIRS) {
  for await (const file of walk(dir)) {
    const ext = extname(file).toLowerCase();
    if (!SUPPORTED_EXT.has(ext)) continue;

    const target = file.slice(0, -ext.length) + '.webp';
    if (!(await shouldConvert(file, target))) {
      skipped += 1;
      continue;
    }

    const srcStat = await stat(file);
    await sharp(file)
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toFile(target);
    const dstStat = await stat(target);
    savedBytes += Math.max(0, srcStat.size - dstStat.size);

    const saved = (((srcStat.size - dstStat.size) / srcStat.size) * 100).toFixed(1);
    const rel = file.replace(root + '/', '');
    console.log(`✓ ${rel} → ${rel.slice(0, -ext.length)}.webp (-${saved}%)`);
    converted += 1;
  }
}

console.log(
  `\nDone. ${converted} converted, ${skipped} up-to-date. Saved ~${(savedBytes / 1024).toFixed(0)} KB total.`
);
