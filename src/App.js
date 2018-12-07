import React from "react";
import * as BooksAPI from "./BooksAPI";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Shelf from "./Shelf.js";
import SearchBooks from "./SearchBooks.js";

export default class BooksApp extends React.Component {
    state = {
        books: []
    };

    changeShelf = (book, shelfName) => {
        let shelfBook = this.state.books.find(b => b.id === book.id);
        if (shelfBook) {
            book.shelf = shelfName;
            BooksAPI.update(shelfBook, shelfName).then(
                this.setState(state => ({
                    books: state.books
                }))
            );
        } else {
            book.shelf = shelfName;
            BooksAPI.update(book, shelfName).then(
                this.setState(state => ({
                    books: state.books.concat(book)
                }))
            );
        }
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({books});
            console.log(books);
        });
    }

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <div>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Shelf
                                    onChangeShelf={this.changeShelf}
                                    books={this.state.books}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/search"
                            render={({history}) => (
                                <SearchBooks
                                    books={this.state.books}
                                    onChangeShelf={this.changeShelf}
                                    onSearchBooks={() => {
                                        history.push("/search");
                                    }}
                                />
                            )}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
