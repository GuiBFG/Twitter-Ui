import logoTwitter from '../assets/logo-twitter.svg';

import './Sidebar.css';

import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
} from 'phosphor-react';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='logo' src={logoTwitter} alt='Logo Twitter' />
      <nav className='main-navigation'>
        <Link to='/' className='active'>
          <House weight='fill' />
          Home
        </Link>
        <a href=''>
          <Hash />
          Explore
        </a>
        <a href=''>
          <Bell />
          Notifications
        </a>
        <a href=''>
          <Envelope />
          Messages
        </a>
        <a href=''>
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href=''>
          <FileText />
          Lists
        </a>
        <a href=''>
          <User />
          Profile
        </a>
        <a href=''>
          <DotsThreeCircle />
          More
        </a>
      </nav>
      <button className='new-tweet' type='button'>
        Tweet
      </button>
    </aside>
  );
}
