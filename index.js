const currentCityTag = document.querySelector(".city-name");

let currentCity = localStorage.getItem("city");
if(!currentCity){
    localStorage.setItem('city', "București");
    currentCity = "București";
}

currentCityTag.innerHTML = currentCity;


displayCurrentWeather(currentCity);

getForecastFor5Days(currentCity);


var scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

window.addEventListener("scroll", function(){
    if(window.scrollY > ( window.innerHeight / 2 )){
        scrollToTopButton.style.visibility = "visible";
        return;
    }

    this.scrollToTopButton.style.visibility = "hidden";
})