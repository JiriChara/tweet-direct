import React from 'react';
import PropTypes from 'prop-types';

import styles from './ListItem.css';

const ListItem = ({ person }) => (
  <li className={styles.person}><b>{ `${person.firstName} ${person.lastName}` }</b> - { person.id }</li>
);

ListItem.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};

export default ListItem;
