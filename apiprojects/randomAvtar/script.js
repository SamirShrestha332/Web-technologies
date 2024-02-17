let api_url='https://random-data-api.com/api/v2/users?response_type=json';
let main_content=document.querySelector('.card-body');
let btn=document.querySelector('#Btn');
let url='https://random.imagecdn.app/v1/image?&format=json';

function random(){
fetch(url)
.then(res=>res.json())
.then(data=>
    {
        console.log(data.url)
            let link=data.url
            document.querySelector('.align-self-center').style.backgroundImage=
            `URL(${link})`
    })
}




btn.addEventListener('click',()=>{
fetch(api_url)
.then(res=>res.json())
.then(data=>
    {
    console.log(data)
    random()
    main_content.innerHTML=`
    <img  src='${data.avatar}'class="card-img-top" alt="..." style='border_radius:50%'>
    <h5 class="name"><span class="firstname">${data.first_name} </span><span class="lastname"> ${data.last_name}</span></h5>
   <div class="email_content">
     <img src="envelope.svg">
    <p class="Email">${data.email}</p>
  </div>
  <div class="workplace">
      <img src="person.svg" alt="">
    <p class="employee">${data.employment.title}</p>
  </div>
    <div class="address_content">
      <img src="geo-alt.svg" alt="">
    <p class="address">${data.address.country},${data.address.city}</p>
  </div>
  <div class="dateofbirth-content"> 
    <img src="calendar.svg" alt="">
  <p class="dateofbirth">${data.date_of_birth}</p>
  </div>`;
    })

})

