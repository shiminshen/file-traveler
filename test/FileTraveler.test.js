import FileTraveler from '../src'
import assert from 'assert'

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

  describe('list files', () => {

    it('Sychronous listFilesSync', () => {
      assert.deepEqual(fileList, FileTraveler.listFilesSync(tmpFilesPath));
    });

    it('Asynchronous listFiles', (done) => {
      FileTraveler.listFiles(tmpFilesPath)
      .then( files => {
        assert.deepEqual(fileList, files)
        done()
      })
      .catch(e => done(e))
    });
  });

});
