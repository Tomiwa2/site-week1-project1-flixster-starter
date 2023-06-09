const apiKey = "0691c6593217008dabe52607e2449d01"

let movieContainer = document.createElement('div');
let searchForm = document.getElementById('search-button')
let searchInput = document.getElementById('search-input')
document.body.appendChild(movieContainer);

fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=0691c6593217008dabe52607e2449d01")
    .then(res => res.json())
    .then(data => {
        data.results.forEach((movie) => {
            generateCard(movie)
        })
    })

function generateCard(movieObject) {
    let star = document.createElement('span');
    star.classList.add('star');
    let starContent = document.createTextNode(':star:️');
    star.appendChild(starContent);
    //create rating
    let rating = document.createElement('span');
    rating.classList.add('rating');
    let ratingContent = document.createTextNode(movieObject.vote_average);
    rating.appendChild(ratingContent);
    //create average container
    let averageContainer = document.createElement('div');
    averageContainer.classList.add('averageContainer');
    averageContainer.appendChild(star);
    averageContainer.appendChild(rating);
    document.body.appendChild(averageContainer);
}

//search form event listener

// searchForm.addEventListener('submit', (evt) => {
//     evt.preventDefault()
//     console.log(searchInput)
//     let queryUrl = "https://api.themoviedb.org/3/search/movie?query=" + searchInput.value + '&api_key=' + apiKey
// })

// movieContainer.classList.add('movieContainer');
// create star

// async function moviedata() {
//     const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=" + apiKey)
//     const jsonReponse = await response.json()
//     console.log(jsonReponse.results)
//     return jsonReponse.results

// }
// moviedata();

/* function moreMovies() {
   const options = {
       method: 'GET',
       headers: {
         accept: 'application/json',
         Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzk4NTMyNjQzMGQ2ZmJjM2NkNTEzZDk1ZDg5YmIyMCIsInN1YiI6IjY0ODIwM2QxOTkyNTljMDExYzNlZmQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UPPnWQ-g1iOR0VlqHpbf52S39MiOUtisubFnFYa2ATc"
       }
     };
   fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
   .then(response => response.json())
   .then((data) => {
       for (let i=0; i <data.results.length; i+=1) {
           generateCards(data.results[i])
       }
   }
   )}
   moreMovies();*/ 