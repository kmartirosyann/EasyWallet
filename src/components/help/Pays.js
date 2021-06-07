import React from 'react';
import classes from './help.module.css';

import iconBanckBeild from '../icons/iconBanckBeild.svg';
import iconCart from '../icons/iconCart.svg';
import iconFrends from '../icons/iconFrends.svg';
import iconCase from '../icons/iconCase.svg';
import iconCar from '../icons/iconCar.svg';

export default function Pays() {
    return (
        <div className={classes.payBox}>
              <div className={classes.favorite}>
                    <p>Նախընտրելիներ եվ խմբեր{' >'}</p>

                </div>
                <div className={classes.contianerGrid}>
                <div className={classes.gridItem}>
                    <div className={classes.containerFlex}>
                        <div>
                     <p className={classes.textCart}>Բանկային </p>
                     <p className={classes.textCart}>փոխանցում</p>
                     </div>
                     <img src={iconBanckBeild} alt='Banck' />
                    </div>

                </div>
                <div className={classes.gridItem}>
                <div className={classes.containerFlex}>
                        <div>
                     <p className={classes.textCart}>Քարտային </p>
                     <p className={classes.textCart}>փոխանցում</p>
                     </div>
                     <img src={iconCart} alt='Cart' />
                    </div>
                </div>
                <div className={classes.gridItem}>
                <div className={classes.containerFlex}>
                        <div>
                     <p className={classes.textCart}>Փոխանցում </p>
                     <p className={classes.textCart}>ընկերոջը</p>
                     </div>
                     <img src={iconFrends} alt='Frends' />
                    </div>
                </div>
                <div className={classes.gridItem}>
                <div className={classes.containerFlex}>
                        <div>
                     <p className={classes.textCart}>Ավանդների  </p>
                     <p className={classes.textCart}>համալրում</p>
                     </div>
                     <img src={iconCase} alt='Case' />
                    </div>
                </div>
                <div className={classes.gridItem}>
                <div className={classes.containerFlex}>
                        <div>
                     <p className={classes.textCart}>ՃՈ </p>
                     <p className={classes.textCart}>Տուգանքներ</p>
                     </div>
                     <img src={iconCar} alt='Car' />
                    </div>
                </div>
                </div>
        </div>
    )
}
