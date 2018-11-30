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
        books: PropTypes.array.isRequired
    };

    render() {
        const {books} = this.props;
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
                                            {this.props.books.map(book => (
                                                <Book
                                                    key={book.id}
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
