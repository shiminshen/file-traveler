import fs from 'fs-extra'

export async function mkdir(dir) {
  return await fs.ensureDir(dir)
}

export function mkdirSync(dir) {
  return fs.ensureDirSync(dir)
}

