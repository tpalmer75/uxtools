angular.module('uxLibrary', ['ngAnimate'])
//angular.module('uxLibrary', [])


.controller('booksCtrl', function($scope, booksFactory, $window) {

  $scope.books = booksFactory.books();
  $scope.bookLists = booksFactory.bookLists();

  // $scope.random = function() { // causes infinite rootScope loop
  //   return 0.5 - Math.random();    
        
  //   };

  $scope.showModal = false;
  $scope.modalBookTitle = '';
  // have to keep this as a stand alone array or Angular won't update scope
  $scope.modalBookRecommendations = [];

  $scope.setModalData = function(book) {
    $scope.modalBookTitle = book.title;
    $scope.modalBookRecommendations = book.recommendations;
  }

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
        {name: "Creativity", value: "Creativity"},
        {name: "Branding", value: "Branding"},
        {name: "Visual Design", value: "Visual Design"},
        {name: "Psychology", value: "Psychology"},
        {name: "Writing", value: "Writing"},
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
            "015","016","017","002","014","003","004","005","006","007","009","010","011","012","013"
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
            "015","016","001","003","005","014","006","009","012"
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
            "015","001","002","003","009"
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
            "015","001","004","005","006","007"
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
            "015","001"
        ],
        image: "merholz.png",
    }, {
        title: "A Practical Guide to Information Architecture",
        author: "Donna Spencer",
        url: "http://amzn.to/2eTajEK",
        tags: [
            "Info Architecture"
        ],
        recommendations: [
            "001","013"
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
            "015","001"
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
            "017","001","003","004","010","011", "013"
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
            "002","009","015"
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
            "002","004","008","009","012"
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
            "016","002","003","007","015","009"
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
            "002","003","006","008","009","010","013"
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
            "017","003","007","010"
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
            "Typography", "Visual Design"
        ],
        recommendations: [
            "003","012"
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
            "003","015"
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
        title: "Information Architecture: For the Web and Beyond",
        author: "Louis Rosenfeld, Peter Morville, Jorge Arango",
        url: "http://amzn.to/2geruTZ",
        tags: [
            "Info Architecture"
        ],
        recommendations: [
            "015","016","004","009","014"
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
            "017","004","011","013"
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
            "015","005"
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
            "005","006","009","012"
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
            "017","006","007","010","011","013"
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
            "006", "007","014"
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
            "015","007"
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
            "009","014"
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
            "009","016"
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
            "016","009"
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
            "015","009"
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
            "009","012"
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
            "017","010","011","013"
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
            "017","016","010"
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
            "010","013"
        ],
        image: "nielsen-2.jpg",
    }, {
        title: "A Pattern Language for Web Usability",
        author: "Ian Graham",
        url: "http://amzn.to/2eSloHD",
        tags: [
            "Usability"
        ],
        recommendations: [
            "012"
        ],
        image: "graham.jpg",
    }, {
        title: "The Laws of Simplicity (Simplicity: Design, Technology, Business, Life)",
        author: "Joan Maeda",
        url: "http://amzn.to/2fQ1f1Z",
        tags: [
            "General UX"
        ],
        recommendations: [
            "012"
        ],
        image: "maeda.jpg",
    }, {
        title: "Mental Models",
        author: "Indie Young",
        url: "http://amzn.to/2fQ5drn",
        tags: [
            "General UX"
        ],
        recommendations: [
            "012"
        ],
        image: "young.jpg",
    }, {
        title: "Designing Interactions",
        author: "Bill Moggridge",
        url: "http://amzn.to/2g8HRhg",
        tags: [
            "Interaction Design"
        ],
        recommendations: [
            "012","013"
        ],
        image: "moggridge.jpg",
    }, {
        title: "Visualization Analysis and Design",
        author: "Tamara Munzner",
        url: "http://amzn.to/2gvJGJ4",
        tags: [
            "Data & Analytics"
        ],
        recommendations: [
            "012"
        ],
        image: "munzner.jpg",
    }, {
        title: "Six Thinking Hats",
        author: "Edward de Bono",
        url: "http://amzn.to/2fbSv4C",
        tags: [
            "Career", "Creativity"
        ],
        recommendations: [
            "012"
        ],
        image: "bono.jpg",
    }, {
        title: "History of Modern Design",
        author: "David Raizman",
        url: "http://amzn.to/2g5QiIU",
        tags: [
            "General UX"
        ],
        recommendations: [
            "012"
        ],
        image: "raizman.jpg",
    }, {
        title: "Designing Brand Identity: An Essential Guide for the Whole Branding Team",
        author: "Alina Wheeler",
        url: "http://amzn.to/2g5QiIU",
        tags: [
            "Branding", "Visual Design"
        ],
        recommendations: [
            "012","013"
        ],
        image: "wheeler.jpg",
    }, {
        title: "Just My Type: A Book About Fonts",
        author: "Simon Garfield",
        url: "http://amzn.to/2g5QiIU",
        tags: [
            "Typography", "Visual Design"
        ],
        recommendations: [
            "013"
        ],
        image: "garfield.jpg",
    }, {
        title: "The Icon Handbook",
        author: "Jon Hicks",
        url: "http://iconhandbook.co.uk/?ref=uxtools.co",
        tags: [
            "Visual Design"
        ],
        recommendations: [
            "013"
        ],
        image: "hicks.jpg",
    }, {
        title: "Forms that Work: Designing Web Forms for Usability",
        author: "Caroline Jarrett, Gerry Gaffney, Steve Krug",
        url: "http://amzn.to/2ffsnt4",
        tags: [
            "Usability"
        ],
        recommendations: [
            "013","017"
        ],
        image: "jarrett.jpg",
    }, {
        title: "Above the Fold, Revised Edition",
        author: "Brian D. Miller",
        url: "http://amzn.to/2fQ7LWr",
        tags: [
            "General UX"
        ],
        recommendations: [
            "013"
        ],
        image: "miller.jpg",
    }, {
        title: "Hooked: How to Build Habit-Forming Products",
        author: "Nir Eyal",
        url: "http://amzn.to/2gvSw9t",
        tags: [
            "Psychology"
        ],
        recommendations: [
            "013"
        ],
        image: "eyal.jpg",
    }, {
        title: "Predictably Irrational, Revised and Expanded Edition: The Hidden Forces That Shape Our Decisions",
        author: "Dan Ariely",
        url: "http://amzn.to/2fQ9KKf",
        tags: [
            "Psychology"
        ],
        recommendations: [
            "013"
        ],
        image: "ariely.jpg",
    }, {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        url: "http://amzn.to/2fbVH05",
        tags: [
            "Psychology"
        ],
        recommendations: [
            "013"
        ],
        image: "kahneman.jpg",
    }, {
        title: "Designing for Emotion",
        author: "Aaron Walter",
        url: "http://amzn.to/2fbVQRb",
        tags: [
            "Psychology"
        ],
        recommendations: [
            "013"
        ],
        image: "walter.jpg",
    }, {
        title: "Interviewing Users: How to Uncover Compelling Insights",
        author: "Steve Portigal",
        url: "http://amzn.to/2fbXCSe",
        tags: [
            "Research"
        ],
        recommendations: [
            "016","013"
        ],
        image: "portigal.jpg",
    }, {
        title: "The Complete Guide to Writing Questionnaires: How to Get Better Information for Better Decisions",
        author: "David F. Harris",
        url: "http://amzn.to/2g8NRXm",
        tags: [
            "Research"
        ],
        recommendations: [
            "013"
        ],
        image: "harris.jpg",
    }, {
        title: "A Beginner's Guide to Careers in UX Design",
        author: "Springboard",
        url: "https://www.springboard.com/resources/guide-to-ux-jobs/?ref=uxtools.co",
        tags: [
            "Career", "General UX"
        ],
        recommendations: [
            "013"
        ],
        image: "springboard.png",
    }, {
        title: "Remote: Office Not Required",
        author: "Jason Fried",
        url: "http://amzn.to/2gvUIxU",
        tags: [
            "Career", "General UX"
        ],
        recommendations: [
            "013"
        ],
        image: "fried.jpg",
    }, {
        title: "Letting Go of the Words, Second Edition: Writing Web Content that Works",
        author: "Janice Redish",
        url: "http://amzn.to/2gElggf",
        tags: [
            "Writing"
        ],
        recommendations: [
            "014"
        ],
        image: "redish.jpg",
    }, {
        title: "Getting Started in UX: The Complete Guide to Launching a Career in User Experience Design",
        author: "Matthew Magain, Luke Chambers",
        url: "http://amzn.to/2fm7RXx",
        tags: [
            "General UX", "Career"
        ],
        recommendations: [
            "014"
        ],
        image: "magain.jpg",
    }, {
        title: "Designing for the Social Web",
        author: "Joshua Porter",
        url: "http://amzn.to/2fXg8jb",
        tags: [
            "General UX"
        ],
        recommendations: [
            "015"
        ],
        image: "porter.jpg",
    }, {
        title: "Designing Interfaces",
        author: "Jenifer Tidwell",
        url: "http://amzn.to/2fm5XX7",
        tags: [
            "General UX"
        ],
        recommendations: [
            "015","016"
        ],
        image: "tidwell.jpg",
    }, {
        title: "Designing Visual Interfaces: Communication Oriented Techniques",
        author: "Kevin Mullet, Darrell Sano",
        url: "http://amzn.to/2fjTq2Z",
        tags: [
            "General UX", "Communication"
        ],
        recommendations: [
            "015"
        ],
        image: "mullet.jpg",
    }, {
        title: "Information Architecture: Blueprints for the Web",
        author: "Christina Wodtke, Austin Govella",
        url: "http://amzn.to/2fjRJTd",
        tags: [
            "Info Architecture"
        ],
        recommendations: [
            "015"
        ],
        image: "wodtke.jpg",
    }, {
        title: "Designing Web Navigation: Optimizing the User Experience",
        author: "James Kalbach, Aaron Gustagson",
        url: "http://amzn.to/2fMBZft",
        tags: [
            "General UX"
        ],
        recommendations: [
            "015"
        ],
        image: "kalbach.jpg",
    }, {
        title: "Usability Engineering",
        author: "Jakob Nielsen",
        url: "http://amzn.to/2gEmzff",
        tags: [
            "Usability"
        ],
        recommendations: [
            "015"
        ],
        image: "nielsen-3.jpg",
    }, {
        title: "Set Phasers on Stun: And Other True Tales of Design, Technology, and Human Error",
        author: "S. M. Casey, Steven Caset",
        url: "http://amzn.to/2gwSvS6",
        tags: [
            "General UX"
        ],
        recommendations: [
            "015"
        ],
        image: "casey.jpg",
    }, {
        title: "Content Strategy for Mobile",
        author: "Karen McGrane",
        url: "http://amzn.to/2gGla86",
        tags: [
            "General UX"
        ],
        recommendations: [
            "016"
        ],
        image: "mcgrane.jpg",
    }, {
        title: "Content Strategy at Work: Real-world Stories to Strengthen Every Interactive Project",
        author: "Margot Bloomstein",
        url: "http://amzn.to/2gckli3",
        tags: [
            "General UX"
        ],
        recommendations: [
            "016"
        ],
        image: "bloomstein.jpg",
    }, {
        title: "Design for a Perfect Screen",
        author: "Tal Florentin",
        url: "http://lp2.webydo.com/design-for-a-perfect-screen-ebook.html?ref=uxtools.co",
        tags: [
            "General UX"
        ],
        recommendations: [
        ],
        image: "florentin.jpg",
    }, {
        title: "Communicating the User Experience: A Practical Guide for Creating Useful UX Documentation",
        author: "Richard Caddick, Steve Cable",
        url: "http://amzn.to/2fAsa0j",
        tags: [
            "General UX","Communication"
        ],
        recommendations: [
            "017"
        ],
        image: "caddick.jpg",
    }, {
        title: "Client Centric Web Design",
        author: "Paul Boag",
        url: "http://amzn.to/2g57e5m",
        tags: [
            "General UX"
        ],
        recommendations: [
            "017"
        ],
        image: "boag.jpg",
    }, {
        title: "Card Sorting",
        author: "Donna Spencer",
        url: "http://amzn.to/2fAxIbm",
        tags: [
            "General UX"
        ],
        recommendations: [
            "017"
        ],
        image: "spencer.jpg",
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
        },
        "012": {
            name: "7 Books Every UX Designer Should Read",
            owner: "Prototypr.io",
            url: "https://blog.prototypr.io/7-books-every-ux-designer-should-read-adf1ed4e68ae",
            image: "prototypr.png"
        },
        "013": {
            name: "The best UX Books",
            owner: "Springboard",
            url: "https://www.springboard.com/blog/ux-23-best-ux-books/",
            image: "springboard.png"
        },
        "014": {
            name: "UX Resources for Beginners",
            owner: "Jessica Ivins",
            url: "http://jessicaivins.net/ux-resources-for-beginners/",
            image: "jessicaivins.jpg"
        },
        "015": {
            name: "So you wanna be a user experience designer — Step 1: Resources",
            owner: "Whitney Hess",
            url: "https://whitneyhess.com/blog/2009/06/30/so-you-wanna-be-a-user-experience-designer-step-1-resources/",
            image: "whitneyhess.jpg"
        },
        "016": {
            name: "Recommended Books for the UX Beginner’s Library",
            owner: "UX Booth",
            url: "http://www.uxbooth.com/articles/2016-user-experience-recommended-books/",
            image: "uxbooth.png"
        }
        ,
        "017": {
            name: "Top 10 Best Usability, and UX Books You Should Read",
            owner: "Susan Weinschenk",
            url: "https://www.blog.theteamw.com/2013/01/23/top-10-best-usability-ux-and-design-books-you-should-read/",
            image: "weinschenk.jpg"
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
