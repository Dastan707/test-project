import React from 'react';
import Logo from '../../assets/img/Cloud.png'
import './Register.scss';


const Register = () => {
    return (
        <>
        <div className='header'>
            <div className='header__logo'>
                <img className='header__image' src={Logo} alt='logo' />
                <h3 className="header__text">LOGO</h3>
            </div>
            <div className='header__entry'>
                <p>У меня уже есть аккаунт. <a>Войти</a> </p>
            </div>
        </div>
        <div className='header__main'>
            <p>Для дальнейшей работы,<br></br>пожалуйста,зарегайся</p>
            <div className='register-inps'>
                <input placeholder='Имя'/>
                <input placeholder='Фамилия'/>
                <input placeholder='Email'/>
                <input placeholder='Телефон'/>
                <input placeholder='Адрес'/>
                <input placeholder='Пароль'/>
                <input placeholder='Повторите пароль'/>
            </div>
            <div className='register-check'>
                <input type='checkbox'/><span>Test</span><br></br>
                <input type='checkbox'/><span>Test</span>
            </div>
                <button className='register-btn'>Создать аккаунт</button>
        </div>

        </>
    );
};


export default Register;