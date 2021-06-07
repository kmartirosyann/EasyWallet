import React from 'react';
import classes from './help.module.css';

import ucom from '../icons/ucom.svg';
import gaz from '../icons/iconGaz.svg';
import electro from '../icons/iconElectrocity.svg';
import phone from '../icons/iconPhone.svg';
import idBanck from '../icons/iconIdBanck.svg';
import iconWarfoce from '../icons/iconWarfoce.svg';
import iconStream from '../icons/iconStream.svg';
import iconXbox from '../icons/iconXbox.svg';
import iconWorld from '../icons/iconWorld.svg';
import iconWarplanse from '../icons/iconWarplanse.svg';
import iconMyPhone from '../icons/iconMyPhone.svg';
import iconPerlodic from '../icons/iconPerlodic.svg';
import iconYandex from '../icons/iconYandex.svg';
import Pays from './Pays';
import Expenses from './Expenses';

export default function Help() {
    return (
        <div className={classes.box}>
            <div className={classes.boxWidth}>
                <div className={classes.favorite}>
                    <p>Նախընտրելիներ եվ խմբեր{' >'}</p>
                    <div>
                        <p className={`${classes.arrowTransform} ${classes.arrow}`}></p>
                        <p className={classes.arrow}></p>
                    </div>

                </div>
                <div className={classes.contianerGrid}>
                    <div className={classes.gridItem}>
                        <div className={classes.ucomCart}>
                            <div className={classes.cartBox}>
                                <p className={classes.text}>Մոտակա վճարումներ</p>
                                <p className={classes.day}> 8 սեպ</p>
                            </div>
                            <p className={classes.count}>85,000֏</p>
                            <p className={classes.fix}>Ucom Fix, Էլեկտրաէերգիա +5</p>
                        </div>
                    </div>
                    <div className={classes.gridItem}>
                        <div className={classes.cartFon}>
                            <div className={classes.cartlefthbox}>
                                <div className={classes.iconBox}>
                                    <img src={ucom} alt='ucom' className={classes.ucomIcon} />
                                    <img src={gaz} alt='Gaz' className={classes.iconGaz} />
                                    <img src={electro} alt='electrocity' className={classes.electrocity} />
                                    <img src={phone} alt='phone' className={classes.phone} />
                                    <img src={idBanck} alt='Idbank' className={classes.idBanck} />
                                </div>
                                <span className={classes.textPay}>Կոմունալներ </span>
                                <span className={classes.fix} style={{ color: ' rgb(41 46 70 / 45%)' }}>Ucom Fix, Ջուր, Էլեկտրաէ...</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.gridItem}>
                        <div className={classes.cartFon}>
                            <div className={classes.cartlefthbox}>
                                <div className={classes.iconBox}>
                                    <img src={iconWarfoce} alt='Warfoce' className={classes.ucomIcon} />
                                    <img src={iconStream} alt='Stream' className={classes.iconStream} />
                                    <img src={iconXbox} alt='Xbox' className={classes.iconXbox} />
                                    <img src={iconWorld} alt='World' className={classes.iconWorld} />
                                    <img src={iconWarplanse} alt='Warplanse' className={classes.iconWarplanse} />
                                </div>
                                <span className={classes.textPay}>Խաղեր </span>
                                <span className={classes.fix} style={{ color: ' rgb(41 46 70 / 45%)' }}>Warface, Steam, Xbox, Wor...</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.gridItem}>
                        <div className={classes.cartFon}>
                            <img src={iconMyPhone} alt='My phone' />
                            <div className={classes.myPhone}>
                                <span className={classes.textPay}>Իմ հեռախոս</span>
                                <span className={classes.fix} style={{ color: ' rgb(41 46 70 / 45%)' }}>Փոխանցում</span>
                                <img src={iconPerlodic} alt='My phone' className={classes.perlodic}/>
                            </div>
                           
                        </div>

                    </div>
                    <div className={classes.gridItem}>
                        <div className={classes.cartFon}>
                        <img src={iconYandex} alt='Yandex' />
                        <div className={classes.myPhone}>
                        <span className={classes.textPay}>Yandex.Money </span>
                       <span className={classes.fix} style={{ color: ' rgb(41 46 70 / 45%)' }}>Փոխանցում</span>
                       </div>
                        </div>
                    </div>
                    
                </div>
                <Pays/>
                <Expenses/>
            </div>
        </div>
    )
}
