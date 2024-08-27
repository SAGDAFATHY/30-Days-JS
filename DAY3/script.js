const inputs= document.querySelectorAll('input')
function updatecss()
{
    const sizing=this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.id}`,this.value+sizing)
}
inputs.forEach(input => input.addEventListener('input',updatecss))
inputs.forEach(input => input.addEventListener('mousemove',updatecss))