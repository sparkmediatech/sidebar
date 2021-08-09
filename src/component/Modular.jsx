import React from 'react';
import './module.css';
import {MdClose} from 'react-icons/md';
import {useGlobalContext } from '../component/context';

export default function Modular() {
     const {isModule, closeModule} = useGlobalContext()

    return (
        <div className={`${isModule ? 'moduleContainer': 'showModuleContainer '}` }>
            <div className='moduleWrapper'>
                
                <h3>Module Contents</h3>
                <MdClose className='moduleCLoseBTN' onClick={closeModule}/>
                

            </div>

            <div className='bgCover'></div>
       
        </div>
    )
}
