import fs from 'fs-extra'
import {
  listFiles,
  listFilesSync,
  rename,
  renameSync,
  mkdir,
  mkdirSync
} from './lib'

export * from './lib'

export default class FileManager {

  constructor(rootPath='.') {
    this.rootPath = rootPath
  }

  status() {
    return fs.statSync(this.rootPath)
  }

  listFiles() {
    return listFiles(this.rootPath)
  }

  listFilesSync() {
    return listFilesSync(this.rootPath)
  }

  enter(path) {

    if (fs.statSync(`${this.rootPath}/${path}`).isDirectory()) {
      this.rootPath += `/${path}`
      return true
    } else throw new Error('Not a directory')
      
  }

  static listFiles(path) {
    return listFiles(path)
  }

  static listFilesSync(path) {
    return listFilesSync(path)
  }

}
