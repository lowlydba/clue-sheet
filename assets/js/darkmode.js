// Dark / Light Theme Toggle
import { DarkMode } from 'https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js'

const options = {
  label: '🌓', // default: ''
  bottom: 'unset',
  right: '32px' // default: '32px'
}

function addDarkmodeWidget () {
  const dm = new DarkMode(options)
  dm.showWidget()
}

window.addEventListener('load', addDarkmodeWidget)
