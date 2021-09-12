
// const themePicker = document.getElementById('theme-picker').value

function pickTheme(event) {
  let val = event.target.value;
  let body = document.querySelector('body')
  let ul = document.querySelector('ul')

  if (val === 'dark') {
    body.classList.add('dark-mode')
    body.classList.remove('light-mode')
    body.classList.remove('sepia-mode')
    ul.classList.add('light-mode')
    ul.classList.remove('dark-mode', 'dark-links')
  } else if (val === 'light') {
    body.classList.add('light-mode')
    body.classList.remove('dark-mode')
    body.classList.remove('sepia-mode')
    ul.classList.add('dark-mode')
    ul.classList.add('light-links')
    ul.classList.remove('light-mode')
  } else {
    body.classList.add('sepia-mode')
    body.classList.remove('light-mode')
    body.classList.remove('dark-mode')
    ul.classList.add('dark-links')
    ul.classList.remove('light-mode', 'light-links')
  }
}
