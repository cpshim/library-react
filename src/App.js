import React from "react";
import "./App.css";


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = pages;
  this.read = read;
}

class BookTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myLibrary: [
        { title: "Test Title", author: "Bob", numOfPages: 4 },
        { title: "Test Title 2", author: "Bob", numOfPages: 4 },
        { title: "Test Title 3", author: "Bob", numOfPages: 4 }
      ],
    };
  }

  addNewBook() {
    let newBook = new Book("Foo", "Mr. Bar", 25, false);
    let currentLibrary = this.state.myLibrary;
    //Do it this way since push function returns an integer so can't set
    //state.myLibrary: currentLibrary.push() or else map function will fail
    currentLibrary.push(newBook);
    this.setState({
      myLibrary: currentLibrary,
    });
  }

  render() {
    return (
      <div>
        <div className="book-area">
          {this.state.myLibrary.map(book =>
            <div className="card">
              {book.title} by {book.author}
              <hr></hr>
              Number of Pages: {book.numOfPages}
            </div>)
          }
        </div>
        <button className="new-book-btn" onClick={() => this.addNewBook()}>Click to add</button>
      </div>
    )
  }
}

class NewBookBtn extends React.Component {
  state = {
    show: false
  }

  showForm(){
    this.setState({
      show: true
    });
  }

  hideForm(){
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <div>
        <button className="new-book-btn" onClick={() => this.showForm()}>New Book</button>
      </div>
    )    
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>My Handy Library</h1>
        </header>
        <body>
          <BookTable />
          <NewBookBtn />
        </body>
      </div>
    );
  }
}

export default App;
