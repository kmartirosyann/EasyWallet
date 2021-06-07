import React from 'react';
import vector from '../icons/vector.svg';
import iconPlus from '../icons/iconPlus.svg';


export default function BoxLeft() {
    return (
        <div className='boxLeft'>
            <div className='userphoto'>
                <div className='fixes'>
                    <div className='checkMark'></div>
                </div>
            </div>
            <div className='tac'>
                <p>Վոլոդյա Տանչիկյան</p>
                <div>
                    <span className='count'>39,950֏ </span>
                    <img className='plusicon' src={iconPlus} alt='+' />
                </div>
                <img src={vector} alt='...' />
            </div>
            <div className='cart'>
                <p className='cartText'>քարտեր {'>'} </p>
                <div className='plusCart'></div>
            </div>
            
            <div className='cartBottom'>
            <div className='userCart'>
                
                    <div className='cartFon'>
                   <div className='cart'>
                       <div className='cartName'></div>
                       <div className='cartNumber'>•••• 2856</div>
                   </div>
                   <div>
                       <p className='balance'>մնացորդ</p>
                       <p className='count fz-24'>98,200 ֏</p>
                       <p className='visa'></p>
                   </div>
                    </div>
            </div>
            </div>
            <div>
                <div className='slyder'>
                    <span className='cearkl'></span>
                </div>
                <span className='cearkl'></span>
                <span className='cearkl'></span>
            </div>
        </div>
    )
}
