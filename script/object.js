// Загрузка CSS
fetch("./style/style.css")
  .then((response) => response.text())
  .then((css) => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  });

//Pop-up Личного входа
const script1 = document.createElement("script");
script1.src = "./script/popup.js";
document.head.appendChild(script1);

// Слайдер баннеров
const script2 = document.createElement("script");
script2.src = "./script/slider.js";
document.head.appendChild(script2);

// Фильтр фильмов
const script = document.createElement("script");
script.src = "./script/filter.js";
document.body.appendChild(script);

// Шаблон HTML
const htmlTemplate = `
<header>
        <div class="header_container">
            <div class="header_logo">
                <img src="./img/logo.svg" alt="logotype">
            </div>
            <div class="header_nav">
                <a href="#">Расписание</a>
                <a href="#">Акции</a>
                <a href="#">Детям</a>
                <a href="#">АРТ</a>
                <a href="#">Кино на заказ</a>
            </div>
            <div class="header_auth">
                <a href="#" id="open_pop_up">Личный кабинет</a>
            </div>
            <div class="pop_up" id="pop_up">
                <div class="pop_up_container">
                    <div class="pop_up_body" id="pop_up_body">
                        <h1>Личный кабинет</h1>
                        <div class="pop_login">
                            <p>Логин</p>
                            <input type="text" placeholder="example@gmail.com">
                            <p>Пароль</p>
                            <input type="password" placeholder="example">
                        </div>
                        <div class="btn_cab">
                            <button>Вход</button>
                        </div>
                        <div class="pop_up_close" id="close_pop_up">&#10006</div>
                    </div>
                </div>
            </div>
        </div>
        <script src="./src/scripts/popup.js"></script>
    </header>
    <main>
        <div class="swiper_bunner">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="./img/ice.webp" alt="banner"></div>
                  <div class="swiper-slide"><img src="./img/event.webp" alt="banner"></div>
                  <div class="swiper-slide"><img src="./img/pop.webp" alt="banner"></div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        
        <div class="cinema_container">
            <nav class="ticket_now">
                <a data-f="all" class="text" href="#">Все</a>
                <a data-f="today" class="text" href="#">Комедии</a>
                <a data-f="kids" class="text" href="#">Детское</a>
                <a data-f="soon" class="text" href="#">Драма</a>
            </nav>
            <hr>
            <div class="cinema_ticket_container">
                <div class="cinema_card soon">
                    <img src="./img/ice3.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Лед</p>
                        <p class="genre">Драма, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card soon">
                    <img src="./img/MM.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Мастер и Маргарита</p>
                        <p class="genre">Драма, Фэнтези, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card kids">
                    <img src="./img/SK.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Супер Крылья. Фильм</p>
                        <p class="genre">Анимация, Детский, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card today kids">
                    <img src="./img/BM.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Бременские музыканты</p>
                        <p class="genre">Комедия, Приключения, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card today">
                    <img src="./img/holop.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Холоп 2</p>
                        <p class="genre">Комедия, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card soon">
                    <img src="./img/air.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Воздух</p>
                        <p class="genre">Драма, Военный, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card soon">
                    <img src="./img/astral.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Астрал. Ритуал Малум</p>
                        <p class="genre">Хоррор, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card kids">
                    <img src="./img/earth.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Три богатыря и Пуп Земли</p>
                        <p class="genre">Анимация, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card today">
                    <img src="./img/slava.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Конец славы</p>
                        <p class="genre">Комедия, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card today">
                    <img src="./img/bear.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Я - медведь</p>
                        <p class="genre">Комедия, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card kids">
                    <img src="./img/lady.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Три мушкетера: Миледи</p>
                        <p class="genre">Приключения, Исторический, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card today soon">
                    <img src="./img/summer.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Между нами лето</p>
                        <p class="genre">Комедия, Драма, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card soon">
                    <img src="./img/life.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Одна жизнь</p>
                        <p class="genre">Драма, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card soon">
                    <img src="./img/jester.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Джестер</p>
                        <p class="genre">Хоррор, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="cinema_card today soon">
                    <img src="./img/dog.ebp" alt="banner">
                    <div class="cinema_text">
                        <p class="name">Знакомьтесь, пес</p>
                        <p class="genre">Драма, Комедия, 2D</p>
                        <div class="btn_buy_cinema">
                            <button onclick="alert('Технические работы. Просим прощения!')">Подробнее</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <script src="./script/filter.js"></script>
        <script src="./script/slider.js"></script>
        <section class="stock_container">
            <div class="stock_wrapper">
                <div class="stock_info">
                    <meta name="description" content="Билет в кино от 100₽ и полный список фильмов, которые можно посмотреть по Пушкинской карте!"/>
                    <h1>Специальное предложение для школьных групп</h1>
                    <p>Билет в кино от 100₽ и полный список фильмов, которые можно посмотреть по Пушкинской карте!</p>
                    <div class="btn_stock">
                        <button onclick="alert('Технические работы. Просим прощения!')">Узнать больше</button>
                    </div>
                </div>
                <div class="pushkin_card">
                    <img src="./img/Pushkin.png" alt="banner">
                </div>
            </div>
        </section>
        <section class="kids_container">
            <div class="kids_img">
                <img src="./img/kids.png" alt="banner">
            </div>
            <div class="kids_info">
                <h1>Детский билет в кино со скидкой 50%</h1>
                <p>Теперь вы знаете, как провести каникулы насыщенно и интересно: разбавьте прогулки на улице просмотром фильма на большом экране - это хорошая возможность передохнуть и увлекательно провести время с ребёнком.</p>
                <div class="btn_buy">
                    <button onclick="alert('Технические работы. Просим прощения!')">Купить билет</button>
                </div>
            </div>
        </section>
        <section class="combo_container">
            <div class="combo_wrapper">
                <div class="combo_info">
                    <h1>BIG*-комбо - выгодное зимнее предложение в кинобаре</h1>
                    <p>Большой попкорн и Добрый Кола cо скидкой 15 %</p>
                    <div class="btn_combo">
                        <button onclick="alert('Технические работы. Просим прощения!')">ХОЧУ ПОПРОБОВАТЬ!</button>
                    </div>
                </div>
                <div class="combo_img">
                    <img src="./img/combo.webp" alt="banner">
                </div>
            </div>   
            <h1></h1>
        </section>
        <section class="news_container">
            <div class="news_wrapper">
                <img src="./img/stockone.jpg" width="402px" alt="banner">
                <h1>Купи билеты онлайн и получи скидку до 25% на продукцию кинобара!</h1>
                <p>26 декабря 2023, 13:29</p>
            </div>
            <div class="news_wrapper">
                <img src="./img/nech.jpg" width="402px" alt="banner">
                <h1>Премьерный показ хоррора "Нечисть"</h1>
                <p>20 февраля 2024, 13:39</p>
            </div>
            <div class="news_wrapper">
                <img src="./img/hero.png" width="402px" alt="banner">
                <h1>Кино в подарок для участников боевых действий</h1>
                <p>20 февраля 2024, 13:43</p>
            </div>
        </section>
    </main>
    <footer>
        <hr>
        <div class="footer_container">
            <div class="footer_logo">
                <img src="./img/logo.svg" alt="logo">
            </div>
            <p class="footer_politic">© 2025 Сеть кинотеатров «CinemaAst» – все права защищены</p>
        </div>
    </footer>
`;

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  // Добавление основного HTML
  document.getElementById("root").innerHTML = htmlTemplate;
});
