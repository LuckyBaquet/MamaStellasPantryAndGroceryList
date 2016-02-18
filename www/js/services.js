angular.module('starter.services', [])

  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Potatoes',
      lastText: 'I only have eyes for you',
      face: 'img/baking_potatoes.jpg'
    }, {
      id: 1,
      name: 'Paper Towels',
      lastText: "",
      face: 'img/paper_towels.jpg'
    }, {
      id: 2,
      name: 'Dog Food',
      lastText: 'I\'m dog dogfood',
      face: 'img/dog_food.jpg'
    }, {
      id: 3,
      name: 'Milk',
      lastText: 'Got Milk?',
      face: 'img/milk_carton.jpg'
    }, {
      id: 4,
      name: 'Red Apples',
      lastText: 'These are wicked good apples',
      face: 'img/red_apples.jpg'
    }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };

  });
