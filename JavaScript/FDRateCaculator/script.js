function convert(){
    let month=Number(document.getElementById("input").value);
    let rate;
    if(month<=3){
        rate=5.8;
    }
    else if(month>3 && month<=6){
        rate=6.5;
    }
    else if(month>6 && month<=9){
        rate=6.8;
    }
    else{
        rate=7;
    }
    let result=document.querySelector('#result');
    console.log(rate);
    console.log(document.querySelector('#result'));
    result.innerHTML=`Your interest rate is ${rate} %`;
}