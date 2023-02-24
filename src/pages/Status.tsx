import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';

import './Status.css';

const answers = ['Parabéns por se assumir', 'linda mulher vc', 'chamei dm'];

export function Status() {
  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla odit fugiat nesciunt, non, ab velit expedita quos incidunt sit similique aspernatur delectus facilis rerum. Nisi unde numquam repellendus saepe. Distinctio?' />

      <Separator />

      <form className='answer-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/GuiBFG.png' alt='GuiBFG' />
          <textarea id='tweet' placeholder='Tweet your answer'></textarea>
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
