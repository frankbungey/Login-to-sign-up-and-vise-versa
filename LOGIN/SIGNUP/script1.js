const changePage = document.querySelector(".login")
changePage.addEventListener("click",function(){
    location.href="../LOGIN/index.html";
})

const firstName = document.querySelector('#fName');
const lastName = document.querySelector('#lName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cPassword = document.querySelector('#cPassword');
const spn = document.querySelector('.spn');
const name = document.querySelector('.name');

const button = document.querySelector(".btn").addEventListener("click",(e)=>{
    let message = [];
    e.preventDefault();
    if(firstName.value=== '' && lastName.value === ''){
    message.push("Names cannot be empty");
    name.innerText = `${message}`;
    name.style.color = "red";
    }
    if(cPassword.value === password.value){
        spn.innerText = '';
    }
    else{
        spn.style.color = "red";
        spn.innerText ="Password doesn't match";
    }
})
