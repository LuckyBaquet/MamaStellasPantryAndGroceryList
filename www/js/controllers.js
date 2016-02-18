angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, $ionicModal, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.itemInput = {
      item: "",
      description: "",
      quantity: "",
      picture: "",
    };

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };

    $scope.addItem = function () {
      $scope.chats.push({
        id: $scope.itemInput.quantity, name: $scope.itemInput.item, lastText: $scope.itemInput.description,
        face: 'placerholder'
      });
      $scope.itemInput.item = "";
      $scope.itemInput.description = "";
      $scope.itemInput.quantity = "";
    }

    $ionicModal.fromTemplateUrl('modal.html', function ($ionicModal) {
      $scope.modal = $ionicModal;
    }, {
      // Use our scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation we want to use for the modal entrance
      animation: 'slide-in-up',
    });
    $scope.closeModal = function () {
      $scope.modal.hide();
    };

  })


  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
