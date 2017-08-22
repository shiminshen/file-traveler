import fs from 'fs-extra'

export async function listFiles(path) {

  let files = await fs.readdir(path)
  return files.map( name => ({
    name,
    isDirectory: fs.statSync(`${path}/${name}`).isDirectory()
  }))
  
}

export function listFilesSync(path) {

  return fs.readdirSync(path)
  .map( name => ({
    name,
    isDirectory: fs.statSync(`${path}/${name}`).isDirectory()
  }))
  
}
