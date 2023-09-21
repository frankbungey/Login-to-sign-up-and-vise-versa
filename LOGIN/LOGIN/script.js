
const changePage = document.querySelector(".signup")
changePage.addEventListener("click", function(){
    location.href="../SIGNUP/index1.html";
});
const email = document.querySelector('.email');
const span = document.querySelector('.span');
const span1 = document.querySelector('.span1');
const password = document.querySelector('#password');
const button = document.querySelector(".btn").addEventListener("click",()=>{
    
    if(email.value === ''){
       span.innerText = "Email can't be Empty";
       span.style.color = "red";
       email.style.border ="1px solid red"
    }
    else if(password.value===''){
    span1.innerText= "Password Required";
    span1.style.color = "red";
    password.style.border ="1px solid red";
    }
    else if(password.value < 8){
    span1.innerText= "Password must be atleast 8 characters";
    span1.style.color = "red";
    password.style.border ="1px solid red";
    }
})
