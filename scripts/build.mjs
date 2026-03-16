import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const buildDir = join(process.cwd(), 'build');
mkdirSync(buildDir, { recursive: true });

writeFileSync(
  join(buildDir, 'index.html'),
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>aica</title>
</head>
<body>
  <h1>aica project</h1>
  <p>Deployed via GitHub Actions.</p>
</body>
</html>`
);

console.log('Build complete: ./build');
