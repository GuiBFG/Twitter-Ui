import { FormEvent, KeyboardEvent, useState } from 'react';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';

import './Timeline.css';

export function Timeline() {
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([
    'primeiro tweet',
    'teste',
    'Hello World',
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    if (newTweet !== '') {
      setTweets([newTweet, ...tweets]);
      setNewTweet('');
    }
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet('');
    }
  }
  return (
    <main className='timeline'>
      <Header title='Home' />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/GuiBFG.png' alt='GuiBFG' />
          <textarea
            id='tweet'
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
