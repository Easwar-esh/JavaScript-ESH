const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    if(!validateInput()){
        e.preventDefault()
    }
})
function validateInput(){
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();
    let success=true
    if(usernameval===''){
        success=false;
        setError(username,"Username is required");
    }
    else{
        setsucces(username)
    }
    if(emailval===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailval)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setsucces(email)
    }
    if(passwordval === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordval.length < 8){
        success=false
        setError(password,"Password should be atleast 8 character")
    }
    else{
        setsucces(password)
    }
    if(cpasswordval === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordval!==passwordval){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setsucces(cpassword)
    }
    return success
}
function setError(element,message){
    const inputGroup=element.parentElement;
    const error=inputGroup.querySelector('.error')
    error.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setsucces(element){
    const inputGroup=element.parentElement;
    const error=inputGroup.querySelector('.error')
    error.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };