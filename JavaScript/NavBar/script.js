const menu=document.querySelector('.menu')
const lst=document.querySelector('nav ul')

menu.addEventListener('click',()=>{
    lst.classList.toggle('showmenu')
})
