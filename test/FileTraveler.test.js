import FileTraveler from '../src'
import assert from 'assert'



describe('FileTraveler', () => {

  describe('listFiles', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('listFilesAsync', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
