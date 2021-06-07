import React from 'react';
import { NavLink } from 'react-router-dom';
import logoWolet from '../icons/logoWolet.svg';
import search from '../icons/search.svg';
import seting from '../icons/seting.svg';
import next from '../icons/next.svg'

export default function NavBar() {
    return (
        <div className='container'>
        <nav>
            <ul className='navBox '>
                <li className='navlink mr-100'>
                    <NavLink to='/' className='navText'> <img src={logoWolet} alt='EasyWallet' /></NavLink>
                </li>
                <li className='navlink '>
                    <NavLink to='/help' className='navText' activeClassName='active'> Ակնարկ</NavLink>
                </li>
                <li className='navlink'>
                    <NavLink to='/transfers' className='navText' activeClassName='active'>Փոխանցումներ</NavLink>
                </li>
                <li className='navlink'>
                    <NavLink to='/payments' className='navText' activeClassName='active' > Վճարումներ</NavLink>
                </li>
                <li className='navlink'>
                    <NavLink to='/demend' className='navText' activeClassName='active'>Պահանջագիր</NavLink>
                </li>
                <li className='navlink'>
                    <NavLink to='/history' className='navText' activeClassName='active'> Պատմություն</NavLink>
                </li>
                <li className='navlink'>
                    <NavLink to='/searchPhone' className='navText' activeClassName='active'><i className='more'></i> <i className='more'></i><i className='more'></i></NavLink>
                </li>
                <li className='navlink'>
                    <NavLink to='/searchPhone' className='searchPone' activeClassName='active'>
                        <img src={search} alt='search phone' className='iconSearch' />
                        <span>Որոնում</span>
                    </NavLink>
                </li>
                <li className='navlink'>
                
                    <NavLink to='/searchPhone' className='navText' activeClassName='active'>
                    
                        <i className='db'>  
                        <i className=' notivIcons'></i>
                        </i>
                        <i className='notevicationNamber'>5</i> 

                    </NavLink>
                </li>
                <li className='navlink'>
                    <NavLink to='/searchPhone' className='navText' activeClassName='active'>
                        <img src={seting} alt='search phone' className='notivication' />

                    </NavLink>
                </li>
                <li className='navlink'>
                    <NavLink to='/searchPhone' className='navText' activeClassName='active'>
                        <img src={next} alt='search phone' className='notivication' />

                    </NavLink>
                </li>
            </ul>

        </nav>
        </div>
    )
}
