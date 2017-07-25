import React from 'react';

import Tweet, { foo } from './Tweet';

const tweets = [
  {
    id: 1,
    userName: 'John Smith',
    text: 'Some tweet',
  },
  {
    id: 2,
    userName: 'Bob Dylan',
    text: 'Some other tweet',
  },
];

export default () => (
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
        { tweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
          ))
        }
      </div>
    </section>
  </main>
);

foo();
