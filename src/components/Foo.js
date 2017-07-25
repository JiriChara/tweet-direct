import React, { Component } from 'react';
import PropTypes from 'prop-types';

import client from '../utils/client';
import Person from './Person';

class Foo extends Component {
  constructor(props) {
    super(props);

    const { match } = props;
    this.id = match.params.id;
    this.state = {
      firstName: '',
    };
  }

  componentDidMount() {
    client.get(`/api/persons/${this.id}`)
      .then((res) => {
        this.setState({ firstName: res.data.firstName });
      })
      .catch((err) => {
        const status = err.response.status;

        if (status === 404) {
          this.setState({
            error: 'User not found',
          });
        }
      });
  }

  render() {
    return (
      <main>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <p className="title">
                Foo
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Person firstName={this.state.firstName} />
            { this.state.error }
          </div>
        </section>
      </main>
    );
  }
}
Foo.propTypes = {
  match: PropTypes.shape().isRequired,
};


export default Foo;
