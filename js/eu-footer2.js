document.addEventListener('DOMContentLoaded', function () {
    //native js

    setTimeout(function () {
        var romFooter = document.querySelector('.create_rom_footer');

        romFooter.insertAdjacentHTML("afterbegin", '' +
            '<a class="ev-footer__link" target="_blank" href="./privacy/index.html">empty</a>');

        var colorText = romFooter.getAttribute('data-color_text'),
            colorLink = romFooter.getAttribute('data-color_link'),
            colorLogo = romFooter.getAttribute('data-color_logo'),
            backgroundColor = romFooter.getAttribute('data-background-color'),
            head = document.querySelector('head'),
            romText = document.querySelectorAll('.rom_p'),
            romLink = document.querySelectorAll('.ev-footer__link'),
            romIcon = document.querySelectorAll('.ev-footer__logo svg path');

        for (let i = 0; i < romText.length; i++) {
            romText[i].style.color = colorText;
        }
        ;
        for (let i = 0; i < romLink.length; i++) {
            romLink[i].style.color = colorLink;
        }
        ;
        for (let i = 0; i < romIcon.length; i++) {
            romIcon[i].style.fill = colorLogo;
        }
        ;
        romFooter.style.background = backgroundColor;

        head.insertAdjacentHTML("afterbegin", '<style>.ev-footer, .create_rom_footer{display:flex;align-items:center;padding:15px 0;justify-content:center;flex-direction:column}.ev-footer__logo svg{display:flex;width:30px;height:30px}.ev-footer__logo a{text-decoration:none;font-size:14px;font-family:inherit}.ev-footer__link{display:flex;text-decoration:underline}.ev-footer__link:hover{text-decoration:none}:active,:focus,:hover,:visited,a,a:active,a:focus,a:hover,a:visited{outline:0!important}::-moz-focus-inner{border:0;outline:0}</style>')


        //new
        var windowLang = window.language,
            everadLink = document.querySelector('.ev-footer__link'),
            everadPrivacy = {
                bg: 'Правила за поверителност',
                en: 'Privacy policy',
                hu: 'Adatvédelem',
                de: 'Datenschutz politik',
                el: 'Πολιτική απορρήτου',
                ge: 'კონფიდენციალობის პოლიტიკა',
                es: 'Politica de privacidad',
                it: 'Informativa sulla privacy',
                lv: 'Privatumo politika',
                lt: 'Privatumo politika',
                pl: 'Polityka prywatnośći',
                pt: 'Politica de confidencialidade',
                ro: 'Politica de confidențialitate',
                md: 'Politica de confidențialitate',
                sk: 'Zásady ochrany osobných údajov',
                sl: 'Pravilnik o zasebnosti',
                fr: 'Politique de confidentialité',
                cz: 'Ochrana osobních údajů',
                hr: 'Politika povjerljivosti'
            };

        if (everadPrivacy[windowLang]) {
            everadLink.innerHTML = everadPrivacy[windowLang];
        }
        else {
            everadLink.innerHTML = everadPrivacy.en;
        }
    });


});