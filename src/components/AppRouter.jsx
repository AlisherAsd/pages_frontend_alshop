import React, { useContext } from 'react';
import {Route, Routes} from 'react-router-dom'
import {AuthRoutes, PublicRoutes} from '../routes'
import Shop from '../pages/Shop';
import { Context } from '..';

const AppRouter = () => {

    // Получаем класс user из контекста с помощью хука
    const {user} = useContext(Context)


    // Если метод is.Auth = true то мы показываем -
    // странички для авторизолванного пользователя и публичныеб

    // Если false то показываем только публичные
    return (
        <Routes>
            {user.isAuth && AuthRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={< Component />} exact/>
            )}
            {PublicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={< Component />} exact/>
            )}
            <Route path='*' element={< Shop />}/>
        </Routes>
    );
};

export default AppRouter;