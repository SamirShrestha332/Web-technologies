const navSlide= () => {
     const burger = document.querySelector('.burger');
     const nav = document.querySelector('.activaTade');
     let navlinks = document.querySelectorAll('.activaTade li')
    
     burger.addEventListener('click',() => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //animation links
     navlinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation=''
      }
      else{
        link.style.animation = `animationnav 0.3s ease forwards ${index/7+0.5}s`;
        //this index/7 is a basically use for a smooth delay different making  in animation
      }
    });
    burger.classList.toggle('toggle');
});


     } 
navSlide()