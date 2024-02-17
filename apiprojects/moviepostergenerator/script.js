let searchBtn = document.getElementById('Searchbtn');
let container=document.querySelector('.movie-contain');
searchBtn.addEventListener('click', () => {
    let movieName = document.getElementById('MovieName');
    if (movieName.length=0){
      alert('input must be fill')
    }
    else{
   let url = `https://omdbapi.com/?apikey=e99f5e13&t=${movieName.value}`;
  
   fetch(url)
    .then((res) => res.json())
    .then((data) => {
    console.log(data)
    if (data.Response=='True'){
    var genreString = data.Genre; // Assuming data.Genre is a string like "Action, Adventure, Sci-Fi"
    var genreList = genreString.split(', '); // Split the string into an array using the comma and space as the delimiter
   
    container.innerHTML=`
    <div class="upper-part">
    <div class="movie-banner">
        <img src="${data.Poster}">
    </div>
    <div class="moviedetails">
        <div class="title">
            <p>${data.Title}</p>
        </div>
        <div class="rating">
           <span><i class="fa-solid fa-star" style="color: yellow"></i></span>
           <span>${data.imdbRating}</span>
        </div>
        <div class="movie-info">
            <div class="movieitem">${data.Rated}</div>
            <div class="movieitem">${data.Year}</div>
            <div class="movieitem">${data.Runtime}</div>
        </div>
        <div class="genregrop">
            <div class="genre">${genreList[0]}</div>
            <div class="genre">${genreList[1]}</div>
            <div class="genre">${genreList[2]}</div>
        </div>
    </div>
</div>
    <div class="plotcontain">
        <h4>Plot:</h4>
        <p>${data.Plot}</p>
    </div>
    <div class="cast-details">
        <h4>Cast:</h4>
        <p>${data.Actors}</p>
    </div>`
   }
   else{
    container.innerHTML='<h3 class="error"> Movie not found</h3>'
   }
    })
}});