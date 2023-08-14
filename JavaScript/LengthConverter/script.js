function convert(){
let cmval=Number(document.getElementById("input").value);
let incval=cmval/2.54;
let result=document.getElementById("result");
result.innerHTML=incval.toFixed(2)+" inches";
}
function convert1(){
    let c=Number(document.getElementById("input1").value);
    let f=c*(9/5)+32;
    let result1=document.getElementById("result1");
    result1.innerHTML=f.toFixed(2)+" F";
}