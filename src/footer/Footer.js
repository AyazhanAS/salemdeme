import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <div className = "footer">
            <div className = "footer__container">
                <div className = "footer__content">
                    <div className = "footer__content-copyRigth">© VISUAL EDGE 2021</div>
                    <div className = "footer__content-centerText">
                        <div>Политика конфедециальности </div>
                        <div>Условия договора</div>
                    </div>
                    <div className = "footer__personal-area">
                        <div className = "footer__personal-area-sign-in">
                            <a>Войти</a>
                        </div>
                        <div className = "footer__personal-area-sign-up">
                            <a>Зарегистрироваться</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
