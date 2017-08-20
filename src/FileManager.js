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

export async function mkDir(dir) {
  return await fs.ensureDir(dir)
}

export function mkDirSync(dir) {
  return fs.ensureDirSync(dir)
}

export async function rename(src, dist) {
  return await fs.move(src, dist)
}

export function renameSync(src, dist) {
  return fs.moveSync(src, dist)
}

export default class FileManager {

  constructor(rootPath='.') {
    this.rootPath = rootPath
  }

  status() {
    return fs.statSync(this.rootPath)
  }

  list() {
    return listFiles(this.rootPath)
  }

  listSync() {
    return listFilesSync(this.rootPath)
  }

  enter(path) {

    if (fs.statSync(`${this.rootPath}/${path}`).isDirectory()) {
      this.rootPath += `/${path}`
      return true
    } else throw new Error('Not a directory')
      
  }

  static list(path) {
    return listFiles(path)
  }

  static listSync(path) {
    return listFilesSync(path)
  }

}
