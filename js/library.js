angular.module('uxLibrary', [])

.controller('booksCtrl', function($scope, booksFactory) {

  $scope.books = booksFactory.books();
  $scope.bookLists = booksFactory.bookLists();
  $scope.asdf = "camilla";

})

.factory('booksFactory', function() {

    var books = [{
        title: "Don't Make Me Think",
        author: "Steve Krug",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: {
        	uxBasics: true
        },
        "image": {
            "background-position": "0 0",
        },
        recommendations: [
        	"adobe-xd-team",
        	"toptal-ux-list"
        ]
    }, {
        title: "Mobile First",
        author: "Luke Wroblewski",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: {
        	uxBasics: true
        },
        "image": {
            "background-position": "0 0",
        },
    }];

    var bookLists = {
    	"adobe-xd-team": {
    		name: "The Adobe XD Team Book List"
    	},
    	"toptal-ux-list": {
    		name: "The Toptal Ultimate List of UX Books"
    	}
    };

    return {
        books: function() {
            return books;
        },
        bookLists: function() {
        	return bookLists;
        }
    };

});
