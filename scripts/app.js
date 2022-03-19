const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favouriteMovieTitle");
const movieYear =document.querySelector(".userInputYear");
const movieYearToDisplay = document.querySelector(".favouriteMovieYear");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");
let yearInStorage = localStorage.getItem("year");

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieYearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage =   ` linear-gradient(rgba(148, 69, 79, 0.578), rgba(0, 0, 0, 0.800)),
    url("${imageUrlInStorage}")`;
};



btn.addEventListener("click", () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem("title", movieTitleInput);
    localStorage.setItem("imageUrl", posterUrlInput);
    localStorage.setItem("year", movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage =   ` linear-gradient(rgba(148, 69, 79, 0.877), rgba(0, 0, 0, 0.678)),
    url("${posterUrlInput}")`;
    

    movieTitle.value="";
    moviePosterUrl.value = "";
    movieYear.value = "";
});