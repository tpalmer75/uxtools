angular.module('uxLibrary', [])

.controller('booksCtrl', function($scope, booksFactory) {

  $scope.books = booksFactory.books();
  $scope.bookLists = booksFactory.bookLists();

  $scope.categoryData = {
    categoryModel: {
        tags: ""
    },
    categoryOptions: [
        {name: "All", value: ""},
        {name: "UX Basics", value: "UX Basics"},
        {name: "Typography", value: "Typography"},
        {name: "Mobile & Responsive", value: "Mobile & Responsive"},
        {name: "Usability", value: "Usability"}
    ]
  };
})

.factory('booksFactory', function() {

    var books = [{
        title: "Don't Make Me Think",
        link: "",
        author: "Steve Krug",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "UX Basics"
        ],
        image: "krug.png",
        recommendations: [
        	"adobe-xd-team",
        	"toptal-ux-list"
        ]
    }, {
        title: "Mobile First",
        author: "Luke Wroblewski",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Mobile & Responsive"
        ],
        image: "wroblewski.png",
    }, {
        title: "The Design of Everyday Things",
        author: "Donald Norman",
        url: "http://amzn.com/0465050654",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "UX Basics",
            "Usability"
        ],
        recommendations: [
            "The Only UX Reading List Ever",
        ],
        image: "norman.png",
    }, {
        title: "About Face",
        author: "Alan Cooper",
        url: "http://amzn.com/1118766571",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Usability"
        ],
        recommendations: [
            "The Only UX Reading List Ever",
        ],
        image: "cooper.png",
    }, {
        title: "The Elements of User Experience: User-Centered Design for the Web and Beyond",
        author: "Jesse James Garrett",
        url: "http://amzn.com/0321683684",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "##"
        ],
        recommendations: [
            "The Only UX Reading List Ever",
        ],
        image: "garrett.png",
    }, {
        title: "Subject To Change: Creating Great Products & Services for an Uncertain World",
        author: "Peter Merholz, Todd Wilkens, Brandon Schauer, David Verba",
        url: "http://amzn.com/0596516835",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "###"
        ],
        recommendations: [
            "The Only UX Reading List Ever",
        ],
        image: "merholz.png",
    }, {
        title: "A Practical Guide to Information Architecture",
        author: "Donna Spencer",
        url: "http://uxmastery.com/practical-ia/",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Information Architecture"
        ],
        recommendations: [
            "The Only UX Reading List Ever",
        ],
        image: "spencer.png",
    }, {
        title: "Communicating Design: Developing Web Site Documentation for Design and Planning",
        author: "Dan M. Brown",
        url: "http://amzn.com/0321712463",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "###"
        ],
        recommendations: [
            "The Only UX Reading List Ever",
        ],
        image: "brown.png",
    }, {
        title: "Designing Together: The collaboration and conflict management handbook for creative professionals",
        author: "Dan M. Brown",
        url: "http://amzn.com/0321918630",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "###"
        ],
        recommendations: [
            "The Only UX Reading List Ever",
        ],
        image: "brown-2.png",
    }, {
        title: "Seductive Interaction Design: Creating Playful, Fun, and Effective User Experiences",
        author: "Stephen Anderson",
        url: "http://amzn.com/0321725522",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "###"
        ],
        recommendations: [
            "The Only UX Reading List Ever",
        ],
        image: "anderson.png",
    }, {
        title: "100 Things Every Designer Needs to Know About People",
        author: "Susan Weinschenk",
        url: "http://amzn.com/0321767535",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "###"
        ],
        recommendations: [
            "The Only UX Reading List Ever",
        ],
        image: "weinschenk.png",
    }, {
        title: "The Shape of Design",
        author: "Frank Chimero",
        url: "http://shapeofdesignbook.com/",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "###"
        ],
        recommendations: [
            "The Only UX Reading List Ever",
        ],
        image: "chimero.png",
    }];

    var bookLists = {
    	"adobe-xd-team": {
    		name: "The Adobe XD Team Book List",
            url: "https://google.com",
            image: "adobe-xd.png"
    	},
    	"toptal-ux-list": {
    		name: "The Toptal Ultimate List of UX Books",
            url: "https://google.com",
            image: "adobe-xd.png"
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
