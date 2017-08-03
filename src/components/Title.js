import React from 'react';
import PropTypes from 'prop-types';

const Title = props => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <p className="title">
          { props.content }
        </p>
      </div>
    </div>
  </section>
);

Title.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Title;
