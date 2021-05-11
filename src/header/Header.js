import React from 'react'
import "./Header.css"
import logoIcon from "../assets/icons/logo-icon.png"
import logoText from "../assets/icons/logo-text.png"

export default function Header() {
    return (
        <div className="header">
            <div className ="header__container">
                <div className = "header__content">
                    <div className = "header__logo">
                        <div className="header__logo-icon">
                            <img src = {logoIcon}/>
                        </div>
                        <div className ="header__logo-text">
                            <img src = {logoText}/>
                        </div>
                    </div>
                    <div className = "header__personal-area">
                        <div className = "header__personal-area-sign-in">
                            <a>Войти</a>
                        </div>
                        <div className = "header__personal-area-sign-up">
                            <a>Зарегистрироваться</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
