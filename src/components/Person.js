import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ person }) => (
  <div>
    <b>{ `${person.firstName} ${person.lastName}` }</b>
  </div>
);

Person.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};

export default Person;
