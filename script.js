const apiKey = "0691c6593217008dabe52607e2449d01"

let movieContainer = document.getElementById('movie-container');
movieContainer.classList.add("movie-container");
let searchForm= document.getElementById('search-form');
let searchButton = document.getElementById('search-button')
let clearButton = document.getElementById('clear-button')
let searchInput = document.getElementById('search-input')
let loadMore = document.getElementById("load-more")
 
fetch("https://api.themoviedb.org/3/movie/now_playing?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=0691c6593217008dabe52607e2449d01")
    .then(res => res.json())
    .then(data => {
        data.results.forEach((movie) => {
           generateCards(movie)
            // console.log(data)
        })
    })

    function generateCards(movieObject){
        let star = document.createElement('span');
        star.classList.add('star');
        let starContent = document.createTextNode('⭐️ ');
        star.appendChild(starContent);
        // document.body.appendChild(star);
        //create rating
        let rating = document.createElement('span');
        let ratingContent = document.createTextNode(movieObject.vote_average);
        star.classList.add('rating');
        star.appendChild(ratingContent);
        // document.body.appendChild(rating);
        //create average
        let averageContainer = document.createElement('div');
        star.classList.add('average');
        averageContainer.appendChild(star);
        averageContainer.appendChild(rating);
        // document.body.appendChild(averageContainer);
        let image = document.createElement('img');
        console.log(movieObject)
        image.src = "https://image.tmdb.org/t/p/w342/"+movieObject.poster_path;
        image.setAttribute("alt","This is the poster image for " + movieObject.original_title);
        // document.body.insertBefore(image, averageContainer);
        //create name section
        let name = document.createElement('div');
        name.classList.add('name');
        name.innerText = movieObject.original_title;
        // document.body.insertBefore(name, averageContainer.nextSibling);
        //create movie section
        let movie = document.createElement('section');
        movie.classList.add('movie');
        movie.appendChild(image);
        movie.appendChild(averageContainer);
        movie.appendChild(name);
        movieContainer.appendChild(movie)
        //document.body.appendChild(movie);
       // return movie;
    }

    
    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        let searchValue = searchInput.value 
        // console.log("search value", searchValue)
        movieContainer.innerHTML = ''
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`)
    .then(res => res.json())
    .then(data => {
        data.results.forEach((movie) => {
           generateCards(movie)
            // console.log(data)
        })
    })
    })

    clearButton.addEventListener("submit", (e) => {
        e.preventDefault();
        //let searchValue = searchInput.value 
        // console.log("search value", searchValue)
        movieContainer.innerHTML = ''
        fetch("https://api.themoviedb.org/3/movie/now_playing?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=0691c6593217008dabe52607e2449d01")
    .then(res => res.json())
    .then(data => {
        data.results.forEach((movie) => {
           generateCards(movie)
            // console.log(data)
        })
    })
    })
     
    let pageNum = 2
    let result = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}` + "&page=" 
    

    loadMore.addEventListener("click", () => {
    
        fetch(result+pageNum)
    .then(res => res.json())
    .then(data => {
        data.results.forEach((movie) => {
           generateCards(movie)
            
        })
    })


})
pageNum++;
    
     

    
    // searchButton.addEventListener("submit", handleSearch)
//     const  movieContainer = document.querySelector('#movie-container')
// const loadMoreButton = document.querySelector('#load-more-button')
// function display (page){
// fetch( `https://api.themoviedb.org/3/discover/movie?api_key=57b58a649f61e3a9ea0cf603c932ffec&page=${page} `)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     for (let i = 0; i < data.results.length; i++) {
//       movieContainer.appendChild(generateCards(data.results[i]));
//     }
//   });
// }


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