import React, {Component} from "react";
import {Link} from "react-router-dom";
import Book from "./Book.js";
import * as BooksAPI from "./BooksAPI";

export default class SearchBooks extends Component {
    state = {query: "", results: []};

    updateQuery = query => {
        if (query) {
            BooksAPI.search(query.trim()).then(results =>
                results.length > 0
                    ? this.updateResults(results)
                    : this.clearResults()
            );
        } else {
            this.clearResults();
        }
    };

    updateResults = results => {
        if (results.error && results.error === "empty query") {
            console.log(results.error);
            this.clearResults();
        }
        this.setState({results: results});
    };

    clearResults = () => {
        this.setState({results: []});
    };

    render() {
        const {results} = this.state;
        const {onChangeShelf, books} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button
                            onClick={this.clearSearch}
                            className="close-search"
                        >
                            Close
                        </button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={event =>
                                this.updateQuery(event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid" />
                    <li>
                        {results ? (
                            results.map(result => (
                                <Book
                                    key={result.id}
                                    changeShelf={onChangeShelf}
                                    book={result}
                                    books={books}
                                />
                            ))
                        ) : (
                            <h4>No results</h4>
                        )}
                    </li>
                </div>
            </div>
        );
    }
}
