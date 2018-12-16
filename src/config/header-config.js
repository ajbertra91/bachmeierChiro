const links = [
    {
        label: 'Home',
        url: '#home',
        class: 'home'
    },
    {
        label: 'Services',
        url: '#services',
        class: 'services'
    },
    {
        label: 'About',
        url: '#about',
        class: 'about'
    },
    {
        label: 'Space & Time',
        url: '#space',
        class: 'space'
    },
    {
        label: 'Contact',
        url: '#contact',
        class: 'contact'
    },
];

export function getLinks() {
    return JSON.stringify(links);
}