//Variables
var searchBtn = document.getElementById("searchButton");
var titleEl = document.getElementById("title");
var onSaleEl = document.getElementById("isOnSale");
var priceEl = document.getElementById("normalPrice");
var thumbEl = document.getElementById("thumb");
var steamRatingEl = document.getElementById("steamRatingPercent");
var menu = document.getElementById("menu-ul");


// results to be put in heading elements (innerHTML)
// using Catch to get the errors

// 1. grab the info to put in the form
// 2. grab cheapestPrice 
// 3. grab the deals (storeID, price, retailPrice, savings)

// print the result /may create table and elements?
// append the elements


// Tested the responses from API for List of Games
var formdata = new FormData();
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// function to get the games 

   // 1. Use Fetch to get the responses
    fetch("https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0", requestOptions)
    .then(test)
    .catch(function(error) {
        // handle the error
    });
    async function test(response) {
        // handle the response
       var result = await response.json()
        console.log(result) 

     
    var li = document.createElement("li");
    li.textContent = result[0].external;
    menu.appendChild(li);

    
    var li = document.createElement("li");
    li.textContent = "Cheapest $" + result[0].cheapest;
    menu.appendChild(li);

    var imgGame = document.getElementById("game-image")
    imgGame.src = result[0].thumb;
    menu.appendChild(imgGame);

    }



var requestOptions = {
    method: "GET",
    redirect: "follow"
};

// Function search API showing the list of game deals

function getDeals() {
    // 1. Use Fetch to get the responses
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&limit=10", requestOptions)
    .then(Handle)
    .catch(function(error) {
        // handle the error
    });
    async function Handle(response) {
        // handle the response
       var result = await response.json()
        console.log(result)
        
    }
}

// Tested the responses from API for List of Deals


// set up div card ?
// creating the elements to display the results ?


// 2. return response Json
// 3. run a loop through the results


// function handle the formSubmit
// 1. event.preventDefault
// 2. var for searchInput 
// loop throu searchInput to check if it's not true/error

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
 console.log(searchInputEl)
}

// add eventListener to search 
searchBtn.addEventListener("submit", handleSearchFormSubmit);
