let searchbtn=document.querySelector('#Search_button');
let Qrimage=document.querySelector('#Qr_Image');
let text=document.querySelector('.text')
let alert=document.querySelector('.alert-msg');

searchbtn.addEventListener('click',()=>{
     if( text.value===''){
            alert.classList.add('alert-active');
            setTimeout(()=>{
            alert.classList.remove('alert-active');
            alert.classList.add('alert-notactive');
        },3000)

        
     
    }
    else{
        Qrimage.setAttribute('src',`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`)
    
    }
})