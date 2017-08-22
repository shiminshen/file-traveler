import fs from 'fs-extra'

export async function rename(src, dist) {
  return await fs.move(src, dist)
}

export function renameSync(src, dist) {
  return fs.moveSync(src, dist)
}
