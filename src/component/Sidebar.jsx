import React from 'react';
import Data from './data';
import Social from './social';
import {MdClose} from 'react-icons/md';
import './sidebar.css'
import social from './social';
import {useGlobalContext } from '../component/context';


export default function Sidebar() {
    const {isSideBar, closeSidebar} = useGlobalContext()
    return (
        <div className={`${isSideBar? 'socialCont': 'hideSideBar socialCont'}`}>
            <div className='sidebar'>
                <h2>Modula Side Bar</h2>

                    <MdClose className='moduleCLoseBTN' onClick={closeSidebar}/>

            </div>
           

            <ul className='sidebarItems'>
                {Data.map((singleData) => {
                    const {id, url, text, logo} = singleData;
                    return(
                        <div className='listCont'>
                            <div className='menuContent'>
                                
                        <p className='logoIcon'>{logo}</p>
                            <li key={id} ><a href={url}>  {text}</a></li></div> </div>
                    )
                })}

            </ul>
            
            <div className='socialIcons'>
            
                {social.map((singleSocial) => {
                const {id, url, icon} = singleSocial;
                return(
                    <li key={id}><a href={url}>{icon}</a></li>
                )
                })}
            </div>
            
        </div>
    )
}
