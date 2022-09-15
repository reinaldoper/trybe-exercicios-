// src/NumberClicks.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class NumberClicks extends React.Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        {counter}
        {/* {counter1} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.clickReducer.counter});

NumberClicks.propTypes = {
  counter: PropTypes.number.isRequired,
  /* counter1: PropTypes.number.isRequired, */
};

export default connect(mapStateToProps)(NumberClicks);