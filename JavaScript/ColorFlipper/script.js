const btn=document.querySelector('#btn')
const colorText=document.getElementById('color')
const wrap=document.getElementById('wrap')
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',function() {
    let str="#"
    for(let i=0;i<6;i++){
        str=str.concat(randHexValue());
    }
    colorText.innerHTML=str;
    wrap.style.backgroundColor=str
})
function randHexValue(){
    let rand=Math.floor(Math.random()*hex.length)
    return hex[rand]
}
