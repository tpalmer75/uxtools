angular.module('uxLibrary', ['ngAnimate'])


.controller('booksCtrl', function($scope, booksFactory, $window) {

  $scope.books = booksFactory.books();
  $scope.bookLists = booksFactory.bookLists();

  // var i = 0;

  // $scope.random = function() { // causes infinite rootScope loop
  //       if (i<6) {
  //           i++;
  //           return 0.5 - Math.random();    
  //       } else {
  //           return;
  //       }
        
  //   };

  $scope.showModal = false;

  $scope.clearAll = function() {
    $scope.categoryData.categoryModel.tags='';
    $scope.searchTerm='';
    };

  $scope.$watch('categoryData.categoryModel.tags', function() {
    window.scrollTo(0,0);
  });

  $scope.categoryData = {
    categoryModel: {
        tags: ""
    },
    categoryOptions: [
        {name: "General UX", value: "General UX"},
        {name: "Typography", value: "Typography"},
        {name: "Mobile & Responsive", value: "Mobile & Responsive"},
        {name: "Usability", value: "Usability"},
        {name: "Info Architecture", value: "Info Architecture"},
        {name: "Agile", value: "Agile"},
        {name: "Interaction Design", value: "Interaction Design"},
        {name: "Data & Analytics", value: "Data & Analytics"},
        {name: "Communication", value: "Communication"},
        {name: "Career", value: "Career"},
    ]
  };
})

.directive('scrollToTop', function($window) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            // console.log('fired 1');
            // scope.updateModel = function() {
            //     $window.pageYOffset = "0"; 
            //     console.log('fired 2');   
            // }
            angular.element(element).bind("click", function() {
                console.log('click');
            });
        }
    };
})

.factory('booksFactory', function() {

    var books = [{
        title: "Don't Make Me Think",
        author: "Steve Krug",
        url: "http://amzn.to/2eOJgqS",
        tags: [
            "General UX"
        ],
        image: "krug.png",
        recommendations: [
            "002","003","004","005","006","007","009","010","011"
        ]
    }, {
        title: "Mobile First",
        author: "Luke Wroblewski",
        url: "http://amzn.to/2g6jh3m",
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
        tags: [
            "General UX",
            "Usability"
        ],
        recommendations: [
            "001","003","005","006","009"
        ],
        image: "norman.png",
    }, {
        title: "About Face",
        author: "Alan Cooper",
        url: "http://amzn.to/2g6kFCT",
        tags: [
            "Usability"
        ],
        recommendations: [
            "001","002","003","009"
        ],
        image: "cooper.png",
    }, {
        title: "The Elements of User Experience: User-Centered Design for the Web and Beyond",
        author: "Jesse James Garrett",
        url: "http://amzn.to/2fLTut1",
        tags: [
            "General UX"
        ],
        recommendations: [
            "001","004","005","006","007"
        ],
        image: "garrett.png",
    }, {
        title: "Subject To Change: Creating Great Products & Services for an Uncertain World",
        author: "Peter Merholz, Todd Wilkens, Brandon Schauer, David Verba",
        url: "http://amzn.to/2fLRWPI",
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
        tags: [
            "General UX", "Interaction Design"
        ],
        recommendations: [
            "001","007"
        ],
        image: "anderson.png",
    }, {
        title: "100 Things Every Designer Needs to Know About People",
        author: "Susan Weinschenk",
        url: "http://amzn.to/2eTc58Z",
        tags: [
            "Communication"
        ],
        recommendations: [
            "001","003","004","010","011"
        ],
        image: "weinschenk.png",
    }, {
        title: "The Shape of Design",
        author: "Frank Chimero",
        url: "http://shapeofdesignbook.com/",
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
        tags: [
            "General UX", "Usability"
        ],
        recommendations: [
            "002","009"
        ],
        image: "norman-2.jpg",
    }, {
        title: "Designing for Interaction: Creating Innovative Applications and Devices",
        author: "Dan Saffer",
        url: "http://amzn.to/2fLQYTw",
        tags: [
            "Interaction Design"
        ],
        recommendations: [
            "002","004","008","009"
        ],
        image: "saffer.jpg",
    }, {
        title: "Responsive Web Design",
        author: "Ethan Marcotte",
        url: "https://abookapart.com/products/responsive-web-design/?ref=uxtools.co",
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
        tags: [
            "Process"
        ],
        recommendations: [
            "002","003","007","009"
        ],
        image: "buxton.jpg",
    }, {
        title: "Lean UX: Applying Lean Principles to Improve User Experience",
        author: "Jeff Gothelf, Josh Seiden",
        url: "http://amzn.to/2g1i4LD",
        tags: [
            "Agile", "General UX"
        ],
        recommendations: [
            "002","003","006","008","009","010"
        ],
        image: "gothelf.jpg",
    }, {
        title: "Rocket Surgery Made Easy",
        author: "Steve Krug",
        url: "http://amzn.to/2esCMms",
        tags: [
            "Research","Usability"
        ],
        recommendations: [
            "003","007","010"
        ],
        image: "krug-2.jpg",
    }, {
        title: "Just Enough Research",
        author: "Erika Hall",
        url: "http://amzn.to/2fI5sVK",
        tags: [
            "Research"
        ],
        recommendations: [
            "003","005"
        ],
        image: "hall.jpg",
    }, {
        title: "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
        author: "Jake Knapp",
        url: "http://amzn.to/2g6jPX7",
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
        tags: [
            "Communication", "Career"
        ],
        recommendations: [
            "003","005"
        ],
        image: "monteiro.jpg",
    }, {
        title: "Articulating Design Decisions: Communicate with Stakeholders, Keep Your Sanity, and Deliver the Best User Experience",
        author: "Tom Greever",
        url: "http://amzn.to/2eOQxHi",
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
        tags: [
            "Info Architecture"
        ],
        recommendations: [
            "004"
        ],
        image: "resmini.jpg",
    }, {
        title: "Information Architecture for the World Wide Web: Designing Large-Scale Web Sites",
        author: "Louis Rosenfeld, Peter Morville, Jorge Arango",
        url: "http://amzn.to/2geruTZ",
        tags: [
            "Info Architecture"
        ],
        recommendations: [
            "004","009"
        ],
        image: "rosenfeld.jpg",
    }, {
        title: "Measuring the User Experience, Second Edition: Collecting, Analyzing, and Presenting Usability Metrics",
        author: "William Albert, Thomas Tullis",
        url: "http://amzn.to/2fM16vG",
        tags: [
            "Data & Analytics","Research"
        ],
        recommendations: [
            "004","011"
        ],
        image: "albert.jpg",
    }, {
        title: "Web Form Design: Filling in the Blanks",
        author: "Luke Wroblewski",
        url: "http://amzn.to/2exyVEt",
        tags: [
            "General UX"
        ],
        recommendations: [
            "005"
        ],
        image: "wroblewski-2.jpg",
    }, {
        title: "Designing for the Digital Age",
        author: "Kim Goodwin, Alan Cooper",
        url: "http://amzn.to/2eT6bkW",
        tags: [
            "General UX"
        ],
        recommendations: [
            "005"
        ],
        image: "goodwin.jpg",
    }, {
        title: "Universal Principles of Design, Revised and Updated: 125 Ways to Enhance Usability, Influence Perception, Increase Appeal, Make Better Design Decisions, and Teach through Design",
        author: "William Lidwell, Kritina Holden, Jill Butler",
        url: "http://amzn.to/2eTakp9",
        tags: [
            "General UX"
        ],
        recommendations: [
            "005","006","009"
        ],
        image: "lidwell.jpg",
    }, {
        title: "The War of Art: Break Through the Blocks and Win Your Inner Creative Battles",
        author: "Steven Pressfield",
        url: "http://amzn.to/2exJLdN",
        tags: [
            "Creativity"
        ],
        recommendations: [
            "005"
        ],
        image: "pressfield.jpg",
    }, {
        title: "The UX Book: Process and Guidelines for Ensuring a Quality User Experience",
        author: "Rex Hartson, Pardha Pyla",
        url: "http://amzn.to/2eYSmEN",
        tags: [
            "General UX"
        ],
        recommendations: [
            "006","007"
        ],
        image: "hartson.jpg",
    }, {
        title: "Smashing UX Design: Foundations for Designing Online User Experiences",
        author: "Jesmond Allen, James Chudley",
        url: "http://amzn.to/2gbwVST",
        tags: [
            "General UX"
        ],
        recommendations: [
            "006","007","010","011"
        ],
        image: "allen.jpg",
    }, {
        title: "The User Experience Team of One: A Research and Design Survival Guide",
        author: "Leah Buley",
        url: "http://amzn.to/2fR1wB2",
        tags: [
            "General UX", "Research"
        ],
        recommendations: [
            "006","010"
        ],
        image: "buley.jpg",
    }, {
        title: "Sketching User Experiences: The Workbook",
        author: "Saul Greenberg, Sheelagh Carpendale, Nicolai Maquardt, Bill Buxton",
        url: "http://amzn.to/2eYRMXK",
        tags: [
            "General UX"
        ],
        recommendations: [
            "006"
        ],
        image: "greenberg.jpg",
    }, {
        title: "A Project Guide to UX Design: For user experience designers in the field or in the making",
        author: "Russ Unger, Carolyn Chanderl",
        url: "http://amzn.to/2g9q4Kr",
        tags: [
            "General UX"
        ],
        recommendations: [
            "006", "007"
        ],
        image: "unger.jpg",
    }, {
        title: "Agile Experience Design: A Digital Designer's Guide to Agile, Lean, and Continuous",
        author: "Lindsay Ratcliffe, Marc McNeill",
        url: "http://amzn.to/2g9l0pd",
        tags: [
            "Agile"
        ],
        recommendations: [
            "006","008"
        ],
        image: "ratcliffe.jpg",
    }, {
        title: "Undercover User Experience Design",
        author: "Cennydd Bowles",
        url: "http://amzn.to/2gbAp80",
        tags: [
            "General UX"
        ],
        recommendations: [
            "007"
        ],
        image: "bowles.jpg",
    }, {
        title: "Designed for Use: Create Usable Interfaces for Applications and the Web",
        author: "Lukas Mathis",
        url: "http://amzn.to/2eZ5V7h",
        tags: [
            "General UX"
        ],
        recommendations: [
            "007"
        ],
        image: "mathis.jpg",
    }, {
        title: "Designing Web Usability",
        author: "Jakob Nielsen",
        url: "http://amzn.to/2eZftzj",
        tags: [
            "Usability"
        ],
        recommendations: [
            "007"
        ],
        image: "nielsen.jpg",
    }, {
        title: "Simple and Usable Web, Mobile, and Interaction Design",
        author: "Giles Colborne",
        url: "http://amzn.to/2eZa4YQ",
        tags: [
            "Usability", "Interaction Design"
        ],
        recommendations: [
            "007"
        ],
        image: "colborne.jpg",
    }, {
        title: "Measuring the User Experience: Collecting, Analyzing, and Presenting Usability Metrics",
        author: "Thomas Tullis, William Albert",
        url: "http://amzn.to/2eZa4YQ",
        tags: [
            "Data & Analytics"
        ],
        recommendations: [
            "007"
        ],
        image: "tullis.jpg",
    }, {
        title: "Designing the Obvious: A Common Sense Approach to Web & Mobile Application Design",
        author: "Robert Hoekman Jr.",
        url: "http://amzn.to/2fPdlbV",
        tags: [
            "General UX"
        ],
        recommendations: [
            "007"
        ],
        image: "hoekman.jpg",
    }, {
        title: "Designing Web Interfaces: Principles and Patterns for Rich Interactions",
        author: "Bill Scott",
        url: "http://amzn.to/2fSPGd2",
        tags: [
            "General UX", "Interaction Design"
        ],
        recommendations: [
            "007"
        ],
        image: "scott.jpg",
    }, {
        title: "Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests",
        author: "Jeffrey Rubin, Dana Chisnell, Jared Spool",
        url: "http://amzn.to/2fPaxf8",
        tags: [
            "Research", "Usability"
        ],
        recommendations: [
            "007"
        ],
        image: "rubin.jpg",
    }, {
        title: "When Search Meets Web Usability",
        author: "Shari Thurow",
        url: "http://amzn.to/2eZbMtl",
        tags: [
            "Usability"
        ],
        recommendations: [
            "007"
        ],
        image: "thurow.jpg",
    }, {
        title: "User Story Mapping: Discover the Whole Story, Build the Right Product",
        author: "Jeff Patton, Peter Economy",
        url: "http://amzn.to/2eUVI8o",
        tags: [
            "General UX"
        ],
        recommendations: [
            "008"
        ],
        image: "patton.jpg",
    }, {
        title: "UX Strategy: How to Devise Innovative Digital Products that People Want",
        author: "Jaime Levy",
        url: "http://amzn.to/2ezZUzr",
        tags: [
            "General UX"
        ],
        recommendations: [
            "008"
        ],
        image: "levy.jpg",
    }, {
        title: "Practice Ethnography: A Guide to Doing Ethnography in The Private Sector",
        author: "Sam Ladner",
        url: "http://amzn.to/2fAzdY8",
        tags: [
            "Research"
        ],
        recommendations: [
            "008"
        ],
        image: "ladner.jpg",
    }, {
        title: "Think First: My No-Nonsense Approach to Creating Successful Products, Memorable User Experiences + Very Happy Customers",
        author: "Joe Natoli",
        url: "http://amzn.to/2fRiKOG",
        tags: [
            "General UX"
        ],
        recommendations: [
            "008"
        ],
        image: "natoli.jpg",
    }, {
        title: "Universal Methods of Design: 100 Ways to Research Complex Problems, Develop Innovative Ideas, and Design Effective Solutions",
        author: "Bruce Hanington, Bella Martin",
        url: "http://amzn.to/2eV0keY",
        tags: [
            "General UX"
        ],
        recommendations: [
            "008"
        ],
        image: "hanington.jpg",
    }, {
        title: "Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration",
        author: "Ed Catmull",
        url: "http://amzn.to/2gbTEhD",
        tags: [
            "Creativity"
        ],
        recommendations: [
            "008"
        ],
        image: "catmull.jpg",
    }, {
        title: "Service Design: From Insight to Implementation",
        author: "Andy Polaine, Lavrans Løvlie, Ben Reason",
        url: "http://amzn.to/2eZmJv1",
        tags: [
            "General UX"
        ],
        recommendations: [
            "008","009","010"
        ],
        image: "polaine.jpg",
    }, {
        title: "Gamestorming: A Playbook for Innovators, Rulebreakers, and Changemakers",
        author: "Dave Gray",
        url: "http://amzn.to/2fRjGCr",
        tags: [
            "Career","Creativity"
        ],
        recommendations: [
            "008","009"
        ],
        image: "gray.jpg",
    }, {
        title: "The Humane Interface: New Directions for Designing Interactive Systems",
        author: "Jef Raskin",
        url: "http://amzn.to/2fRlVWD",
        tags: [
            "General UX"
        ],
        recommendations: [
            "009"
        ],
        image: "raskin.jpg",
    }, {
        title: "How to Make Sense of Any Mess: Information Architecture for Everybody",
        author: "Abby Covert",
        url: "http://amzn.to/2fRlVWD",
        tags: [
            "General UX"
        ],
        recommendations: [
            "009"
        ],
        image: "covert.jpg",
    }, {
        title: "Storytelling for User Experience",
        author: "Whitney Quesenbery",
        url: "http://amzn.to/2fPfgxh",
        tags: [
            "General UX"
        ],
        recommendations: [
            "009"
        ],
        image: "quesenbery.jpg",
    }, {
        title: "This is Service Design Thinking: Basics, Tools, Cases",
        author: "Marc Stickdorn, Jakob Schenider",
        url: "http://amzn.to/2fVUlLh",
        tags: [
            "General UX"
        ],
        recommendations: [
            "009"
        ],
        image: "stickdorn.jpg",
    }, {
        title: "Interviewing Users: How to Uncover Compelling Insights",
        author: "Steve Portigal",
        url: "hhttp://amzn.to/2eYwBBS",
        tags: [
            "Research"
        ],
        recommendations: [
            "009"
        ],
        image: "portigal.jpg",
    }, {
        title: "See What I Mean: How to Use Comics to Communicate Ideas",
        author: "Kevin Cheng",
        url: "http://amzn.to/2gelxGt",
        tags: [
            "Communication"
        ],
        recommendations: [
            "009"
        ],
        image: "cheng.jpg",
    }, {
        title: "Understanding Comics: The Invisible Art",
        author: "Scott McCloud",
        url: "http://amzn.to/2feP6CZ",
        tags: [
            "General UX"
        ],
        recommendations: [
            "009"
        ],
        image: "mccloud.jpg",
    }, {
        title: "Elements of Design: Rowena Reed Kostellow and the Structure of Visual Relationships",
        author: "Gail Greet Hannah",
        url: "http://amzn.to/2gf5HdZ",
        tags: [
            "General UX"
        ],
        recommendations: [
            "009"
        ],
        image: "hannah.jpg",
    }, {
        title: "Computers as Theatre",
        author: "Brenda Laurel",
        url: "http://amzn.to/2gehVVb",
        tags: [
            "General UX"
        ],
        recommendations: [
            "009"
        ],
        image: "laurel.jpg",
    }, {
        title: "Digital Ground: Architecture, Pervasive Computing, and Environmental Knowing",
        author: "Malcolm McCullough",
        url: "http://amzn.to/2fUfW3j",
        tags: [
            "General UX"
        ],
        recommendations: [
            "009"
        ],
        image: "mcculough.jpg",
    }, {
        title: "Where the Action Is: The Foundations of Embodied Interaction",
        author: "Paul Dourish",
        url: "http://amzn.to/2geqvD9",
        tags: [
            "General UX", "Interaction Design"
        ],
        recommendations: [
            "009"
        ],
        image: "dourish.jpg",
    }, {
        title: "Observing the User Experience: A Practitioner's Guide to User Research",
        author: "Elizabeth Goodman, Mike Kuniavsky, Andrea Moed",
        url: "http://amzn.to/2fePuBn",
        tags: [
            "Research"
        ],
        recommendations: [
            "009"
        ],
        image: "kuniavsky.jpg",
    }, {
        title: "Rapid Viz: A New Method for the Rapid Visualization of Ideas",
        author: "Kurt Hanks, Larry Belliston",
        url: "http://amzn.to/2gf7pMi",
        tags: [
            "Data & Analytics"
        ],
        recommendations: [
            "009"
        ],
        image: "hanks.jpg",
    }, {
        title: "Information Anxiety 2",
        author: "Richard Wurman",
        url: "http://amzn.to/2gf5dV7",
        tags: [
            "General UX"
        ],
        recommendations: [
            "009"
        ],
        image: "wurman.jpg",
    }, {
        title: "Information Dashboard Design: Displaying Data for At-a-Glance Monitoring",
        author: "Stephen Few",
        url: "http://amzn.to/2fUlniH",
        tags: [
            "Data & Analytics"
        ],
        recommendations: [
            "009",
        ],
        image: "few.jpg",
    }, {
        title: "Usable Usablity: Simple Steps for Making Stuff Better",
        author: "Erc Reiss",
        url: "http://amzn.to/2f7qmM3",
        tags: [
            "Usability"
        ],
        recommendations: [
            "010","011"
        ],
        image: "reiss.jpg",
    }, {
        title: "Quantifying the User Experience: Practical Statistics for User Research",
        author: "Jeff Sauro, James R. Lewis",
        url: "http://amzn.to/2gnkZ0a",
        tags: [
            "Research","Data & Analytics"
        ],
        recommendations: [
            "010"
        ],
        image: "sauro.jpg",
    }, {
        title: "Mobile Usability",
        author: "Jakob Nielsen, Raluca Budiu",
        url: "http://amzn.to/2gqmtHZ",
        tags: [
            "Mobile & Repsonsive","Usability"
        ],
        recommendations: [
            "010"
        ],
        image: "nielsen-2.jpg",
    }];

    var bookLists = {
    	"001": {
    		name: "The Only UX Reading List Ever",
            owner: "Simon Pan",
            url: "https://medium.com/interactive-mind/the-only-ux-reading-list-ever-d420edb3f4ff",
            image: "simon-pan.jpg"
    	},
    	"002": {
    		name: "User Experience Design — Best sources to learn UX",
            owner: "Order Group",
            url: "https://blog.prototypr.io/user-experience-design-best-sources-to-learn-ux-c67bf80484ce",
            image: "order-group.png"
    	},
        "003": {
            name: "UX Tools Book Survey",
            owner: "Uxtools.co",
            url: "uxtools.co",
            image: "uxtools.png"
        },
        "004": {
            name: "The Essential Reading List",
            owner: "uxdesign.cc",
            url: "https://uxdesign.cc/ux-books-on-user-research-strategy-2c8eeef820a8",
            image: "uxdesigncc.jpg"
        },
        "005": {
            name: "UX Beginner Reading List",
            owner: "UX Beginner",
            url: "http://www.uxbeginner.com/ux-beginner-reading-list/",
            image: "ux-beginner.png"
        },
        "006": {
            name: "10 must-read UX design books",
            owner: "Adham Dannaway",
            url: "http://www.adhamdannaway.com/blog/ux-design/10-must-read-ux-design-books",
            image: "dannaway.png"
        },
        "007": {
            name: "A Must Have Book Collection on UX",
            owner: "Paul Olyslager",
            url: "https://www.paulolyslager.com/must-have-book-collection-on-ux/",
            image: "olyslager.jpg"
        },
        "008": {
            name: "10 UX books that should be on your reading list",
            owner: "UX for the Masses",
            url: "http://www.uxforthemasses.com/recommended-ux-books/",
            image: "uxforthemasses.jpg"
        },
        "009": {
            name: "My UX Reading List — 2015",
            owner: "Dave Malouf",
            url: "https://medium.com/swlh/my-ux-reading-list-2015-b048be1a74fa",
            image: "malouf.jpg"
        },
        "010": {
            name: "10 Must-Read UX Books",
            owner: "Creative Market",
            url: "https://creativemarket.com/blog/10-must-read-ux-books",
            image: "creativemarket.jpg"
        },
        "011": {
            name: "Essential Reading: 5 Must-Read User Experience Design Books",
            owner: "General Assembly",
            url: "https://generalassemb.ly/blog/top-user-experience-design-books/",
            image: "generalassembly.png"
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
