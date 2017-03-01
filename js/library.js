// @FOR DEV codekit-prepend "_dev/vue-2.1.10.js"
// @codekit-prepend "_bundle/vue-2.1.10.min.js"
// @codekit-prepend "_bundle/vue-lazyload-1.0.0.js"
// @codekit-prepend "_bundle/lodash-4.17.4.js"
// @codekit-prepend "_bundle/data-library.js"

//Vue.use(VueLazyLoad)

new Vue({
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
        },
        scrollToTop: function() {
            window.scrollTo(0,0);
        }
    },
    data: {
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
                {name: "Research", value: "Research"},
                {name: "Process", value: "Process"}
            ]
          },
        books: books,
        bookLists: bookLists

    },
    computed: {
        orderedCategoryOptions: function() {
            return _.orderBy(this.categoryData.categoryOptions, 'name');
        },
        randomizedBooks: function() {
            return _.shuffle(this.books)
        },
        orderedBooks: function() {
            return _.orderBy(this.randomizedBooks, 'recommendations.length', 'desc')
        },
        computedTags: function() {
            if (this.searchTerm) {
                this.categoryData.categoryModel.tags = '';
                return '';
            } else {
                return this.categoryData.categoryModel.tags;
            }
        },
        filteredBooks: function() {
            var searchTerm = this.searchTerm.toLowerCase();
            var currentTag = this.computedTags;

            // If the user is searching
            if (searchTerm !== '') {
                return this.orderedBooks.filter(function(book) {
                    return book.title.toLowerCase().indexOf(searchTerm) !== -1 || book.author.toLowerCase().indexOf(searchTerm) !== -1
                })
            // Else use tags
            } else {
                return this.orderedBooks.filter(function(book) {
                    var hasTag = false;
                    book.tags.forEach(function(tag) {
                        if (tag.indexOf(currentTag)>=0) {
                            hasTag = true;
                            return
                        }

                    })
                    return hasTag
                })
            }
        },
        shortenedBookTitles: function(string) {
            return _.truncate(string);
        },
    }
});
