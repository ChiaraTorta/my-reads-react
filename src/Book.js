import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ListBooks extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    };
    render() {
        const {book, books, changeShelf} = this.props;

        // set current shelf to none as default
        let currentShelf = "none";

        // if book is in current list, set current shelf to book.shelf
        for (let item of books) {
            if (item.id === book.id) {
                currentShelf = item.shelf;
                break;
            }
        }

        return (
            <div>
                <div id={book.id} className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 192,
                                backgroundImage: `url(${
                                    book.imageLinks
                                        ? book.imageLinks.thumbnail
                                        : ""
                                })`
                            }}
                        />
                        <div className="book-shelf-changer">
                            <select
                                defaultValue={currentShelf}
                                onChange={e =>
                                    changeShelf(book, e.target.value)
                                }
                            >
                                <option value="move" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">
                                    Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                        {book.authors ? book.authors : ""}
                    </div>
                </div>
            </div>
        );
    }
}
