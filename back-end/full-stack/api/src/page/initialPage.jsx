import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBook } from '../services/fetchApi';
import { requiretName, newName } from '../actions/action';

class initialPage extends Component {

  async componentDidMount(){
    const result = await fetchBook();
    const { dispatch } = this.props;
    dispatch(requiretName(result));
  }

  handClick = (name) => {
    const { book, dispatch, history } = this.props;
    const result = book.filter((item) => item.name.includes(name));
    dispatch(newName(result));
    history.push('/pok');
  }
  render() {
    const { book } = this.props;
    const list = book.map((item, index) => (
      <div key={ index } className= 'div-li'>
        <li>{ item.name }</li>
        <li>{ item.level }</li>
        <button type='button' 
          className= 'div-li'
          onClick={ () => this.handClick(item.name) }
          >
          <img src={ item.img } alt={ item.name } />
        </button>
      </div>
    ));
    return (
      <div>
       <ol className="App-header"> { list }</ol>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  book: state.reducerFetch.books,
});

export default connect(mapStateToProps)(initialPage);
