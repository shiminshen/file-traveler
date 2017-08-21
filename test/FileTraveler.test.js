import FileTraveler, {
  listFiles,
  listFilesSync,
  rename,
  renameSync,
  mkDir,
  mkDirSync
} from '../src'
import assert from 'assert'
import { expect } from 'chai'

import FixtureDir from 'fixture-dir'
import mochaFixtureDir from 'mocha-fixture-dir'

let fixtureUtil = mochaFixtureDir(FixtureDir);

fixtureUtil.init('.')
fixtureUtil.mkdir({
  folderName: 'fileTraveler-test-files',
  copyFrom: `${__dirname}/test-files`
})

let tmpFilesPath = '/tmp/fileTraveler-test-files'

describe('FileTraveler', () => {

  let fileList = [
    { name: 'directory1', isDirectory: true },
    { name: 'file1.js', isDirectory: false }
  ]

  // list files testing
  describe('List files', () => {

    it('Sychronous listFilesSync', () => {
      let files = FileTraveler.listFilesSync(tmpFilesPath)
      expect(files).to.deep.equal(fileList)
    });

    it('Asynchronous listFiles', (done) => {
      FileTraveler.listFiles(tmpFilesPath)
      .then( files => {
        expect(files).to.deep.equal(fileList)
        done()
      })
      .catch(e => done(e))
    });
  });

  describe('Rename files', () => {

    let renamedFileList = [
      { name: 'renamed.js', isDirectory: false },
      { name: 'renamedDir', isDirectory: true }
    ]

    it('Synchronous rename', () => {

        renameSync(`${tmpFilesPath}/directory1`, `${tmpFilesPath}/renamedDir`)
        renameSync(`${tmpFilesPath}/file1.js`, `${tmpFilesPath}/renamed.js`)

        let files = FileTraveler.listFilesSync(tmpFilesPath)
        expect(files).to.deep.equal(renamedFileList)
    })
  })

  describe('Make directory', () => {
    it('Synchronous mkDir', () => {

      let beforeFiles = FileTraveler.listFilesSync(tmpFilesPath)
      expect(beforeFiles).to.be.an('array').deep.not.include({ name: 'newDir', isDirectory: true })
      mkDirSync(`${tmpFilesPath}/newDir`)

      let afterFiles = FileTraveler.listFilesSync(tmpFilesPath)

      expect(afterFiles).to.be.an('array').deep.include({ name: 'newDir', isDirectory: true })

    })

  })

});
