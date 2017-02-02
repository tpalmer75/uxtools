// @codekit-prepend "_bundle/lodash-4.17.4.js"
// @codekit-prepend "_bundle/library-data.js"

var library = new Vue({
    el: '#library',


    methods: {
        clearAll: function() {
            this.categoryData.categoryModel.tags='';
            this.searchTerm='';
        },
        setModalData: function(book) {
            this.modalBookTitle = book.title;
            this.modalBookRecommendations = book.recommendations;
        },
        shortenedTitle: function(string) {
            return _.truncate(string, {length: 60});
        }
    },


    data: {
        message: 'Hello Vue!',
        showMenu: false,
        showModal: false,
        modalBookTitle: '',
        modalBookRecommendations: [],
        searchTerm: '',
        categoryData: {
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
          },
        books: books,
        bookLists: bookLists

    },
    computed: {
        orderedCategoryOptions: function() {
            return _.orderBy(this.categoryData.categoryOptions, 'name');
        },
        orderedBooks: function() {
            return _.orderBy(this.books, 'recommendations.length', 'desc')
        },
        filteredBooks: function() {
            var searchTerm = this.searchTerm
            return this.books.filter(function(book) {
                return book.title.toLowerCase().indexOf(searchTerm) !== -1 || book.title.indexOf(searchTerm) !== -1 || book.author.toLowerCase().indexOf(searchTerm) !== -1 || book.author.indexOf(searchTerm) !== -1
            })
        },
        shortenedBookTitles: function(string) {
            return _.truncate(string);
        }
    }
});


