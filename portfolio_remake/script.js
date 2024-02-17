var  icon=document.getElementById('icon');
let body=document.getElementById('contain');
let liners1=document.querySelector('.linebreak1');
let liners2=document.querySelector('.linebreak');





icon.addEventListener('click',()=>{
    body.classList.toggle('body');
    icon.classList.toggle('fa-sun');
    liners1.classList.toggle('lineactive')
    liners2.classList.toggle('lineactive')

    

})

const observe=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElement=document.querySelectorAll('.hidden');
hiddenElement.forEach((el)=>observe.observe(el));