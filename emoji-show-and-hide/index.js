const emojis = document.getElementById('emojis')

function toggleVisibility() {
  emojis.style.display === 'none'
    ? (emojis.style.display = 'flex')
    : (emojis.style.display = 'none')
}
