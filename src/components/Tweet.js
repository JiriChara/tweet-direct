import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tweet = (props) => {
  const { tweet } = props;

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="Avatar" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <Link to="/foo/1">
                <strong>{ tweet.userName }</strong> <small>@johnsmith</small> <small>31m</small>
              </Link>
              <br />
              { tweet.text }
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.shape({
    userName: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Tweet;

const foo = () => console.log('Hello');

export { foo };
