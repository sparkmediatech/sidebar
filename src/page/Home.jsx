import React, { useEffect, useState, useContext } from 'react';
import {GoThreeBars} from 'react-icons/go';
import './home.css';
import {AppContext, useGlobalContext } from '../component/context';



export default function Home() {
    const [menubar, setMenuBar] = useState(false);
  

    const {openSidebar, background, openModule} = useGlobalContext();


    useEffect(() => {
      const timer =  setTimeout(() => {
            setMenuBar(!menubar)
        }, 1000);
        return () => {
            clearTimeout(timer)
        }
    }, [menubar])
    
    return (
        <section className='container'>
                    <div className='menuContainer'>
            
                        <GoThreeBars className={`${menubar ? 'toggleBar2': 'toggleBar'}`} onClick={openSidebar}/>
                    </div>
                  
                <div className='Home'>
                   
                    <button className='moduleBTN' onClick={openModule}>Show Module</button>
               
            
                </div>
                
               
         </section>
    )
}
