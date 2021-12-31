// Dark / Light Theme Toggle
const options = {
    label: '🌓', // default: ''
    bottom: 'unset',
    right: '32px', // default: '32px'
}
function addDarkmodeWidget() {
    new Darkmode(options).showWidget();
}
window.addEventListener('load', addDarkmodeWidget);