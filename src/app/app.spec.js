import app from './app';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    it('should contain the author', () => {
      expect(ctrl.author).toBe('Jeremy Lu');
    });

    it('should contain the copy year', () => {
      expect(ctrl.year).toBe(2017);
    });
  });
});
