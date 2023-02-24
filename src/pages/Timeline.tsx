import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';

import './Timeline.css';

const tweets = [
  'Eu sou viadinho e choro quando passo mal :(((((((((((((',
  'Ain olha, eu to mijano sangui :,(',
  'alguém pra me comer? Chama dm',
];

export function Timeline() {
  return (
    <main className='timeline'>
      <Header title='Home' />

      <form className='new-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/GuiBFG.png' alt='GuiBFG' />
          <textarea id='tweet' placeholder="What's happening?"></textarea>
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
