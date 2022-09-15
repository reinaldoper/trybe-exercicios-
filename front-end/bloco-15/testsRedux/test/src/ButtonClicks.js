// src/ButtonClicks.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addClick }from './actions';
import { onnClick } from './actions';

class ButtonClicks extends React.Component {
  render() {
    const { add, on } = this.props;
    console.log(on);
    return (
      <div>
        <button type="button" onClick={ add }>Aumentar</button>
        <button type="button" onClick={ on }>Diminuir</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick()),
  on: () => dispatch(onnClick())});

ButtonClicks.propTypes = {
  add: PropTypes.func.isRequired,
  on: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ButtonClicks);