import React from 'react';
import {AiTwotoneHome, AiFillFolderOpen} from 'react-icons/ai';
import { RiTeamFill} from 'react-icons/ri';
import {FaCalendarAlt} from 'react-icons/fa';
import {HiDocumentText} from 'react-icons/hi';


const datalinks = [
  {
    id: 1,
    url: '/',
    text: 'Home',
     logo: <AiTwotoneHome/>
  },
  {
    id: 2,
    url: '/team',
    text: 'Team',
    logo: <RiTeamFill/>
  },
  {
    id: 3,
    url: '/projects',
    text: 'Projects',
    logo: <AiFillFolderOpen/>
  },
  {
    id: 4,
    url: '/calender',
    text: 'Calender',
    logo: <FaCalendarAlt/>
  },
  {
    id: 5,
    url: '/document',
    text: 'Document',
    logo: <HiDocumentText/>
  },
   
];

export default datalinks

