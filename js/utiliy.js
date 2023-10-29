const menuBar = document.getElementById("menu-bar");
menuBar.addEventListener('click',()=>{
    const navList = document.getElementById("nav-list");
    navList.classList.toggle('active')
})