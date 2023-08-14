function convert(){
    let msg=document.getElementById("input");
    // console.log(msg.value);
    let str=msg.value;
    str=str.trim();
    let arr=msg.value.split(' ');
    let result=document.getElementById("result");
    result.innerHTML=arr.length+" words";
}