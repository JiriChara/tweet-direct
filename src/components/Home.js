import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchList, fetchListStart, fetchListSuccess, fetchListError } from '../store/persons';

const mapStateToProps = state => ({
  persons: state.persons,
});

const mapDispatchToProps = dispatch => ({
  fetchPersons: () => {
    dispatch(fetchListStart());

    return fetchList()
      .then(res => dispatch(fetchListSuccess(res)))
      .catch(error => dispatch(fetchListError(error)));
  },
});

class Home extends Component {
  componentDidMount() {
    this.props.fetchPersons();
  }

  render() {
    return (
      <main>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <p className="title">
                Home
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p>{ JSON.stringify(this.props.persons) }</p>
          </div>
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  fetchPersons: PropTypes.func.isRequired,
  persons: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    })),
  }).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
