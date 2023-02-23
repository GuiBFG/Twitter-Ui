import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react';
import './Tweet.css';
import LuizCarlos from '../assets/luiz.jpg';

interface TweetProps {
  content: string
}

export function Tweet(props:TweetProps) {
  return (
      <a href='#' className='tweet'>
        <img src={LuizCarlos} alt='Luiz Carlos' />

        <div className='tweet-content'>
          <div className='tweet-content-header'>
            <strong>Luiz Carlos</strong>
            <span>@akuseru_p1</span>
          </div>

          <p>{props.content}</p>

          <div className='tweet-content-footer'>
            <button type='button'>
              <ChatCircle />
              20
            </button>

            <button type='button'>
              <ArrowsClockwise />
              20
            </button>

            <button type='button'>
              <Heart />
              20
            </button>
          </div>
        </div>
      </a>
  );
}
