function statusButtonChanger (control) {
  const Data = [
    { status: 'unchecked', value: '\u2B1C' },
    { status: 'x', value: '\u274c' },
    { status: 'question', value: '\u2753' },
    { status: 'checked', value: '\u2705' }
  ]

  let index = Data.map(function (e) { return e.value }).indexOf(control.value)
  index++
  if ((index) >= Data.length) {
    index = 0
  }
  control.value = Data[index].value
  const row = $(control).closest('tr') // eslint-disable-line no-undef
  switch (Data[index].status) {
    case 'x':
      row.toggleClass('x').siblings().removeClass()
      break
    case 'checked':
      row.toggleClass('checked').siblings().removeClass()
      break
    default:
      row.removeClass()
  }
}

// Attach function to all checkboxes
window.onload = function () {
  const elements = document.getElementsByClassName('multi-checkbox')
  for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      statusButtonChanger(this)
    }
  }
}
