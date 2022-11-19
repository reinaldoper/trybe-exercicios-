import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBook } from '../services/fetchApi';

class initialPage extends Component {

  state = {
    books:[],
  };

  async componentDidMount(){
    const result = await fetchBook();
    this.setState({ books: result });
  }
  render() {
    const { books } = this.state;
    console.log(books);
    const list = books.map((item, index) => (
      <ol key={ index }>
        <li>{ item.title }</li>
        <li>{ item.author }</li>
        <li>{ item.pageQuantity }</li>
        <li>{ item.createdAt }</li>
      </ol>
    ));
    return (
      <div>
        { list }
      </div>
    )
  }
};


export default connect()(initialPage);
