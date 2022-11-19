import React, { Component } from 'react'
import { connect } from 'react-redux';

class digimon extends Component {
  handClick = () => {
    const { history } = this.props;
    history.push('/');
  }
  render() {
    const { pok } = this.props;
    return (
      <div className='digimon'><h1>Digimon Page details 
        <button type='button' onClick={ this.handClick } className='back'>
      <h2>{ pok[0].name }</h2>
    </button></h1>
        <div className='digimon-detail'>
          <h2>{ pok[0].level }</h2>
          <img src={ pok[0].img } alt={ pok[0].name } className='detail-img'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pok: state.reducerFetch.newPok,
});

export default connect(mapStateToProps)(digimon);
