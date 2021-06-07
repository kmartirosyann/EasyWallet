import React from 'react';
import classes from './transfers.module.css';

import iconFrends from '../icons/iconFrends.svg';
import iconBanckBeild from '../icons/iconBanckBeild.svg';
import iconCart from '../icons/iconCart.svg';
import iconCase from '../icons/iconCase.svg';
import ElectronicTransfers from './ElectronicTransfers';

export default function Transfers() {
    return (
        <div>
            <div className={classes.transfersBox} >
                <div className={classes.text}>
                    <p>Փոխանցումներ</p>

                </div>
                <div className={classes.gridItem}>
                    <div>
                        <img src={iconFrends} alt='Frends'/>
                        <p>փոխանցում ընկերոջը</p>
                        <input 
                        type='tel' 
                        name='phone'
                        className={classes.phone}
                        placeholder='Հեռախոսահամար'
                        />
                    </div>
                    <div>
                    <img src={iconBanckBeild} alt='Frends'/>
                        <p>Բանկային փոխանցում</p>
                        <input 
                        type='phone' 
                        name='phone'
                        className={classes.phone}
                        placeholder='Հաշվեհամար'
                        />
                    </div>
                    <div>
                    <img src={iconCart} alt='Frends'/>
                        <p>Քարտային փոխանցում</p>
                        <input 
                        type='phone' 
                        name='phone'
                        className={classes.phone}
                        placeholder='Քարտի համար'
                        />
                    </div>
                    <div> <img src={iconCase} alt='Frends'/>
                        <p>Ավանդների համալրում</p>
                        <input 
                        type='phone' 
                        name='phone'
                        className={classes.phone}
                        placeholder='Պայմանագրի №'
                        /></div>
                </div>
                <ElectronicTransfers/>
            </div>

        </div>
    )
}
