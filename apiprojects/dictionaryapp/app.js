let url='https://api.dictionaryapi.dev/api/v2/entries/en/';
let searchBtn=document.querySelector('.searchBtn');
let sound=document.querySelector('#sound');
let example=document.querySelector('.example');



 function playsound(){
    sound.play();
 }
searchBtn.addEventListener('click',()=>{
   var word=document.querySelector('#inputElement').value;
   fetch(`${url}${word}`)
   .then((response)=>response.json())
   .then((data)=>{
    example.style.display='block';
    document.querySelector('.realword').innerHTML=word;
    document.querySelector('.word-meaning').innerHTML=data[0].meanings[0].definitions[0].definition;
    document.querySelector('.word-example').innerHTML=data[0].meanings[0].definitions[0].example;
    document.querySelector('.pos').innerHTML=data[0].meanings[0].partOfSpeech;
    document.querySelector('.sample').innerHTML=data[0].phonetics[0].text;
    sound.setAttribute('src',`${data[0].phonetics[0].audio}`);    
   })


})