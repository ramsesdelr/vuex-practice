import Vue from 'vue';
import Vuex from'vuex';
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: [
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
    	 }
    ],
  getters: {
  	getBookById: (state) => (id) => {
    	return state.find(state => state.id === id)
  	}
  },
  mutations : {
  	addBook(state, data) {
	  	var today = new Date();
	    var dd = today.getDate();
	    var mm = today.getMonth()+1; //January is 0!
	    var yyyy = today.getFullYear();
    
	    state.push({ 
            id: data.id,
            title: data.title,
            description: data.description,
            author: data.author,
            isbn: data.isbn,
            creation_date: mm + '/' + dd + '/' + yyyy
        });
            return state;
  	},
  	updateBook(state, data){
  		const updatedBook = state.map((book, index) => {
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
  	}
  }
});