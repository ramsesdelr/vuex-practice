import Vue from 'vue';
import Vuex from'vuex';
import Fuse from 'fuse.js';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  	books:   [
  		{
	    	id: 1,
	    	isbn: '673A45',
	    	title: 'Harry Potter: The Secret Chamber',
	    	author: 'J.K. Rowling',
	    	description: 'The 2nd chapter of the Harry Potter series',
	    	creation_date: '23-10-2002',
		},
	    {
	    	id: 2,
	    	isbn: '453A45',
	    	title: 'Harry Potter: The Prisoner of Azkaban',
	    	author: 'J.K. Rowling',
	    	description: 'The 3rd chapter of the Harry Potter series',
	    	creation_date: '23-10-2003',

	    },
	    {
	    	id: 3,
	    	isbn: '435A45',
	    	title: 'Harry Potter: The Goblet of Fire',
	    	author: 'J.K. Rowling',
	    	description: 'The 2nd chapter of the Harry Potter series',
	    	creation_date: '23-10-2002',

	     },
         {
	    	id: 4,
	    	isbn: '343A45A',
	    	title: 'The Narnia Chronicles: The lion, the witch and the wardobe',
	    	author: 'C.S. Lewis',
	    	description: 'The first chapter of the Narnia movie series',
	    	creation_date: '23-10-2001',
    	 },
    	 {
	    	id: 5,
	    	isbn: '333A45T',
	    	title: 'The Narnia Chronicles: The Prince Caspian',
	    	author: 'C.S. Lewis',
	    	description: 'The 2nd chapter of the Narnia movie series',
	    	creation_date: '23-10-2001',
    	 },
       {
        id: 6,
        isbn: '333A45T',
        title: 'Book 6',
        author: 'C.S. Lewis',
        description: 'The 2nd chapter of the Narnia movie series',
        creation_date: '23-10-2001',
       },
       {
        id: 7,
        isbn: '333A45T',
        title: 'Book 7',
        author: 'C.S. Lewis',
        description: 'The 2nd chapter of the Narnia movie series',
        creation_date: '23-10-2001',
       },
       {
        id: 8,
        isbn: '333A45T',
        title: 'Book 8',
        author: 'C.S. Lewis',
        description: 'The 2nd chapter of the Narnia movie series',
        creation_date: '23-10-2001',
       },
    ],
    booksResult:[
    ],
    perPage:3,
  },

  getters: {
  	getBookById: (state) => (id) => {
    	return state.books.find(state => state.books.id === id)
  	}
  },
  mutations : {
  	addBook(state, data) {
	  	var today = new Date();
	    var dd = today.getDate();
	    var mm = today.getMonth()+1; //January is 0!
	    var yyyy = today.getFullYear();

	    state.books.push({ 
            id: state.books.length + 1,
            title: data.title,
            description: data.description,
            author: data.author,
            isbn: data.isbn,
            creation_date: mm + '/' + dd + '/' + yyyy
        });
            return state;
  	},
  	updateBook(state, data) {
  		const updatedBook = state.books.map((book, index) => {
                    if (book.id === data.id) {
                        return {
                            ...book,
                            title: data.title,
                            description: data.description,
                            author: data.author,
                            isbn: data.isbn,
                        };
                    }
                    return book;
                });
        return updatedBook;
  	},
    searchBooks(state, bookName) {
        if (bookName) {
          let options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
              "title",
              "author",
          ]
          };
        let fuse = new Fuse(state.books, options);
        state.booksResult = fuse.search(bookName);
        return state.booksResult;

      } else {
        state.booksResult = state.books.slice(0, state.perPage);
        return state.booksResult;
      }
    },
    updatePage(state, pageNumber) {
        pageNumber--;
        return state.booksResult = state.books.slice(pageNumber * state.perPage, (pageNumber + 1) * state.perPage);
    }
  },
  actions: {
    addBookToStore (context, bookData) {
      context.commit('addBook', bookData);
    },
    updateBookInStore(context, bookData) {
      context.commit('updateBook', bookData)
    },
    searchBooksInStore(context, bookName) {
      context.commit('searchBooks', bookName)
    },
    updatePageInStore(context, selectedPage) {
      context.commit('updatePage', selectedPage)
    } 
  },
  getters: {
    getCurrentBook: (state) => (id) =>{
        return state.books.find(result => {
          return result.id == id;
        });
    },
    getPerPage: (state) => {
      return state.perPage;
    }
  }
});