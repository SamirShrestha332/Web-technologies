let createbtn=document.getElementById('createbtn');
let background=document.querySelector('.blurbackground');
let cross_symbol=document.querySelector('.cross-symbol');
createbtn.addEventListener('click',()=>{
    background.classList.add('blurbackground-active');
    setInterval(() => {
       createbtn.classList.toggle('createbtn-active') 
    });
});
cross_symbol.addEventListener('click',()=>{
    background.classList.remove('blurbackground-active');
})
function sucessPopup() {
  //mobileinput
  //passwordinput
  let mobileInput=document.querySelector('.mobileinput').value;
  let passwordINput=document.querySelector('.passwordinput').value;

  localStorage.setItem('username',mobileInput);
  localStorage.setItem('password',passwordINput)
  

  }
  function loginSystem(){
    let email=document.getElementById('EmailField').value;
    let pass =document.getElementById('passfield').value;

    if (email==localStorage.getItem("username")
    &&   pass==localStorage.getItem("password")){
    
    alert('welcome to facebook')
    welcome()

    }
    else{
   alert('fail to log in');
    }
  }
  function welcome(){
    let welcome=document.querySelector('.welcomebox');
    welcome.classList.add('container-active')
  }
