import React from 'react';
import Jumbotron from '../components/Jumbotron';
import SavedBooks from '../components/SavedBooks';
import API from '../utils/API';


class Saved extends React.Component {
    
    state = {
        savedBooks: []
    }

    componentDidMount(){
        this.getSavedBooks();
    }

    deleteBook = event =>{
        let id = event.target.getAttribute("data-index")
        API.deleteBook(id)
            .then(() => this.componentDidMount())
            .catch(err => console.error(err));
    };

    getSavedBooks() {
        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data })
            })
            .catch(err => console.error(err));
    };

    render() {
    return (
        <div>
            <Jumbotron />
            <SavedBooks 
                books = {this.state.savedBooks}
                deleteBook = {this.deleteBook}
            />
        </div>
    )
    }
}

export default Saved;