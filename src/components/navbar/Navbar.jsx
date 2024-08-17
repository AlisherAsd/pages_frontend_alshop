import React, { useContext, useState } from 'react';
import { Context } from '../..';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, INFO_ROUTER, ITEM_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
import { observer } from 'mobx-react-lite';
import { CloseButton } from 'react-bootstrap';



const NavBar = observer(() => { 

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const {user} = useContext(Context)

    
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    

    function isAdmin(role) {
        if (role === "ADMIN") {
            return  (
                
                <NavLink 
                      activeClassName="active"
                      className="nav-links"
                to={ADMIN_ROUTE}>Админ панель</NavLink>
            )
        }
        else {
            return ''
        }
    }
    
    return (
     
        <nav className='navbar'>
            <div className='nav-container'>
                <NavLink to={SHOP_ROUTE} className="nav-logo">
                   
                    <span>ALSHOP</span>
                    <img src='https://scalebranding.com/wp-content/uploads/2021/12/LOGO-MINIMAL-BLACK-HAWK.jpg'
                    style={{height: 40, marginLeft: 10}}/>
                </NavLink>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {
                        user.isAuth ?
                            <>  
                                <li className="nav-item">
                                    {isAdmin(user.role)}
                                </li>
                                <li className="nav-item">
                                    <NavLink to={ITEM_ROUTE}
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >Товары</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={INFO_ROUTER}
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >О нас</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={BASKET_ROUTE + '/' + user.UserId}
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >{user.UserName}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={() => logOut()}
                                        activeClassName="active"
                                        className="nav-links"
                                    >Выйти</NavLink>
                                </li>      
                            </>
                        :
                            <>
                                <li className="nav-item">
                                    <NavLink to={ITEM_ROUTE}
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >Товары</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={INFO_ROUTER}
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >О нас</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/login'}
                                        activeClassName="active"
                                        className="nav-links"
                                    > Авторизация </NavLink>
                                </li>
                            </>
                    }
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    {click ? (
                    <span className="icon">
                        <CloseButton style={{color: 'white'}}/>;
                    </span>
                    ) : (
                    <span className="icon">
                        MENU
                    </span>
                    )}
                </div>
            </div>
        </nav>
    );
});

export default NavBar;