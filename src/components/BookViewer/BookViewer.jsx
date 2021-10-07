import React from 'react';

const BookViewer = (props) => {
    return (
        <div className="row row-spacer">
            <div className="col-md-4">
                <button onClick={props.previousbook}>Previous book</button>
            </div>

        <div className="col-md-4">
            <h1>{props.book.title}</h1>
            <h4>{props.book.author}</h4>
        </div>

        <div className="col-md-4">
            <button onClick={props.nextbook}>Next book</button>
        </div>


        </div>
      );
}
 
export default BookViewer;