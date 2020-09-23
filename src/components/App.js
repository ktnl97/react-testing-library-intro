import React from "react";
import "./styles.css";
import Books from "./Books.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" , books: [], interestExpressed: false};
  }

  expressInterest = () => {
    this.setState({
      interestExpressed: true
    })
  }
  fetchUserInfo = () => {
    return Promise.resolve({
      firstName: "Nithyalakshmi",
      lastName: "Kamalakkannan"
    });
  };

  fetchBooks = () => {
    return Promise.resolve({
      books: Books
    });
  }

  componentDidMount() {
    Promise.all([this.fetchUserInfo(), this.fetchBooks()])
    .then((res) => {
      this.setState({
        name: `${res[0].firstName} ${res[0].lastName}`,
        books: res[1].books
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Tech Book Hub</h1>
        <label>Signed in as {this.state.name}</label>
        <h4>Switching to digital should be easy, seamless and integrated.</h4>
        <h4>We bring life to books for a tech adventure</h4>
        <p>List of books we offer you!</p>
          {
            this.state.books.map(book => <a href={book.website} key={book.title}>{book.title}</a>)
          }
        <button onClick={this.expressInterest} disabled={this.state.interestExpressed}>{ this.state.interestExpressed ? "Interest Expressed" : "Express Interest" }</button>
      </div>
    );
  }
}

export default App;
