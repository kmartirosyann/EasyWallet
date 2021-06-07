import React from 'react';
import classes from './help.module.css';

import iconPay from '../icons/iconPay.svg';
import iconUser from '../icons/iconUser.svg';
import iconCarBlue from '../icons/iconCarBlue.svg'

export default function Deals() {
    return (
        <>
        
        <div className={classes.dealsGrid}>
           
                <div>
                    <img src={iconPay} alt="Pay" />

                </div>
                <div>
                    <p className={classes.txt}>Այսօր, 23:44</p>
                    <p>ԶԻԳԶԱ ՍՊԸ</p>
                    <p className={classes.txt}>Անկանխիկ գործարք, 4578***915, YEREVAN(AM)</p>
                </div>
                <div>
                <p className={classes.round}>-1,300֏</p>
                </div>
                
                </div>
                <p className={classes.vector}></p>
                <div className={classes.dealsGrid}>
                <div>
                    <img src={iconUser} alt="Pay" />

                </div>
               
                <div>
                    <p className={classes.txt}>Այսօր, 23:44</p>
                    <p>Հակոբ Հակոբյան (խարեբ)</p>
                    <p className={classes.txt}>Փոխանցում իմ հաշվին, 1458***145, GYUMRI(AM)</p>
                </div>
                <div>
                <p className={classes.round} style={{color:'#A6CE38'}}>20300֏</p>
                </div>
                
                </div>
                <p className={classes.vector}></p>
                <div className={classes.dealsGrid}>
                <div>
                    <img src={iconCarBlue} alt="Pay" />

                </div>
                <div>
                    <p className={classes.txt}>Այսօր, 23:44</p>
                    <p>WWW.TAXI.YANDEX.RU</p>
                    <p className={classes.txt}>Անկանխիկ գործարք, 4578***915, YEREVAN(AM)</p>
                </div>
                <div>
                <p className={classes.round}>-1,300֏</p>
                </div>
                
            </div>
            <p className={classes.vector}></p>
       </>
    )
}
