import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchList, fetchListSuccess } from '../store/persons';
import Person from './Person';
import Title from './Title';

const mapStateToProps = state => ({
  persons: state.persons,
  route: state.route,
});

const mapDispatchToProps = dispatch => ({
  fetchPersonList() {
    fetchList().then((res) => {
      dispatch(fetchListSuccess({ data: res.data }));
    });
  },
});


const Persons = ({ persons, route, fetchPersonList }) => (
  <main>
    <Title content="Persons" />

    <section className="section">
      <div className="container">
        { persons.list.map(person => <Person key={person.id} person={person} />) }

        <button onClick={fetchPersonList}>Click</button>
        { route.location.pathname }
      </div>
    </section>
  </main>
);

Persons.propTypes = {
  persons: PropTypes.shape({
    list: PropTypes.array,
  }).isRequired,
  route: PropTypes.shape({
  }).isRequired,
  fetchPersonList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
