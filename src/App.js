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
        { title: "Test Title", author: "Bob", numOfPages: 4, read: true },
        { title: "Test Title 2", author: "Bob", numOfPages: 4, read: false },
        { title: "Test Title 3", author: "Bob", numOfPages: 4, read: true }
      ],
      title: '',
      author: '',
      numOfPages: '',
      read: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
 };

  addNewBook() {
    let newBook = new Book(this.state.title, this.state.author, this.state.numOfPages, this.state.read);
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
              <p>Number of Pages: {book.numOfPages}</p>
              Finished Reading: {book.read ? "Yes":"No"}
            </div>)
          }
        </div>
        <form className="new-book-form">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
 
          <label htmlFor="Author">Author</label>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />

          <label htmlFor="Pages">Pages</label>
          <input
            type="text"
            name="numOfPages"
            value={this.state.numOfPages}
            onChange={this.handleChange}
          />
        </form>
        <button className="new-book-btn" onClick={() => this.addNewBook()}>Click to add</button>
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
        </body>
      </div>
    );
  }
}

export default App;
