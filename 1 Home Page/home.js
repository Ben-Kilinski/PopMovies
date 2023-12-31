const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTQxZDY0ZTQyOWRiNGFiNDFjMDU1NGE4MGY0MDkwZiIsInN1YiI6IjY1MWE4NjEyZWE4NGM3MDEwYzEzOGFlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmBsb0LIN7ieO3P2dJwuiUZw74HQHwrhlTXcaVKNI7w'
    }
  };

const api_urlDay = "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1"
const api_urlWeek = "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1"
const api_urlSearch = "https://api.themoviedb.org/3/keyword/{keyword_id}/movies"        
const teste = "https://api.themoviedb.org/3/discover/movie"

const popMovies = document.getElementById("popMovies")
const buttonDay = document.getElementById("buttonDay")
const buttonWeek = document.getElementById("buttonWeek")

buttonDay.addEventListener("click", getMoviesDay)
buttonWeek.addEventListener("click", getMoviesWeek)

function getMoviesDay() {
    fetch(api_urlDay, options)
        .then(res => res.json())

        .then(data => {console.log(data)
             
            popMovies.innerHTML = ""
            
            data.results.forEach(data => {
                popMovies.innerHTML += 
                    `<div class="homeMovies">
                    <img src="http://image.tmdb.org/t/p/w500${data.poster_path}" style="width: 200px; height: 300px; border: 2px solid black;">    
                    </div>`
                }); 
        })

        .catch(error => console.log(error));
}

function getMoviesWeek() {
    fetch(api_urlWeek, options)
        .then(res => res.json())

        .then(data => {console.log(data)
            
            popMovies.innerHTML = ""

            data.results.forEach(data => {
                popMovies.innerHTML += 
                `<div class="homeMovies">
                <img src="http://image.tmdb.org/t/p/w500${data.poster_path}" style="width: 200px; height: 300px; border: 2px solid black;">    
                ${data.title}
                </div>`
            }); 
        })

        .catch(error => console.log(error));
}
// --------------------------animation ---------------------------------

function startTextAnimation() {
    const textElement = document.getElementById("textAnimation");
    setTimeout(() => {
        textElement.style.animation = "blink 3s infinite"; // Blink "Hello" for 3 seconds
        textElement.textContent = "Hello";
        setTimeout(() => {
            textElement.style.animation = "blink 3s infinite"; // Blink "Welcome" for 3 seconds
            textElement.textContent = "Welcome to the Dark Side";
            setTimeout(() => {
                textElement.style.animation = "lightEffect 0.5s"; // Disappear with light effect
                textElement.textContent = "";
            }, 3000); // Wait for 3 seconds before disappearing with light effect
        }, 3000); // Wait for 3 seconds before switching to "Welcome"
    }, 2000); // Wait for 2 seconds before starting the animation
}

startTextAnimation();










