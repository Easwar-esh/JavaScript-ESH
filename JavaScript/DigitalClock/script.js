ampm=document.getElementById('ampm')
function display(){
    let time=new Date();
    let hr=time.getHours();
    let min=padZero(time.getMinutes());
    let sec=padZero(time.getSeconds());
    let date=time.getDate();
    let month=time.getMonth();
    let year=time.getFullYear();
    if(hr>12){
        ampm.innerHTML = 'PM'
        hr = hr - 12
    }
    else{
        ampm.innerHTML = 'AM'
    }
    hr = padZero(hr);
    document.querySelector('#hours').innerHTML=hr;
    document.querySelector('#mins').innerHTML=min;
    document.querySelector('#seconds').innerHTML=sec;
    document.querySelector('#date').innerHTML=date;
    document.querySelector('#month').innerHTML=month;
    document.querySelector('#year').innerHTML=year;
}
function padZero(num){
    return num<10?"0"+num:num
}
setInterval(display,100)
