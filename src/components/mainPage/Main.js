import React from 'react'
import ImageTemplate from "../../assets/img/main-page-img.png"
import cardIconStart from "../../assets/icons/fast.png"
import cardIconCenter from "../../assets/icons/checked.png"
import cardIconEnd from "../../assets/icons/save-money.png"
import "./Main.css"

export default function Main() {
    return (
        <div className="main__wrapper">
            <div className = "main__container">
                <div className="main__content">
                    <div className="main__firstBlock">
                        <div className = "main__firstBlock-leftPart">
                            <div className="main__firstBlock-title">
                                <p>POST EXPRESS ДОСТАВИТ ЧТО УГОДНО КУДА УГОДНО</p>
                            </div>
                            <div className = "main__firstBlock-subTitle">
                                <p>Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов, в том числе тяжеловесных и крупногабаритных, по территории Республики Казахстан для частных и корпоративных клиентов.</p>
                            </div>
                            <div className="main__firstBlock-buttons">
                                <div>
                                    <a>Я курьер </a>
                                </div>
                                <div>
                                    <a>Я отправитель</a>
                                </div>   
                            </div>
                        </div>
                        <div className = "main__firstBlock-rightBlock">
                            <img src = {ImageTemplate}/>
                        </div>  
                    </div>
                    <div className="main__secondBlock">
                        <div className = "main__title">
                            <p>чем мы занимаемся</p>
                        </div>
                        <div className = "main__secondBlock-content">
                        <div className="main__secondBlock-leftPart">
                            <div className = "main__secondBlock-subBlock">
                                <div className = "main__secondBlock-order">1</div>
                                <div className = "main__secondBlock-description">
                                    <div className = "main__secondBlock-subTitle">
                                        <p>Работаем быстро</p>
                                    </div>
                                    <div className="main__secondBlock-text">
                                        <p>Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов, в том числе тяжеловесных и крупногабаритных, по территории Республики Казахстан для частных и корпоративных клиентов.</p>
                                    </div>
                                </div>
                            </div>
                            <div className = "main__secondBlock-subBlock">
                                <div className = "main__secondBlock-order">2</div>
                                <div className = "main__secondBlock-description">
                                    <div className = "main__secondBlock-subTitle">
                                        <p>Приемлимая цена</p>
                                    </div>
                                    <div className="main__secondBlock-text">
                                        <p>Мы можем за короткое время без потери качества произвести все работы. У нас имеется собственный склад различных материалов, а также налажены связи с различными поставщиками, которые быстро доставят недостающие материалы. В результате вам не придется ждать!</p>
                                    </div>
                                </div>
                            </div>
                            <div className = "main__secondBlock-subBlock">
                                <div className = "main__secondBlock-order">3</div>
                                <div className = "main__secondBlock-description">
                                    <div className = "main__secondBlock-subTitle">
                                        <p>Уникальный проект</p>
                                    </div>
                                    <div className="main__secondBlock-text">
                                        <p>Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов, в том числе тяжеловесных и крупногабаритных, по территории Республики Казахстан для частных и корпоративных клиентов.</p>
                                    </div>
                                </div>
                            </div>
                           
                            </div>
                           <div className="main__secondBlock-rightPart">
                               <img src = {ImageTemplate}/>
                            </div>

                        </div>
                        
                       

                    </div>
                    <div className="main__thridBlock">
                        <div className = "main__title">
                            <p>Почему стоит выбрать нас</p>
                        </div>
                        <div className = "main__thridBlock-content">
                            <div className = "main__thridBlock-cards">
                                <div className = "main__thridBlock-icon">
                                    <img src = {cardIconStart}/>
                                </div>
                                <div className = "main__thridBlock-subTitle">Гарантированно доставят</div>
                                <div className = "main__thridBlock-text">Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов,</div>
                            </div>
                            <div className = "main__thridBlock-cards">
                                <div className = "main__thridBlock-icon">
                                    <img src = {cardIconCenter}/>
                                </div>
                                <div className = "main__thridBlock-subTitle">Безопасность посылки</div>
                                <div className = "main__thridBlock-text">Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов,</div>
                            </div>
                            <div className = "main__thridBlock-cards">
                                <div className = "main__thridBlock-icon">
                                    <img src = {cardIconEnd}/>  
                                </div>
                                <div className = "main__thridBlock-subTitle">Можно заработать</div>
                                <div className = "main__thridBlock-text">Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов,</div>
                            </div>
                        </div>
                    </div>
                    <div className="main__fourthBlock">
                        <div className="main__title">
                            <p>Преимущества наших клиентов</p>
                        </div>
                        <div className="main__fourthBlock-content">
                            <div className="main__fourthBlock-content-blue">
                                <div className="main__fourthBlock-leftPart">
                                    <div className="main__fourthBlock-title">
                                        <p>Для курьера</p>
                                    </div>
                                    <div className = "main__fourthBlock-subBlock">
                                        <div>

                                        </div>
                                        <div className = "main__fourthBlock-order">1</div>
                                        <div className = "main__fourthBlock-description">
                                            <div className = "main__fourthBlock-subTitle">
                                                <p>Работаем быстро</p>
                                            </div>
                                            <div className="main__fourthBlock-text">
                                                <p>Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов,</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main__fourthBlock-subBlock">
                                        <div className = "main__fourthBlock-order">2</div>
                                        <div className = "main__fourthBlock-description">
                                            <div className = "main__fourthBlock-subTitle">
                                                <p>Работаем быстро</p>
                                            </div>
                                            <div className="main__fourthBlock-text">
                                                <p>Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов,</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main__fourthBlock-subBlock">
                                        <div className = "main__fourthBlock-order">3</div>
                                            <div className = "main__fourthBlock-description">
                                                <div className = "main__fourthBlock-subTitle">
                                                    <p>Работаем быстро</p>
                                                </div>
                                                <div className="main__fourthBlock-text">
                                                    <p>Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов,</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main__fourthBlock-button">
                                            <a>Стать курьером</a>
                                        </div>
                                    </div>
                                </div>





                            <div className="main__fourthBlock-rightPart">
                                <div className="main__fourthBlock-title">
                                    <p>Для отправителя</p>
                                </div>

                                <div className = "main__fourthBlock-subBlock">
                                    <div className = "main__fourthBlock-order">1</div>
                                    <div className = "main__fourthBlock-description">
                                        <div className = "main__fourthBlock-subTitle">
                                            <p>Работаем быстро</p>
                                        </div>
                                        <div className="main__fourthBlock-text">
                                            <p>Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main__fourthBlock-subBlock">
                                    <div className = "main__fourthBlock-order">2</div>
                                    <div className = "main__fourthBlock-description">
                                        <div className = "main__fourthBlock-subTitle">
                                            <p>Работаем быстро</p>
                                        </div>
                                        <div className="main__fourthBlock-text">
                                            <p>Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main__fourthBlock-subBlock">
                                    <div className = "main__fourthBlock-order">3</div>
                                    <div className = "main__fourthBlock-description">
                                        <div className = "main__fourthBlock-subTitle">
                                            <p>Работаем быстро</p>
                                        </div>
                                        <div className="main__fourthBlock-text">
                                            <p>Компания Post Express предоставляет услуги по экспресс-доставке документов, посылок, грузов,</p>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="main__fourthBlock-button">
                                    <a>Стать отправителем</a>
                                </div>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
