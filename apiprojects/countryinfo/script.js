//https://restcountries.com/v3.1/name/India?fullText=true
/* 
language;
coat of arm:(image)
currency;
population;
flag:(image);
continent;


Language=#lang
coatofarm=#coa
population=population
flag=flag
currency=currency
continent=continent



some of the important syntax i use :
i use Object.key to make a string to cover into array  which  help to get data easily
like wise i use object.values to grab all value in the array and  use toString() build in function to covert into string and last i use split()  for mae it to sub string  and join (',')to combine all  substring with commas
*/

let searchBtn=document.getElementById('searchBtn');
let Language=document.getElementById('lang');
let coatofarm=document.getElementById('coa');
let flag=document.getElementById('flag');
let currency=document.getElementById('currency');
let population=document.getElementById('population');
let continent=document.getElementById('continent');
let countryname=document.getElementById('country-name')

searchBtn.addEventListener('click',()=>{
    let Searchbox = document.getElementById('input-text');
    let apiurl = `https://restcountries.com/v3.1/name/${Searchbox.value}?fullText=true`;
    console.log(apiurl);
    document.querySelector('.search-card').classList.add('card-transition');
    fetch(apiurl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data)
            flag.setAttribute('src',data[0].flags.png);
             Language.innerHTML=Object.values(data[0].languages).toString().split(',').join(',');
            currency.innerHTML=`${data[0].currencies[Object.keys(data[0].currencies)].name}(${data[0].currencies[Object.keys(data[0].currencies)].symbol})`;
            continent.innerHTML=data[0].continents;
            coatofarm.setAttribute('src',data[0].coatOfArms.png)
            population.innerHTML=data[0].population;
            countryname.innerHTML=Searchbox.value.toUpperCase();

})
        .catch(error => console.error('Fetch Error:', error));

       
});


