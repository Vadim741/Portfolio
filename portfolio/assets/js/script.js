
//Бургер меню-------------------------------------------------------------------//
const iconMenu = document.querySelector('.menu__icon');
const listMenu = document.querySelector('.menu__list');


if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        listMenu.classList.toggle('active');
    })
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            
            if (iconMenu.classList.contains('active')) {
                document.body.classList.remove('lock');
                iconMenu.classList.remove('active');
                listMenu.classList.remove('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

//Язык--------------------------------------------------------------------------//
const arrLang = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero_text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hero_btn': 'Hire me',
        'digital_title': 'Digital photography',
        'digital_text': 'High-quality photos in the studio and on the nature',
        'video_title': 'Video shooting',
        'video_text': 'Capture your moments so that they always stay with you',
        'retouch_title': 'Retouch',
        'retouch_text': 'I strive to make photography surpass reality',
        'audio_title': 'Audio',
        'audio_text': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price_btn': 'Order shooting',
        'standart_title': 'Standart',
        'standart_text1': 'One location',
        'standart_text2': '120 photos in color',
        'standart_text3': '12 photos in retouch',
        'standart_text4': 'Readiness 2-3 weeks',
        'standart_text5': 'Make up, visage',
        'premium_title': 'Premium',
        'premium_text1': 'One or two locations',
        'premium_text2': '200 photos in color',
        'premium_text3': '20 photos in retouch',
        'premium_text4': 'Readiness 1-2 weeks',
        'premium_text5': 'Make up, visage',
        'gold_title': 'Gold',
        'gold_text1': 'Tree locations or more',
        'gold_text2': '300 photos in color',
        'gold_text3': '50 photos in retouch',
        'gold_text4': 'Readiness 1 weeks',
        'gold_text5': 'Make up, visage, hairstyle',
        'contact_title': 'Contact with me',
        'contacts_btn': 'Send message',
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цена',
        'contacts': 'Контакты',
        'hero_text': 'Сохраните искренние эмоции, романтические чувства и счастливые моменты жизни вместе с профессиональным фотографом Alexa Rise',
        'hero_btn': 'Найми меня',
        'digital_title': 'Цифровая фотография',
        'digital_text': 'Качественные фотографии в студии и на природе',
        'video_title': 'Видеосъемка',
        'video_text': 'Запечатлевайте свои моменты так, чтобы они всегда оставались с вами',
        'retouch_title': 'Ретушь',
        'retouch_text': 'Я стремлюсь к тому, чтобы фотография превзошла реальность',
        'audio_title': 'Аудио',
        'audio_text': 'Профессиональная запись звуков для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price_btn': 'Заказать съемку',
        'standart_title': 'Стандарт',
        'standart_text1': 'Одна локация',
        'standart_text2': '120 цветных фотографий',
        'standart_text3': '12 фотографий в ретуши',
        'standart_text4': 'Готовность 2-3 недели',
        'standart_text5': 'Макияж, внешний вид',
        'premium_title': 'Премиальная',
        'premium_text1': 'Одно или два места',
        'premium_text2': '200 цветных фотографий',
        'premium_text3': '20 фотографий в ретуши',
        'premium_text4': 'Готовность 1-2 недели',
        'premium_text5': 'Макияж, внешний вид',
        'gold_title': 'Золото',
        'gold_text1': 'Три локации или более',
        'gold_text2': '300 цветных фотографий',
        'gold_text3': '50 фотографий в ретуши',
        'gold_text4': 'Готовность 1 неделя',
        'gold_text5': 'Макияж, внешний вид, прическа',
        'contact_title': 'Свяжитесь со мной',
        'contacts_btn': 'Отправить сообщение',
    }
}

document.addEventListener("DOMContentLoaded", () => {
    for (const el of [...document.querySelectorAll('.translate')])
    el.addEventListener('click', () => {
        const lang = el.getAttribute('id');
        for (const item of [...document.querySelectorAll('.lang')])
        item.textContent = arrLang[lang][item.getAttribute('data-key')];
    });
});

//Цветовая тема--------------------------------------------------------------------------//
const secWrapper = document.querySelector('.wrapper');
const menulist = document.querySelector('.menu__list'); 
const menuIcon = document.querySelector('.menu__icon');
const tema = document.querySelector('.tema');

// if (!localStorage.theme) localStorage.theme = ""
// secWrapper.className = localStorage.theme
temaBtm.onclick = () => {
    document.body.classList.toggle("body_white");
    secWrapper.classList.toggle("wrapper_white");
    menulist.classList.toggle("menulist_white");
    menuIcon.classList.toggle('menu__icon_white');
    tema.classList.toggle('active');
    // localStorage.theme = secWrapper.className || "";
    

}

const btnMain = document.querySelector('.tema'); // кнопка на смену темы
const btnAll = document.querySelectorAll('.portfolio__button'); //кнопки с портфолио
const containerLine = document.querySelectorAll('.line'); // берет все заголовки
const whiteSection = document.querySelectorAll('.white__container'); // берет секции

btnMain.addEventListener('click', function () {
    btnAll.forEach(function (el) {
        if(!el.classList.contains('button_white')){
            el.classList.add('button_white')
        }else{
            el.classList.remove('button_white')
        }
    })
    containerLine.forEach(function (el) {
        if(!el.classList.contains('dark__line')){
            el.classList.add('dark__line')
        }else{
            el.classList.remove('dark__line')
        }
    })
    whiteSection.forEach(function (el) {
        if(!el.classList.contains('white__section')){
            el.classList.add('white__section')
        }else{
            el.classList.remove('white__section')
        }
    })
})

//Партфолио поры года--------------------------------------------------------------------------//
const btns = document.querySelectorAll('.portfolio__button');
const image = document.querySelectorAll('.portfolio__foto');

btns.forEach(function (btn) {
    btn.addEventListener('click' , function () {
        let value = btn.textContent;
        let count = 1;
        image.forEach(function (a) {
        a.src = `assets/img/portfolio/${value}/${count}.jpg`
        count++
        })
    })
})


//Активные элементы--------------------------------------------------------------------------//
document.addEventListener('DOMContentLoaded', () => {
    const myBtn = document.querySelectorAll('.button_white');
    const myBtns = document.querySelectorAll('.portfolio__button');
    const myTransl = document.querySelectorAll('.translate');

    myBtns.forEach(function (btn) {
        btn.addEventListener('click', () => {
            myBtns.forEach(b => b.classList.remove('activeB'));
            btn.classList.add('activeB');
            });
    });
    // myBtn.forEach(function (btn) {
    //     btn.addEventListener('click', () => {
    //         myBtns.forEach(b => b.classList.remove('activeS'));
    //         btn.classList.add('activeS');
    //         });
    // });
    myTransl.forEach(function (btn) {
        btn.addEventListener('click', () => {
            myTransl.forEach(b => b.classList.remove('activeT'));
            btn.classList.add('activeT');
            });
        });
    });