function toggleDarkMode(){

    let container = document.querySelector('.container'); 
    container.classList.toggle('dark'); 
}

document.getElementById('darkmodetoggle').addEventListener('click', toggleDarkMode);