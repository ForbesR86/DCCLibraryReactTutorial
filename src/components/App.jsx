import React, {Component} from "react";
import './App.css';
import TitleBar from './TitleBar/TitleBar.jsx';
import BookViewer from './BookViewer/BookViewer.jsx';
import FooterBar from './Footer/FooterBar.jsx';
import BookCreator from './BookCreator/BookCreator.jsx';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "Ready Player One", author: "Ernest Cline"},
            {title: "All the Light we cannot see", author: "Anthony Doerr"},
            {title: "The First and Last Freedom", author: "Jiddu Kris"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    createBook = (newBook) => {
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length - 1
        })
    }

    render() {
        return(
            <div className="container-fluid">
            < TitleBar />
            < BookViewer book={this.books[this.state.bookNumber]} nextbook={this.goToNextBook} previousbook={this.goToPreviousBook}/>
            < BookCreator createNewBook={this.createBook}/>
            < FooterBar />
           
            
            </div>
        )
    }

}

export default App;