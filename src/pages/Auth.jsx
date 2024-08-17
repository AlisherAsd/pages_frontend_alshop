import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/consts';
import { register, login } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '..'

const Auth = observer(() => {

    const navigate = useNavigate()
   
    const {user} = useContext(Context)
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rep_password, setRep_password] = useState('')

    const location = useLocation()
    // Если url - /login то idLOgin === true
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        try {
            if (rep_password === password || isLogin === true) {
                let data
                if (isLogin) {
                    data = await login(email, password)
                } 
                else {
                    data = await register(email, password)       
                }
                user.setUser(user)
                user.setIsAuth(true)
                navigate('/')
            } else {
                alert("Пароли не совпадают")
            }
        } catch(err) {
            alert(err.response.data.message)
        }
    }

    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 94}}
        >
            <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto" >{isLogin ? 'Войти' : 'Зарегестрироваться'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        value={email}
                        onChange={e => setEmail(e.target.value)}                        
                        className='mt-2'
                        placeholder='Введите ваш email'
                    />
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='mt-2'
                        placeholder='Введите ваш пароль'
                        type="password"
                    />
                    {
                        !isLogin ? (
                            <>
                                <Form.Control
                                value={rep_password}
                                onChange={e => setRep_password(e.target.value)}
                                className='mt-2'
                                placeholder='Повторите ваш пароль'
                                />
                            </>
                        ) : ''
                    }
                    <Button
                        className='mt-3'
                        variant={"outline-succes"}
                        onClick={click}
                    >
                        {isLogin ? 'Войти' : 'Зарегестрироваться'}
                    </Button>
                    <div>
                        {
                            isLogin ? (<>
                                Нет аккауна? 
                                <NavLink to={REGISTER_ROUTE} style={{marginLeft: 5}}>
                                    Зарегестрируйся!
                                </NavLink> 
                            </>)
                            : ''
                        } 
                        
                    </div>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;