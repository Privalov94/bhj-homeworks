const editor = document.getElementById('editor')

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value)
})

editor.textContent = localStorage.getItem('text');