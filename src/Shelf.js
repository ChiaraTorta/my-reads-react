import React, {Component} from "react";
import Book from "./Book.js";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const shelves = [
    {
        key: "currentlyReading",
        name: "Currently Reading"
    },
    {
        key: "wantToRead",
        name: "Want To Read"
    },
    {
        key: "read",
        name: "Read"
    }
];

export default class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    };

    render() {
        const {books, onChangeShelf} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map(shelf => (
                            <div key={shelf.key} className="bookshelf">
                                <h2 className="bookshelf-title">
                                    {shelf.name}
                                </h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        <li>
                                            {books
                                                .filter(
                                                    book =>
                                                        book.shelf === shelf.key
                                                )
                                                .map(book => (
                                                    <Book
                                                        key={book.id}
                                                        changeShelf={
                                                            onChangeShelf
                                                        }
                                                        book={book}
                                                    />
                                                ))}
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Link to="/search" className="open-search">
                    <button />
                </Link>
            </div>
        );
    }
}
