import React from 'react';
import Book from '../Book/Book.jsx'

const BookViewer = (props) => {
    return (
        <div className="row row-spacer">
            <div className="col-md-4">
                <button onClick={props.previousbook}>Previous book</button>
            </div>

        <div className="col-md-4">
        < Book book={props.book}/>
        </div>

        <div className="col-md-4">
            <button onClick={props.nextbook}>Next book</button>
        </div>


        </div>
      );
}
 
export default BookViewer;