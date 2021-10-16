import dishes from './menu.json';
import dishTemplate from './templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = dishTemplate(dishes);
menuRef.insertAdjacentHTML('beforeend', markup);

// ____________________________________________

const refs = {
    body: document.querySelector('body'),
    checkbox: document.querySelector('#theme-switch-toggle'),

}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange(evt) {
    evt.preventDefault();
    // refs.body.classList.toggle('dark-theme');
    if(refs.checkbox.checked){
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', 'DARK');
    } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', 'LIGHT');
  }

};

// ______________________________________________________________

window.onload = onPageReload;

function onPageReload() {
    if (localStorage.getItem('Theme') === 'DARK') {
        refs.checkbox.setAttribute('checked', true);
        refs.body.classList.add(Theme.DARK);
    }
}


