const container=document.querySelector('.container')
const btn = document.querySelectorAll('.btn')

const imglst=["mt1","mt2","mt3","mt4","mt5","mt6"]
let index=0;
btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        // console.log('clicked')
        if(button.classList.contains('btn-left')){
            // console.log('click-left')
            index--;
            if(index<0){
                index=imglst.length-1;
            }
            container.style.background=`url("images/${imglst[index]}.jpg") center/cover fixed no-repeat`
        }
        else{
            // console.log('click-right')
            index++;
            if(index==imglst.length){
                index=0;
            }
            container.style.background=`url("images/${imglst[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})