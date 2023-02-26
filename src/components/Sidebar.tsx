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
  Pencil,
} from 'phosphor-react';

import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='logo' src={logoTwitter} alt='Logo Twitter' />
      <nav className='main-navigation'>
        <NavLink to='/'>
          <House weight='fill' />
         <span>Home</span>
        </NavLink>
        <a href=''>
          <Hash />
          <span>Explore</span>
        </a>
        <a href=''>
          <Bell />
          <span>Notifications</span>
        </a>
        <a href=''>
          <Envelope />
          <span>Messages</span>
        </a>
        <a href=''>
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href=''>
          <FileText />
          <span>Lists</span>
        </a>
        <a href=''>
          <User />
          <span>Profile</span>
        </a>
        <a href=''>
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>
      <button className='new-tweet' type='button'>
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
