import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ firstName }) => (
  <b>{ firstName }</b>
);

Person.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Person;
