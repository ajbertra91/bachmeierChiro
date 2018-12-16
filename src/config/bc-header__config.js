const links = [
    {
        label: 'Home',
        url: '#home',
        class: 'home bc-header__link'
    },
    {
        label: 'Services',
        url: '#services',
        class: 'services bc-header__link'
    },
    {
        label: 'About',
        url: '#about',
        class: 'about bc-header__link'
    },
    {
        label: 'Space & Time',
        url: '#space',
        class: 'space bc-header__link'
    },
    {
        label: 'Contact',
        url: '#contact',
        class: 'contact bc-header__link'
    },
];

export function getLinks() {
    return JSON.stringify(links);
}