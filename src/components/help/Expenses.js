import React from 'react';
import classes from './help.module.css';

import playMadium from '../icons/playMadium.svg';
import iconCarBlue from '../icons/iconCarBlue.svg';
import vector from '../icons/vector.svg';
import iconHome from '../icons/iconHome.svg';
import Deals from './Deals';

export default function Expenses() {
    return (
        <div>
            <div className={classes.favorite} style={{marginTop:'65px'}}>
                <p>Ծախսեր{' >'}</p>
                <p style={{marginLeft:'615px'}}>Ծախսեր{' >'}</p>
            </div>
            
            <div className={classes.expensesBox}>
                <div className={classes.expenses}>
                    <div className={classes.expensesBox}>
                        <div>
                            <img src={playMadium} alt='Play madium' />
                        </div>
                        <div>
                        <div className={classes.gridFlex}>
                            <div>
                                <img src={iconCarBlue} alt='Play madium' />
                            </div>
                            <div>
                                <p className={classes.textBold}>Տրանսպորտ </p>
                                <p className={classes.textNumber}>68,850 ֏</p>
                            </div>
                            <div>
                                <p className={classes.round}>42%</p>
                            </div>
                            
                        </div>
                        <img src={vector} alt = '...'/>
                        <div className={classes.gridFlex}>
                            <div>
                                <img src={iconHome} alt='Play madium' />
                            </div>
                            <div>
                                <p className={classes.textBold}>Կոմունալ ծառայություններ </p>
                                <p className={classes.textNumber}>53,210 ֏</p>
                            </div>
                            <div>
                                <p className={classes.round} style={{color:'#FFB677'}}>31%</p>
                            </div>
                            
                        </div>
                        <img src={vector} alt = '...'/>
                        <div className={classes.gridFlex}>
                            <div>
                                <img src={iconCarBlue} alt='Play madium' />
                            </div>
                            <div>
                                <p className={classes.textBold}>Տրանսպորտ </p>
                                <p className={classes.textNumber}>68,850 ֏</p>
                            </div>
                            <div>
                                <p className={classes.round}>42%</p>
                            </div>
                            
                        </div>
                        <img src={vector} alt = '...'/>
                        <div className={classes.gridFlex}>
                            <div>
                                <img src={iconCarBlue} alt='Play madium' />
                            </div>
                            <div>
                                <p className={classes.textBold}>Տրանսպորտ </p>
                                <p className={classes.textNumber}>68,850 ֏</p>
                            </div>
                            <div>
                                <p className={classes.round}>42%</p>
                            </div>
                            
                        </div>
                        <img src={vector} alt = '...'/>
                        </div>
                    </div>
                </div>
                <div className={classes.expenses}>
                  <Deals/>
                </div>
            </div>
        </div>

    )
}
