export default class UsersController {

  constructor($scope, $state, $stateParams, localStorageService, UserService) {
    this.name = 'users';
    this.state = $state;
    this.localStorage = localStorageService;
    this.UserService = UserService;
    this.q = '';
    this.userId = $stateParams.userid;
    this.userList = [];
    this.activeUser = null;
    this.successMsg = '';
    this.$searchBox = $('#search-box');
    this.$searchDropDown = $('#search-dropdown');
    $scope.$watch('users.q', this.search.bind(this));
    if (this.userId) {
      this.select(this.userId);
    }
  }

  search(q) {
    if (!q) {
      this.$searchDropDown.removeClass('show');
      return;
    }
    this.$searchDropDown.addClass('show');
    this.userList = this.UserService.User.search({q});
  }

  clearSearch() {
    this.q = '';
  }

  unFocusSearch() {
    this.$searchDropDown.removeClass('show');
  }

  changeUser(userid) {
    this.state.go('user_info', { userid });
  }

  select(id) {
    this.q = '';
    const user = this.localStorage.get(id);
    this.activeUser = user;

    if (!this.activeUser) {
      this.activeUser = this.UserService.User.get({id});
    }
  }

  clearSuccessMsg() {
    this.successMsg = '';
  }

  update(id) {
    // save user data to local storage
    this.localStorage.set(id, this.activeUser);
    this.successMsg = 'User has been updated';
  }

  revert(id) {
    this.activeUser = this.UserService.User.get({id});
    this.localStorage.set(id, this.activeUser);
    this.successMsg = 'User data reverted';
  }

  resetAll() {
    this.localStorage.clearAll();
    if (this.activeUser && this.activeUser.id) {
      this.revert(this.activeUser.id);
    }
    this.successMsg = 'Storage data cleared';
  }
}

UsersController.$inject = ['$scope', '$state', '$stateParams', 'localStorageService',
  'UserService'];
