let searchBox=document.getElementById('search-box');
let searchForm=document.getElementById('search-form');
let loadMoreBtn=document.getElementById('load-more-btn')
let searchBtn=document.getElementById('search-btn');
let searchResult=document.getElementById('search-result');

const acess_id="eAAsvf0vJo2u86lrf1LT_sCPmHiRogS39AvfjfSkuZc"
let keyword='';
let page=1;


async function  randomimage(){
    keyword=searchBox.value;
const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acess_id}&per_page=12`
    const response=await fetch(url)
    const data= await response.json()
    const results=data.results;

    results.map((results)=>{
        const image=document.createElement('img');
        image.src=results.urls.small;
        const imagelink=document.createElement('a');
        imagelink.href=results.links.html;
        imagelink.target='_blank';
        imagelink.appendChild(image);
        searchResult.appendChild(imagelink)
  

    })
    loadMoreBtn.style.display='block'

}
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    randomimage()
})
loadMoreBtn.addEventListener('click',()=>{
    page++;
    randomimage()
})