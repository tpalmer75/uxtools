angular.module('uxLibrary', [])

.controller('booksCtrl', function($scope, booksFactory) {

  $scope.books = booksFactory.books();
  $scope.bookLists = booksFactory.bookLists();

  $scope.random = function() {
        return 0.5 - Math.random();
    };

  $scope.categoryData = {
    categoryModel: {
        tags: ""
    },
    categoryOptions: [
        {name: "All", value: ""},
        {name: "General UX", value: "General UX"},
        {name: "Typography", value: "Typography"},
        {name: "Mobile & Responsive", value: "Mobile & Responsive"},
        {name: "Usability", value: "Usability"},
        {name: "Info Architecture", value: "Info Architecture"}
    ]
  };
})

.factory('booksFactory', function() {

    var books = [{
        title: "Don't Make Me Think",
        author: "Steve Krug",
        url: "http://amzn.to/2eOJgqS",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "General UX"
        ],
        image: "krug.png",
        recommendations: [
            "002","003","004"
        ]
    }, {
        title: "Mobile First",
        author: "Luke Wroblewski",
        url: "http://amzn.to/2g6jh3m",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Mobile & Responsive"
        ],
        recommendations: [
        ],
        image: "wroblewski.png",
    }, {
        title: "The Design of Everyday Things",
        author: "Donald Norman",
        url: "http://amzn.to/2fLQlJx",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "General UX",
            "Usability"
        ],
        recommendations: [
            "001",
            "003"
        ],
        image: "norman.png",
    }, {
        title: "About Face",
        author: "Alan Cooper",
        url: "http://amzn.to/2g6kFCT",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Usability"
        ],
        recommendations: [
            "001",
            "002",
            "003"
        ],
        image: "cooper.png",
    }, {
        title: "The Elements of User Experience: User-Centered Design for the Web and Beyond",
        author: "Jesse James Garrett",
        url: "http://amzn.to/2fLTut1",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "General UX"
        ],
        recommendations: [
            "001","004"
        ],
        image: "garrett.png",
    }, {
        title: "Subject To Change: Creating Great Products & Services for an Uncertain World",
        author: "Peter Merholz, Todd Wilkens, Brandon Schauer, David Verba",
        url: "http://amzn.to/2fLRWPI",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "General UX"
        ],
        recommendations: [
            "001",
        ],
        image: "merholz.png",
    }, {
        title: "A Practical Guide to Info Architecture",
        author: "Donna Spencer",
        url: "http://amzn.to/2eTajEK",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Info Architecture"
        ],
        recommendations: [
            "001",
        ],
        image: "spencer.png",
    }, {
        title: "Communicating Design: Developing Web Site Documentation for Design and Planning",
        author: "Dan M. Brown",
        url: "http://amzn.to/2fLVK3p",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Communication"
        ],
        recommendations: [
            "001",
        ],
        image: "brown.png",
    }, {
        title: "Designing Together: The collaboration and conflict management handbook for creative professionals",
        author: "Dan M. Brown",
        url: "http://amzn.to/2fuGb0S",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Communication"
        ],
        recommendations: [
            "001",
        ],
        image: "brown-2.png",
    }, {
        title: "Seductive Interaction Design: Creating Playful, Fun, and Effective User Experiences",
        author: "Stephen Anderson",
        url: "http://amzn.to/2fLQyMP",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "General UX", "Usability"
        ],
        recommendations: [
            "001",
        ],
        image: "anderson.png",
    }, {
        title: "100 Things Every Designer Needs to Know About People",
        author: "Susan Weinschenk",
        url: "http://amzn.to/2eTc58Z",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Communication"
        ],
        recommendations: [
            "001","003","004"
        ],
        image: "weinschenk.png",
    }, {
        title: "The Shape of Design",
        author: "Frank Chimero",
        url: "http://shapeofdesignbook.com/",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "General UX"
        ],
        recommendations: [
            "001",
        ],
        image: "chimero.png",
    }, {
        title: "Emotional Design: Why We Love (or Hate) Everyday Things",
        author: "Donald Norman",
        url: "http://amzn.to/2fLRCR0",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "General UX", "Usability"
        ],
        recommendations: [
            "002",
        ],
        image: "norman-2.jpg",
    }, {
        title: "Designing for Interaction: Creating Innovative Applications and Devices",
        author: "Dan Saffer",
        url: "http://amzn.to/2fLQYTw",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Interaction Design"
        ],
        recommendations: [
            "002","004"
        ],
        image: "saffer.jpg",
    }, {
        title: "Responsive Web Design",
        author: "Ethan Marcotte",
        url: "https://abookapart.com/products/responsive-web-design/?ref=uxtools.co",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Mobile & Responsive"
        ],
        recommendations: [
            "002",
        ],
        image: "marcotte.jpg",
    }, {
        title: "Smart Things",
        author: "Mike Kuniavsky",
        url: "http://amzn.to/2fuFkgK",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "General UX"
        ],
        recommendations: [
            "002",
        ],
        image: "kuniavsky.jpg",
    }, {
        title: "Sketching User Experiences: Getting the Design Right and the Right Design",
        author: "Bill Buxton",
        url: "http://amzn.to/2g1bLrc",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Process"
        ],
        recommendations: [
            "002",
            "003"
        ],
        image: "buxton.jpg",
    }, {
        title: "Lean UX",
        author: "Jeff Gothelf, Josh Seiden",
        url: "http://amzn.to/2g1i4LD",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Agile"
        ],
        recommendations: [
            "002",
            "003"
        ],
        image: "gothelf.jpg",
    }, {
        title: "Rocket Surgery Made Easy",
        author: "Steve Krug",
        url: "http://amzn.to/2esCMms",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Research","Usability"
        ],
        recommendations: [
            "003"
        ],
        image: "krug-2.jpg",
    }, {
        title: "Just Enough Research",
        author: "Erika Hall",
        url: "http://amzn.to/2fI5sVK",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Research"
        ],
        recommendations: [
            "003"
        ],
        image: "hall.jpg",
    }, {
        title: "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
        author: "Jake Knapp",
        url: "http://amzn.to/2g6jPX7",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Agile"
        ],
        recommendations: [
            "003"
        ],
        image: "knapp.jpg",
    }, {
        title: "Thinking With Type",
        author: "Ellen Lupton",
        url: "http://amzn.to/2fM0Exi",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Typography"
        ],
        recommendations: [
            "003"
        ],
        image: "lupton.jpg",
    }, {
        title: "The Inmates Are Running the Asylum: Why High Tech Products Drive Us Crazy and How to Restore the Sanity",
        author: "Alan Cooper",
        url: "http://amzn.to/2eTbmVq",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Usability"
        ],
        recommendations: [
            "003"
        ],
        image: "cooper-2.jpg",
    }, {
        title: "Design Is a Job",
        author: "Mike Monteiro",
        url: "http://amzn.to/2fLWHsI",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Communication"
        ],
        recommendations: [
            "003"
        ],
        image: "monteiro.jpg",
    }, {
        title: "Articulating Design Decisions: Communicate with Stakeholders, Keep Your Sanity, and Deliver the Best User Experience",
        author: "Tom Greever",
        url: "http://amzn.to/2eOQxHi",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Communcation"
        ],
        recommendations: [
            "003"
        ],
        image: "greever.jpg",
    }, {
        title: "Pervasive Information Architecture: Designing Cross-Channel User Experiences",
        author: "Andrea Resmini",
        url: "http://amzn.to/2fLZ12I",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Info Architecture"
        ],
        recommendations: [
            "004"
        ],
        image: "resmini.jpg",
    }, {
        title: "Information Architecture for the World Wide Web: Designing Large-Scale Web Sites",
        author: "Peter Morville",
        url: "http://amzn.to/2fM16vG",
        releaseDate: "Fake Date 01 Nov 2016",
        tags: [
            "Info Architecture"
        ],
        recommendations: [
            "004"
        ],
        image: "morville.jpg",
    }, {
        title: "Measuring the User Experience, Second Edition: Collecting, Analyzing, and Presenting Usability Metrics",
        author: "William Albert, Thomas Tullis",
        url: "http://amzn.to/2fM16vG",
        releaseDate: "2013-07-13",
        tags: [
            "Data & Analytics"
        ],
        recommendations: [
            "004"
        ],
        image: "albert.jpg",
    }];

    var bookLists = {
    	"001": {
    		name: "The Only UX Reading List Ever",
            url: "https://medium.com/interactive-mind/the-only-ux-reading-list-ever-d420edb3f4ff",
            image: "simon-pan.jpg"
    	},
    	"002": {
    		name: "Order Group",
            url: "https://blog.prototypr.io/user-experience-design-best-sources-to-learn-ux-c67bf80484ce",
            image: "order-group.png"
    	},
        "003": {
            name: "UX Tools Book Survey",
            url: "uxtools.co",
            image: "uxtools.png"
        },
        "004": {
            name: 'Uxdesign.cc – "The Essential Reading List"',
            url: "https://uxdesign.cc/ux-books-on-user-research-strategy-2c8eeef820a8",
            image: "uxdesigncc.jpg"
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
