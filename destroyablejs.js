//Variables
var searchBtn = document.getElementById("searchButton");
var menu = document.getElementById("menu-ul");
var userInput = document.getElementById("userInput")



var formdata = new FormData();
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
    function game(){

    fetch("https://www.cheapshark.com/api/1.0/games?title=" + userInput + "&steamAppID=35140&limit=60&exact=0", requestOptions)
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

    }


var requestOptions = {
    method: "GET",
    redirect: "follow"
};



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


function handleSearchFormSubmit(event) {
    // 1. event.preventDefault
    event.preventDefault();
// run a loop to catch error, ensure return valued input
    if (!searchInputEl) {
        console.error("need valued input!");
        return;
    }
    game()
}
searchBtn.addEventListener("submit", handleSearchFormSubmit)