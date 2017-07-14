import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchList, fetchListStart, fetchListSuccess, fetchListError } from '../store/persons';
import Person from './persons/ListItem';

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
    const personList = this.props.persons.data.map(person => (
      <Person key={person.id} person={person} />
    ));

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
            <ul>
              { personList }
            </ul>
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
