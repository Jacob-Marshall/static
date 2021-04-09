const btn = document.getElementById('toggle')

function toggle() {
    document.getElementById('root').classList.add('dark')
}

btn.addEventListener("click", toggle)
