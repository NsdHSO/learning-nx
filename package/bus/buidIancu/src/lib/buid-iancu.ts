

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
// Get current file's path and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(dirname(__filename), 'lib/infrastructure');

export function buidIancu(): string {
  return `${__dirname}`;
}
