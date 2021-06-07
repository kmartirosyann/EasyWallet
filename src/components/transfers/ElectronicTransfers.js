import React from 'react';
import classes from './transfers.module.css';

import iconDram from '../icons/iconDram.svg';
import iconQiwi from '../icons/iconQiwi.svg';
import iconYandexCart from '../icons/iconYandexCart.svg';
import iconWeb from '../icons/iconWeb.svg';

export default function ElectronicTransfers() {
    return (
        <div>
            <p className={classes.txt}>Էլեկտրոնային Փոխանցումներ</p>
            <div className={classes.ElectronicTransfersGrid}>
              <div>
                  <img src={iconDram} alt='Dram'/>
                  <p className={classes.BeeMoney}>BeeMoney</p>
              </div>
              <div>
              <img src={iconQiwi} alt='Dram'/>
                  <p className={classes.BeeMoney}>Qiwi</p>
              </div>
              <div>
              <img src={iconYandexCart} alt='Dram'/>
                  <p className={classes.BeeMoney}>Yandex.Money</p>
              </div>
              <div>
              <img src={iconWeb} alt='Dram'/>
                  <p className={classes.BeeMoney}>Web.Money</p>
              </div>
              <div>
              <img src={iconQiwi} alt='Dram'/>
                  <p className={classes.BeeMoney}>RBKMoney</p>
              </div>
              <div>
              <img src={iconYandexCart} alt='Dram'/>
                  <p className={classes.BeeMoney}>Moneta.ru</p>
              </div>
              <div>
              <img src={iconWeb} alt='Dram'/>
                  <p className={classes.BeeMoney}>2Pay</p>
              </div>
              <div>
              <img src={iconQiwi} alt='Dram'/>
                  <p className={classes.BeeMoney}>eMoney</p>
              </div>
              <div>
              <img src={iconDram} alt='Dram'/>
                  <p className={classes.BeeMoney}>IFSPAY</p>
              </div>
              <div>
              <img src={iconYandexCart} alt='Dram'/>
                  <p className={classes.BeeMoney}>MYProfile RUB</p>
              </div>
            </div>
        </div>
    )
}
