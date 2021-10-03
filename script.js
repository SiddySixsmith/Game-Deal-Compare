// set variable to search button element
var searchBtn = document.getElementById("searchButton");

// function handleSearchSubmit
function handleSearchFormSubmit(event) {
    // 1. event.preventDefault
    event.preventDefault();
    // 2. variables for the input element
    var searchInputEl = document.getElementById("userInput")

    // run a loop to catch error, ensure return valued input
    if (!searchInputEl) {
        console.error("need valued input!");
        return;
    }
 // set query from API CheapShark (query string/path after endpoint)
    var queryEl = "https:/www.cheapshark.com/api/1.0/games?title=" + searchInputEl + "&steamAppID=35140&limit=60&exact=0"
   // location assign 
 location.assign(queryEl)
}




// add eventListener to search 
searchBtn.addEventListener("submit", handleSearchFormSubmit);

