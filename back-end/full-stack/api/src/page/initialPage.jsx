import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBook, fetchBookSearch } from '../services/fetchApi';
import { requiretName, newName } from '../actions/action';

const message = 'Carregando ...';
class initialPage extends Component {
  state = {
    msg: false,
  }

  async componentDidMount(){
    const result = await fetchBook();
    if (result.length < 1){
      this.setState({ msg: false })
    } else {
      const { dispatch } = this.props;
      dispatch(requiretName(result));
      this.setState({ msg: true })
    }
  }

  handClick = async (name) => {
    const { dispatch, history } = this.props;
    const result = await fetchBookSearch(name);
    dispatch(newName(result));
    history.push('/pok');
  }
  render() {
    const { book } = this.props;
    const { msg } = this.state;
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
       { !msg ? <h1>{ message }</h1> : <ol className="App-header"> { list }</ol> }
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  book: state.reducerFetch.books,
});

export default connect(mapStateToProps)(initialPage);
