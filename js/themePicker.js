
// const themePicker = document.getElementById('theme-picker').value

function pickTheme(event) {
  let val = event.target.value;
  let body = document.querySelector('body')
  let ul = document.querySelector('ul')

  if (val === 'dark') {
    body.classList.add('dark-mode')
    body.classList.remove('light-mode', 'sepia-mode')
    ul.classList.add('light-mode', 'light-links')
    ul.classList.remove('dark-mode', 'dark-links', 'sepia-links')
  } else if (val === 'light') {
    body.classList.add('light-mode')
    body.classList.remove('dark-mode', 'sepia-mode')
    ul.classList.add('dark-mode', 'dark-links')
    ul.classList.remove('light-links', 'sepia-links', 'light-mode')
  } else {
    body.classList.add('sepia-mode')
    body.classList.remove('light-mode', 'dark-mode')
    ul.classList.add('sepia-links')
    ul.classList.remove('light-mode', 'light-links', 'dark-links', 'dark-mode')
  }
}
