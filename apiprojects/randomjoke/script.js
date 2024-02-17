let refreshbuttn=document.getElementById('refreshBtn');
let jokes=document.getElementById('text');
let apiurl='https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
let getjoke= () =>{
    fetch(apiurl)
    .then(data=>data.json())
    .then(data=>(

    jokes.textContent=`${data.joke}`
    ));
}
getjoke();

refreshbuttn.addEventListener('click',getjoke)
