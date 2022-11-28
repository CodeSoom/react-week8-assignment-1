import { saveItem, loadItem, deleteItem } from './storage';

describe('storage', () => {
  jest.spyOn(window.localStorage.__proto__, 'setItem');

  beforeEach(() => {
    window.localStorage.__proto__.setItem = jest.fn();
    window.localStorage.__proto__.getItem = jest.fn();
    window.localStorage.__proto__.removeItem = jest.fn();
  });

  describe('saveItem', () => {
    it('calls localStorage setItem', () => {
      saveItem('key', 'value');

      expect(localStorage.setItem).toBeCalledWith('key', 'value');
    });
  });

  describe('loadItem', () => {
    it('calls localStorage getItem', () => {
      loadItem('key');

      expect(localStorage.getItem).toBeCalledWith('key');
    });
  });

  describe('deleteItem', () => {
    it('calls localStorage removeItem', () => {
      deleteItem('key');

      expect(localStorage.removeItem).toBeCalledWith('key');
    });
  });
});
